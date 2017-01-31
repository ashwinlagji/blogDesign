A Sample Blog Template Design Project
# Futero Techno Blog Template Design

This is a sample test project for the Blog design template using angular 1.5 and node (Yeoman Generator)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

The Project has following requirements

  1. [NodeJs](http://nodejs.org/en/) - -4.7.1
  2. npm -4.1.2

Check the node version installed in your system using
```
node --version
```
```
npm --version
```

### Installing

1. Install Yeoman

```
npm install yo
```
use ```  -g  ``` option for global install


After the Yeoman install angular generator for the Yeoman. I am using fountain-webapp for generating the folder structure of the angular app.

```
npm install fountain-webapp
```

The generators can also be searched and installed by running the yoeoman.
```
user@user-HP:~/CODE/project$ yo
? 'Allo user! What would you like to do? (Use arrow keys)
  Run a generator
  ──────────────
❯ Install a generator
  Find some help
  Get me out of here!
  ──────────────
```
After sucessfully installing the generator run the generator and follow the steps. visit yeoman website for more details.

## Running the tests

Basically the Yeoman gives almost all options for  building, Testing and rinnging the angular code
Check the package.json file for all available options.

### Running Single test

Run the Test using this command

```
npm run test
```

### Contineous Running Tests

running the test scripts contineously

```
npm run test:auto
```


## Deployment

Tested the code deployment on the [HEROKU](https://www.heroku.com/).

check the latest deployed build on https://futuerotechno.herokuapp.com/

## Built With

* [Angular](https://angularjs.org/) - MVC at client side.
* [Yeoman](http://yeoman.io/) - Builds basic folder structure and helps in easy getting started with angularjs.
* [Gulp](http://gulpjs.com/) - A simple JavaScript Task Runner.
* [Node](https://nodejs.org/en/) - For deployment server.

## Contributing

Please read [CONTRIBUTING.md](https://) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Ashwin Lagji** - *Initial work* - [ashwinlagji](https://github.com/ashwinlagji)

See also the list of [contributors]() who participated in this project.

## License

This project is licensed under the Apache License Version 2.0, - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

*
*
* etc
