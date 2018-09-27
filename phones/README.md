# phones_api

Phones API

## Features

 Phones REST API.


## Start

`$ npm start`

`$ npm run start:dev`

To see API Documentation go to http://localhost:8080/_docs

## Scripts

 - **npm run start** : `npm run documentation && node server.js`
 - **npm run start:dev** : `npm run documentation && nodemon server.js`
 - **npm run lint** : `./node_modules/.bin/eslint .`
 - **npm run documentation** : `raml2html -i ./api/api.raml -o index.html`
 - **npm run clean** : `rm -rf coverage`
 - **npm run test** : `mocha --recursive --reporter mocha-multi-reporters --reporter-options configFile=./mocha-config.json`
 - **npm run coverage** : `npm run clean; nyc npm test; rm -rf .nyc_output`
 - **npm run readme** : `node-readme && git add README.md`

## Docker image

This repo contains a Dockerfile to build an phones_api image. Phones-api image is a lightweight, stand-alone, executable package that includes everything needed to run the application, including the code, a runtime, libraries, environment variables, and config files.

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[ajv](https://www.npmjs.com/package/ajv) | ^6.5.4 | ✖
[bunyan](https://www.npmjs.com/package/bunyan) | ^1.8.12 | ✖
[mysql](https://www.npmjs.com/package/mysql) | ^2.16.0 | ✖
[raml2html](https://www.npmjs.com/package/raml2html) | ^7.2.0 | ✖
[response-time](https://www.npmjs.com/package/response-time) | ^2.3.2 | ✖
[restify](https://www.npmjs.com/package/restify) | ^7.2.1 | ✖
[restify-errors](https://www.npmjs.com/package/restify-errors) | ^6.1.1 | ✖
[restify-health-router](https://www.npmjs.com/package/restify-health-router) | ^1.0.3 | ✖
[restify-router](https://www.npmjs.com/package/restify-router) | ^0.5.0 | ✖
[sqlify](https://www.npmjs.com/package/sqlify) | ^2.4.0 | ✖
[chai](https://www.npmjs.com/package/chai) | ^4.2.0 | ✔
[eslint](https://www.npmjs.com/package/eslint) | ^5.6.0 | ✔
[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) | ^13.1.0 | ✔
[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) | ^2.14.0 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^5.2.0 | ✔
[mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter) | ^1.18.0 | ✔
[mocha-multi-reporters](https://www.npmjs.com/package/mocha-multi-reporters) | ^1.1.7 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔
[nodemon](https://www.npmjs.com/package/nodemon) | ^1.18.4 | ✔
[nyc](https://www.npmjs.com/package/nyc) | ^13.0.1 | ✔
[sinon](https://www.npmjs.com/package/sinon) | ^6.3.4 | ✔


### Readme generator

This readme file is generated using a ES6 template. It reads most of the data from package.json, list npm command, author and license, uses a customizable ES6template: [.README.md](.README.md) and uses several badges.

Don't edit directly README.md

## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributing.md) for more details. Thanks!

## Author

Victor Pose

## License

 - **ISC** : http://opensource.org/licenses/ISC
