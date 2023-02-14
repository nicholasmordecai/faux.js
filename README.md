[![<typescript>](https://badgen.net/badge/typescript/strict%20%F0%9F%92%AA/blue?icon=typescript)](https://www.typescriptlang.org/)
[![<nicholasmordecai>](https://github.com/nicholasmordecai/faux.js/actions/workflows/test.yaml/badge.svg)](https://github.com/nicholasmordecai/faux.js/actions/workflows/test.yaml)
[![<nicholasmordecai>](https://github.com/nicholasmordecai/faux.js/actions/workflows/build.yaml/badge.svg)](https://github.com/nicholasmordecai/faux.js/actions/workflows/build.yaml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![npm](https://img.shields.io/npm/v/@fauxjs/faux.js?style=flat-square)
[![Coverage Status](https://coveralls.io/repos/github/nicholasmordecai/faux.js/badge.svg?branch=main)](https://coveralls.io/github/nicholasmordecai/faux.js?branch=main)

# faux.js

## Modern performant pseudo random data generator

> Please note, this is still very early development and has not been tested in a production envirnoment!

## Installing
```sh 
$ npm i faux.js
# or
$ yarn add faux.js
```

## Examples
### Using Generators

Generators are individual functions that return pseudo random data.

Example 1: Create a random address
```ts
import { address } from 'faux.js';
const address = address();

/*
	{
	  country: 'United Kingdom',
	  county: 'Devon',
	  city: 'Birmingham',
	  street: 'Green Lane',
	  houseNumber: 'Red Stables',
	  postcode: 'VX53 8ZF'
	}
*/
```

For a full break down of all generators, click here.

### Using Registers
Registers are kind of like factories. You can describe your object with built in, custom or inline functions to be group generators together for ease of use.

Example 1: 
```ts
import { Register, address, rngInt } from  '../core/register';

const  user  = {
	address: address,
	age: () =>  rngInt({min: 18, max: 80})
};

const userRegister = new Register(user);
```
In order to generate a new user, you can call the `build` method on that register.
Example 2a:
```ts
...
const newUser = userRegister.build();

/*
{
  address: {
    country: 'United Kingdom',
    county: 'Essex',
    city: 'Bristol',
    street: 'Kings Lane',
    houseNumber: 7,
    postcode: 'ET9 6WS'
  },
  age: 25
}
*/
```

### Server
If you're developing on the frontend, or are performing API integrations then you may find it very useful to couple registers up with an API. It's a fast and east way to generate data and fetch it through a restful API.

Example 3.

```ts
import { Server } from 'faux.js';

const server = new Server();

// create registers
const userRegister = new Register(user);
const account = new Register(account);

// define routes
const routes = {
    '/user': userRegister,
	'/cart': cartRegister
};

server.run(routes);
```

## Core Generators

#### Math 

| Name | Description | Type |
|--|--|--|
| rngInt | random integer | number |
| rngfloat | random floating point | number |
| normalDist | random float with a normal distribution | number |
| percent | random float between 0 and 1 | number |
| percentString | percent but as a string eg: '45%' | string |

#### String Util
| Name | Description | Type |
|--|--|--|
| fromFormat | random string from format (ZZ99-99) | string |

#### Array Util
| Name | Description | Type |
|--|--|--|
| rngFromArray | pick a random element from an array | elementType |

#### Geographic
| Name | Description | Type |
|--|--|--|
| postcode | postcode or zipcode | string |
| city | the city | string |
| county | the county | string |
| street | the street | string |
| houseNameNumber | the house name or number | string |
| address | full address in object format | IAddress |
| addressString | full address represented as a string | string |


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.
  
1. Fork it!
2. Create your feature branch: `git checkout -b feat/my-new-feature`
3. Add your changes: `git add .`
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request :sunglasses:

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/nicholasmordecai/faux.js/tags).

## Authors

-  **Nicholas Mordecai**

See also the list of [contributors](https://github.com/nicholasmordecai/faux.js/contributors) who participated in this project.

## License

[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0) © Nicholas Mordecai

=======

##### Notes To Self

- If a nested structure is optional, a config should be set to allow that nested property to be or not to be generated

### Need to write -

1. an object can lookup the values of a parent object for conditional statements / branches
2. you should be able to wrap any fn in a probability factor to determine one of multiple outcomes
3. Override any value / property from a function generator