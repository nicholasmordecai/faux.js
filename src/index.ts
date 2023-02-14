// Root level exports
import { Config } from './configuration';
export { Config } from './configuration';

import { Generators } from './generators';
export { Generators } from './generators';

import { locales as Locales } from './locales';
export { locales as Locales } from './locales';


// Finance
import { Bank } from './generators/finance/bank';
export { Bank } from './generators/finance/bank';

// Geographic
import { Address } from './generators/geographic/address';
export { Address } from './generators/geographic/address';
import { Map } from './generators/geographic/map';
export { Map } from './generators/geographic/map';

// Identification
import { Person } from './generators/identification/person';
export { Person } from './generators/identification/person';

// Internet
import { Authentication } from './generators/internet/authentication';
export { Authentication } from './generators/internet/authentication';
import { Password } from './generators/internet/password';
export { Password } from './generators/internet/password';

// Math
import { Number } from './generators/math/number';
export { Number } from './generators/math/number';

// Utils
import { string } from './generators/util/string';
export { string } from './generators/util/string';
import { Array } from './generators/util/array';
export { Array } from './generators/util/array';

export const fauxjs = {
	Config,
	Generators,
	Locales,
	Bank,
	Address,
	Map,
	Person,
	Authentication,
	Password,
	Number,
	string,
	Array
};
