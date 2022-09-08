[![<megmut>](https://circleci.com/gh/megmut/lumis.svg?style=svg)](https://app.circleci.com/pipelines/github/megmut/lumis?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![<typescript>](https://badgen.net/badge/typescript/strict%20%F0%9F%92%AA/blue?icon=typescript)](https://www.typescriptlang.org/)
![npm](https://img.shields.io/npm/v/lumis?style=flat-square)

# Lumis

> Automatically create factory and fake data from typescript interfaces

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Table of contents

- [Lumis](#lumis)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Running the tests](#running-the-tests)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)


To install the library, run:

```sh
$ npm install --save-dev lumis
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev lumis
```

## Usage

To run Lumis on your project, add the command to your package.json scripts:

```json 
"script": {
      "...": "...",
      "lumis": "lumis -f ./src/**/*{.d.ts,.ts}"
}
```
and execute the above script like so:
```sh
$ npm run lumis
# or
$ yarn lumis
```

or if you have it installed globally:
```sh
$ lumis --files=./**/*.ts
```

### Running the tests

```sh
$ npm test
```




## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Nicholas Mordecai**

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Andrea SonnY

// TODO
Arrays containing complex types don't work.
