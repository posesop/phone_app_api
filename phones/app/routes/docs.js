const errors = require('restify-errors');
const fs = require('fs');
const log = require('../config/log');

exports.get = (req, res, next) => {
  try {
    const html = fs.readFileSync('index.html');
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(html),
      'Content-Type': 'text/html',
    });
    res.write(html);
    return next();
  } catch (error) {
    log.error('ERROR: Method get docs', error);
    const err = new errors.NotFoundError('No API definition');
    return next(err);
  }
};
