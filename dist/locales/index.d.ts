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
    };
    names: {
        male: string[];
        female: string[];
        middleNames: string[];
        lastNames: string[];
        nicknames: string[];
    };
}
export type localeSelectors = keyof typeof locales;
export declare const locales: {
    gb: ILocale;
    global: ILocale;
    ca: ILocale;
    usa: ILocale;
};
