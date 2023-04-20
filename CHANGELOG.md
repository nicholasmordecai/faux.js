# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Added
- Custom UUIDv4 function that fakes a UUID
- Better testing CD/CD for package releases

### Changed
- Bump rollup from 3.20.2 to 3.20.6
- Bump @rollup/plugin-commonjs from 24.0.1 to 24.1.0
- Bump eslint from 8.37.0 to 8.38.0
- Bump @rollup/plugin-typescript from 11.0.0 to 11.1.0
- Bump @types/node from 18.14.4 to 18.15.12

### Fixed
- Better test coverage
- Stubbing some functions to make sure assertions are correct 100% of the time

### Changed
- Bump eslint-config-prettier from 8.6.0 to 8.8.0
- Bump dpdm from 3.12.0 to 3.13.0
- Bump sinon from 15.0.1 to 15.0.3
- Bump nodemon from 2.0.20 to 2.0.22
- Bump @types/node from 18.14.4 to 18.15.11

## 0.1.5 - 2023-04-01

### Changed
- Added export of disstribution functions

## 0.1.4 - 2023-03-03
### Changed
- Bump @types/uuid from 9.0.0 to 9.0.1
- Bump @types/glob from 8.0.1 to 8.1.0
- Bump @types/node from 18.14.1 to 18.14.4
- Bump eslint from 8.34.0 to 8.37.0
- Bump @typescript-eslint/parser from 5.53.0 to 5.57.0
- Bump rollup from 3.17.2 to 3.20.2
- Bump fastify from 4.13.0 to 4.15.0
- Bump @typescript-eslint/eslint-plugin from 5.53.0 to 5.57.0

### Fixed
- Changed remove module from tsconfig to fix a bug where builds are failing to be imported into the

## 0.1.3 - 2023-03-03

## 0.1.2 - 2023-03-03
### Changed
- Renamed statistics module to probability to better reflect what the functions do
- Moved probability to core rather than a generator as it's not really a generator per-se
- Removed jsonwebtoken for the time being to test if that's the cause of a browser error

## 0.1.1 - 2023-02-25
### Changed
- Added better module exports and easier core functionality importing
- Switched from tsup to rollup due to better adoption and better compiled file size
- Added 'windows-latest' to os matrix for github workflow
- Removed a bunch of code that was originally meant for this project but ended up making it overly complicated. That code will now live in it's own project after this reaches some level of maturity.
- Add an extra export from the root entry for convenience.
- Bump dpdm from 3.11.0 to 3.12.0
- Bump eslint from 8.32.0 to 8.34.0
- Bump @typescript-eslint/parser from 5.49.0 to 5.53.0
- Bump @typescript-eslint/eslint-plugin from 5.49.0 to 5.53.0
- Bump @types/node from 18.11.18 to 18.14.1
- Bump fastify from 4.12.0 to 4.13.0
- Bump rollup from 3.12.1 to 3.17.2

### Fixed
- Fixed the windows lint error, so now it runs successfully in CI tests

## 0.1.0 - 2023-01-31
### Changed
- Renamed repository to Faux.js. Tseudo has been depreciated
- Merged the docs branch (WIP) into main to keep it in line
- Moved typescript to a dev dependency
- Added TSUP for building the dist files
- Moved eslint.json to eslint.js so the EOF rule cna be OS specific
- Added a matrix for testing Unix, Linux and Win32 based OS.

## 0.0.7 - 2023-01-29
### Added
- Better test covergae

### Changed
- Changed Register keyword to Factory as it makes more sense given what it does.
- Bump @typescript-eslint/eslint-plugin from 5.48.2 to 5.49.0
- Bump @typescript-eslint/parser from 5.48.2 to 5.49.0
- Bump fastify from 4.11.0 to 4.12.0
- Bump @types/glob from 8.0.0 to 8.0.1
- Bump dpdm from 3.10.0 to 3.11.0
- Bump eslint from 8.31.0 to 8.32.0

### Fixed
- Exports of the bank generator were not quite right

## 0.0.6 - 2023-01-15
### Added
- Added an alpha numeric generator
- Added a 'from sets' function in the maths number generator

### Changed
- Removed docs for now as they weren't working correctly
- Removed performance scripts as they're just cluttering up the repo - will probably add them back in at a later date, or make a clean repo for it.
- Bump @types/jsonwebtoken from 9.0.0 to 9.0.1
- Bump @typescript-eslint/parser from 5.48.0 to 5.48.1
- Bump @typescript-eslint/eslint-plugin from 5.48.0 to 5.48.1

## 0.0.5 - 2023-01-11
### Added
- Server now has a delay configuration - this waits for N ms before returning the results. This is to simulate boat normal and abnormal response times.
- Password generator MD5 hash function
- Password generator has Salt function
- Authentication generator has a JWT function

### Fixed
- Added missing dist files

## 0.0.4 - 2023-01-06
### Added
- Started adding some examples

### Fixed
- Added missing dist files

## 0.0.3 - 2023-01-05
### Added
- Basic person name generation

### Changed
- Refactor exports

### Fixed
- Bump @typescript-eslint/eslint-plugin from 5.47.1 to 5.48.0
- Bump @typescript-eslint/parser from 5.47.1 to 5.48.0
- Bump sinon from 14.0.2 to 15.0.1

## 0.0.2 - 2023-01-03
