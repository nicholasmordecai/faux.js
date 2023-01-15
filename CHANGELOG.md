# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Fixed
- Added missing dist files

### Added
- Server now has a delay configuration - this waits for N ms before returning the results. This is to simulate boat normal and abnormal response times.
- Password generator MD5 hash function
- Password generator has Salt function
- Authentication generator has a JWT function
- Added an alpha numeric generator
- Added a 'from sets' function in the maths number generator

### Changed
- Removed docs for now as they weren't working correctly
- Removed performance scripts as they're just cluttering up the repo - will probably add them back in at a later date, or make a clean repo for it.

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
