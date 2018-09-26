const errors = require('restify-errors');
const Ajv = require('ajv');

const sanitizeDataPath = data => (data ? `${data.replace('.', '')}.` : '');

const parseValidation = (error) => {
  switch (error.keyword) {
    case 'type':
      return `${(error.dataPath ? error.dataPath : 'Request')} is invalid type, should be: ${error.params.type}`;
    case 'additionalProperties':
      return `Invalid extra property found: ${error.params.additionalProperty}`;
    case 'required':
      return `Missing required property: ${sanitizeDataPath(error.dataPath)}${error.params.missingProperty.replace('.', '')}`;
    case 'anyOf':
      return 'At least one property is required';
    case 'minItems':
    case 'minLength':
    case 'maxLength':
    case 'pattern':
      return `Property ${error.dataPath} ${error.message}`;
    default:
      return 'Unknown error';
  }
};

const formatErrors = errors => errors.map(error => parseValidation(error)).join('. ');

const validateData = ajv => (schema, data, next) => {
  const valid = ajv.validate(schema, data);
  if (!valid) {
    const message = formatErrors(ajv.errors);
    return next(new errors.BadRequestError(message));
  }
  return next();
};

const validateWithSchema = (schema, data, next) => {
  const ajv = new Ajv({
    schemaId: 'auto'
  });
  return validateData(ajv)(schema, data, next);
};

exports.body = schema => (req, res, next) => validateWithSchema(schema, req.body, next);