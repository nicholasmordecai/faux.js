export interface ILocale {
    code: string;
    name: string;
    timezones: string[];
    languageCode: string;
    zipcodeFormats: string[];
    regions: string[];
    counties: string[];
    cities: string[];
    streets: string[];
    streetSuffixes: string[];
    houseNameFormats: string[];
    houseNamePrefixes: string[];
    houseNameSuffixes: string[];
    bank: {
        iban: string;
        currency: {
            symbol: string;
            name: string;
            code: string;
        }
    }
    names: {
        male: string[];
        female: string[];
        middleNames: string[];
        lastNames: string[];
        nicknames: string[];
    }
}

export type localeSelectors = keyof typeof locales;

import { GB } from './gb';

export const locales = {
	gb: GB,
	global: GB,
	ca: GB,
	usa: GB
};
