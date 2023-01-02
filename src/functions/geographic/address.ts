import { rngInt } from '../math/number';
import { rngFromArray } from '../util/array';
import { fromFormat } from '../util/string';

import { GB } from '../../locales/gb';
import { Config, getLocale } from './../../configuration';

interface IAddress {
    country: string;
    county: string;
    city: string;
    street: string;
    houseNumber: string | number;
    postcode: string;
}

export function postcode(): string {
	const format = rngFromArray(getLocale.zipcodeFormats);
	return fromFormat(format);
}

export function city(): string {
	return rngFromArray(getLocale.cities);
}

export function county(): string {
	return rngFromArray(getLocale.counties);
}

export function street(): string {
	return `${rngFromArray(getLocale.streets)} ${rngFromArray(getLocale.streetSuffixes)}`;
}

export function houseNameNumber() {
	const format = rngFromArray(getLocale.houseNameFormats);
	if (format === 'N') {
		return rngInt({ min: 1, max: 150 });
	} else {
		return `${rngFromArray(getLocale.houseNamePrefixes)} ${rngFromArray(getLocale.houseNameSuffixes)}`;
	}
}

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

export function addressString(): string {
	const addr = address();
	return `${addr.houseNumber} ${addr.street}, ${addr.county}, ${addr.city}, ${addr.country}, ${addr.postcode}`;
}
