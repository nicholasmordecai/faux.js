import { int } from '../math/number';
import { fromArray } from '../util/array';
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
	const format = fromArray(getLocale.zipcodeFormats);
	return fromFormat(format);
}

/**
 * @function city
 * @description Generate a random city name
 *
 * @returns {string}
 */
export function city(): string {
	return fromArray(getLocale.cities);
}

/**
 * @function county
 * @description Generate a random county
 *
 * @returns {string}
 */
export function county(): string {
	return fromArray(getLocale.counties);
}

/**
 * @function street
 * @description Generate a random street name
 *
 * @returns {string}
 */
export function street(): string {
	return `${fromArray(getLocale.streets)} ${fromArray(getLocale.streetSuffixes)}`;
}

/**
 * @function houseNameNumber
 * @description Generate a random house name or number
 *
 * @returns {(string | number)}
 */
export function houseNameNumber(): string | number {
	const format = fromArray(getLocale.houseNameFormats);
	if (format === 'N') {
		return int({ min: 1, max: 150 });
	} else {
		return `${fromArray(getLocale.houseNamePrefixes)} ${fromArray(getLocale.houseNameSuffixes)}`;
	}
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

export const Address = {
	postcode,
	city,
	county,
	street,
	houseNameNumber,
	address,
	addressString
};
