import { int } from '../math/number';
import { rngFromArray } from '../util/array';
import { fromFormat } from '../util/string';

import { getLocale } from '../../configuration';

interface IAddress {
	country: string;
	county: string;
	city: string;
	street: string;
	houseNumber: string | number;
	postcode: string;
}

/**
 * @function postcode
 * @description Generate a random postcode
 *
 * @returns {string}
 */
export function postcode(): string {
	const format = rngFromArray(getLocale.zipcodeFormats);
	return fromFormat(format);
}

/**
 * @function city
 * @description Generate a random city name
 *
 * @returns {string}
 */
export function city(): string {
	return rngFromArray(getLocale.cities);
}

/**
 * @function county
 * @description Generate a random county
 *
 * @returns {string}
 */
export function county(): string {
	return rngFromArray(getLocale.counties);
}

/**
 * @function street
 * @description Generate a random street name
 *
 * @returns {string}
 */
export function street(): string {
	return `${rngFromArray(getLocale.streets)} ${rngFromArray(getLocale.streetSuffixes)}`;
}

/**
 * @function houseNameNumber
 * @description Generate a random house name or number
 *
 * @returns {(string | number)}
 */
export function houseNameNumber(): string | number {
	const format = rngFromArray(getLocale.houseNameFormats);
	if (format === 'N') {
		return int({ min: 1, max: 150 });
	} else {
		return `${rngFromArray(getLocale.houseNamePrefixes)} ${rngFromArray(getLocale.houseNameSuffixes)}`;
	}
}

/**
 * @function country
 * @description Generate a random country
 *
 * @returns {string}
 */
export function country(): string {
	return getLocale.name;
}

/**
 * @function address
 * @description Address generator
 *
 * @returns {IAddress}
 */
export function address(): IAddress {
	return {
		country: getLocale.name,
		county: county(),
		city: city(),
		street: street(),
		houseNumber: houseNameNumber(),
		postcode: postcode()
	};
}

/**
 * @function addressString
 * @description Address described as a string
 *
 * @returns {string}
 */
export function addressString(): string {
	const addr = address();
	return `${addr.houseNumber} ${addr.street}, ${addr.county}, ${addr.city}, ${addr.country}, ${addr.postcode}`;
}

export default {
	postcode,
	city,
	county,
	country,
	street,
	houseNameNumber,
	address,
	addressString
};
