import { int } from '../math/number';
import { rngFromArray } from '../util/array';
import { fromFormat } from '../util/string';

import { getLocale } from '../../configuration';

/**
 * Address interface
 *
 * @interface IAddress
 * @typedef {IAddress}
 */
interface IAddress {
    /**
	 * The country name
	 *
	 * @type {string}
	 */
	country: string;
    /**
	 * The county name
	 *
	 * @type {string}
	 */
	county: string;
    /**
	 * The city name
	 *
	 * @type {string}
	 */
	city: string;
    /**
	 * The street name
	 *
	 * @type {string}
	 */
	street: string;
    /**
	 * The house name or number
	 *
	 * @type {(string | number)}
	 */
	houseNumber: string | number;
    /**
	 * The postcode
	 *
	 * @type {string}
	 */
	postcode: string;
}

/**
 * Generate a random postcode
 *
 * @export
 * @returns {string}
 */
export function postcode(): string {
	const format = rngFromArray(getLocale.zipcodeFormats);
	return fromFormat(format);
}

/**
 * Generate a random city name
 *
 * @export
 * @returns {string}
 */
export function city(): string {
	return rngFromArray(getLocale.cities);
}

/**
 * Generate a random county
 *
 * @export
 * @returns {string}
 */
export function county(): string {
	return rngFromArray(getLocale.counties);
}

/**
 * Generate a random street name
 *
 * @export
 * @returns {string}
 */
export function street(): string {
	return `${rngFromArray(getLocale.streets)} ${rngFromArray(getLocale.streetSuffixes)}`;
}

/**
 * Generate a random house name or number
 *
 * @export
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
 * Generate a random country
 *
 * @export
 * @returns {string}
 */
export function country(): string {
	return getLocale.name;
}

/**
 * Address generator
 *
 * @export
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
 * Address described as a string
 *
 * @export
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
