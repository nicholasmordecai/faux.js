import { FastifyInstance } from 'fastify';

interface ILocale {
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
type localeSelectors = keyof typeof locales;
declare const locales: {
    gb: ILocale;
    global: ILocale;
    ca: ILocale;
    usa: ILocale;
};

declare function fromFormat(format: string): string;
declare function alphaN(length: number): string;

declare function rngFromArray<T>(array: Array<T>): T;

interface MathOptions {
    min?: number;
    max?: number;
    precision?: number;
}
declare function float(options?: MathOptions): number;
declare function int(options?: MathOptions): number;
declare function normalDist(min: number, max: number, skew: number): number;
declare function percent(options?: MathOptions): number;
declare function percentString(options?: MathOptions): string;
declare function bool(): boolean;

/**
 * @category Generators
 * @subcategory Identification
 */
declare function uuid(): string;

/**
 * @category Generators
 * @subcategory Identification
 */
interface FullName {
    firstName: string;
    lastName: string;
    middleNames: string[];
    nickName: string;
    gender: Gender;
}
interface PersonOptions {
    gender: Gender;
}
type Gender = 'Male' | 'Female';
declare function nickname(): string;
declare function fullName(options?: PersonOptions): FullName;
declare function firstName(options?: PersonOptions): string;
declare function lastName(): string;
declare function middleNames(): string[];
declare function gender(): Gender;

/**
 * @category Generators
 * @subcategory Geographic
 */
interface LatLong {
    lat: number;
    long: number;
}
/**
 * Generates a latitude and longitude object
 *
 * @returns {LatLong}
 */
declare function latLong(): LatLong;
/**
 * Generate a latitude
 *
 * @returns {number}
 */
declare function lat(): number;
/**
 * Generated a longitude
 *
 * @returns {number}
 */
declare function long(): number;

/**
 * @category Generators
 * @subcategory Geographic
 */
interface IAddress {
    country: string;
    county: string;
    city: string;
    street: string;
    houseNumber: string | number;
    postcode: string;
}
/**
 * @description Generate a random postcode
 *
 * @returns {string}
 */
declare function postcode(): string;
/**
 * @description Generate a random city name
 *
 * @returns {string}
 */
declare function city(): string;
/**
 * Generate a random county
 *
 * @returns {string}
 */
declare function county(): string;
/**
 * Generate a random street name
 *
 * @returns {string}
 */
declare function street(): string;
/**
 * Generate a random house name or number
 *
 * @returns {(string | number)}
 */
declare function houseNameNumber(): string | number;
/**
 * Generate a random country
 *
 * @returns {string}
 */
declare function country(): string;
/**
 * Address generator
 *
 * @returns {IAddress}
 */
declare function address(): IAddress;
/**
 * Address described as a string
 *
 * @returns {string}
 */
declare function addressString(): string;

/**
 * @category Generators
 * @subcategory Finance
 */
declare function IBAN(): string;
declare function accountNumber(): number;
declare function sortCode(): number;
declare function cardNumber(): string;
declare function cvv(): number;

type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[] ? RecursivePartial<U>[] : T[P] extends object ? RecursivePartial<T[P]> : T[P];
};

declare class Factory<T> {
    private dictionary;
    constructor(obj: T);
    add(key: keyof T, property: T[keyof T]): void;
    get<K extends keyof T>(key: K): T[K];
    /**
     * @function build
     * @description Builds a new object from the factory schema. Require you to pass in all properties.
     * @param {T} properties
     * @returns {T} A complete
     */
    build(properties: T): T;
    /**
     * @function buildPartial
     * @description Like the build function, but all properties are optional so you can build the object as you go.
     * It is advised to use this in conjunction with the validate function.
     *
     * @param { RecursivePartial<T> } properties
     * @returns { RecursivePartial<T> } The new object from the factory schema, but with all keys as optional
     */
    buildPartial(properties: RecursivePartial<T>): RecursivePartial<T>;
    /**
     * @function validate
     * @description Takes an object that is meant to be the same as what's described above. However, due to the partial keyword, it is possible to have missed
     * some of the properties, so use this function to ensure the object fully meets the criteria of the schema.
     * @param object
     * @returns { boolean } True if the object is valid
     */
    validate(object: RecursivePartial<T>): boolean;
    fake(): T;
    private traverseValidate;
    private itemsAreSameType;
    private traverseObject;
}

type TGenerator<T> = (() => T) | T;
interface IProbability<T> {
    probability: number;
    generator: TGenerator<T>;
}
interface IProbabilityOptions<T> {
    conditions: IProbability<T>[];
}
declare function Probability<T>(options: IProbabilityOptions<T>): (options: IProbabilityOptions<T>) => T;

declare function Contingency<T, P>(parameters: P, generator: () => T): T;

interface IConfig {
    seed: number;
    locale: localeSelectors;
}

interface ServerConfig {
    port?: number;
    defaultDelay?: number | {
        min: number;
        max: number;
    };
}
declare class Server {
    static run(routes: Record<string, any>, config: ServerConfig): FastifyInstance;
}

declare const Tseudo: {
    API: {
        Server: typeof Server;
    };
    Config: IConfig;
    Core: {
        Contingency: typeof Contingency;
        Probability: typeof Probability;
        Factory: typeof Factory;
    };
    Generators: {
        finance: {
            Bank: {
                IBAN: typeof IBAN;
                accountNumber: typeof accountNumber;
                sortCode: typeof sortCode;
                cardNumber: typeof cardNumber;
                cvv: typeof cvv;
            };
        };
        geographic: {
            address: {
                postcode: typeof postcode;
                city: typeof city;
                county: typeof county;
                country: typeof country;
                street: typeof street;
                houseNameNumber: typeof houseNameNumber;
                address: typeof address;
                addressString: typeof addressString;
            };
            map: {
                lat: typeof lat;
                long: typeof long;
                latLong: typeof latLong;
            };
        };
        identification: {
            person: {
                firstName: typeof firstName;
                lastName: typeof lastName;
                middleNames: typeof middleNames;
                nickname: typeof nickname;
                fullName: typeof fullName;
                gender: typeof gender;
            };
            uuid: {
                uuid: typeof uuid;
            };
        };
        math: {
            number: {
                float: typeof float;
                int: typeof int;
                normalDist: typeof normalDist;
                bool: typeof bool;
                percent: typeof percent;
                percentString: typeof percentString;
            };
        };
        util: {
            array: {
                rngFromArray: typeof rngFromArray;
            };
            string: {
                alphaN: typeof alphaN;
                fromFormat: typeof fromFormat;
            };
        };
    };
    Locales: {
        gb: ILocale;
        global: ILocale;
        ca: ILocale;
        usa: ILocale;
    };
};

export { Tseudo };
