# phone_app_api

This is the phone management application

## Requirements
- [Docker](https://www.docker.com/)

## Docker Services

  This docker compose contains
  - MYSQL 
  - Phones API (node.js)
  - Orders API (node.js)


## Start

If you want to run in development mode, execute this command:
```shell
> docker-compose up --build
```

Run following `docker-compose` command to build and start the services and production environment:
```shell
> docker-compose -f docker-compose.yml up --build
```

Now you can acces:

  - Phones API [`http://localhost:8080/`](http://localhost:8080/)
  - Orders API [`http://localhost:8081/`](http://localhost:8081/)

## Scripts

 - **npm run test** : `cd ./phones && npm run test && cd ./orders && npm run test`
 - **npm run coverage** : `cd ./phones && npm run coverage && cd ./orders && npm run coverage`
 - **npm run readme** : `node-readme && git add README.md && cd ./phones && npm run readme && cd ../orders && npm run readme`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✖


### Readme generator

This readme file is generated using a ES6 template. It reads most of the data from package.json, list npm command, author and license, uses a customizable ES6template: [.README.md](.README.md) and uses several badges.

Don't edit directly README.md

## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributing.md) for more details. Thanks!

## Author

Victor Pose

## License

 - **ISC** : http://opensource.org/licenses/ISC
