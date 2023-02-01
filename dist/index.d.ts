import { FastifyInstance } from 'fastify';
import { SignOptions } from 'jsonwebtoken';

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

interface IConfig {
    seed: number;
    locale: localeSelectors;
}
declare const Config: IConfig;

declare function fromFormat(format: string): string;
declare function alphaN(length: number): string;
declare const string: {
    alphaN: typeof alphaN;
    fromFormat: typeof fromFormat;
};

declare function fromArray<T>(array: Array<T>): T;
declare const Array: {
    fromArray: typeof fromArray;
};

declare function normalDist(min: number, max: number, skew: number): number;

interface MathOptions {
    min?: number;
    max?: number;
    precision?: number;
}
declare function float(options?: MathOptions): number;
declare function int(options?: MathOptions): number;
declare function percent(options?: MathOptions): number;
declare function percentString(options?: MathOptions): string;
declare function bool(): boolean;
declare const Number: {
    float: typeof float;
    int: typeof int;
    bool: typeof bool;
    percent: typeof percent;
    percentString: typeof percentString;
};

declare function uuid(): string;

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
declare const Person: {
    firstName: typeof firstName;
    lastName: typeof lastName;
    middleNames: typeof middleNames;
    nickname: typeof nickname;
    fullName: typeof fullName;
    gender: typeof gender;
};

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
declare const Map: {
    lat: typeof lat;
    long: typeof long;
    latLong: typeof latLong;
};

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
declare function postcode(): string;
/**
 * @function city
 * @description Generate a random city name
 *
 * @returns {string}
 */
declare function city(): string;
/**
 * @function county
 * @description Generate a random county
 *
 * @returns {string}
 */
declare function county(): string;
/**
 * @function street
 * @description Generate a random street name
 *
 * @returns {string}
 */
declare function street(): string;
/**
 * @function houseNameNumber
 * @description Generate a random house name or number
 *
 * @returns {(string | number)}
 */
declare function houseNameNumber(): string | number;
/**
 * @function country
 * @description Generate a random country
 *
 * @returns {string}
 */
declare function country(): string;
/**
 * @function address
 * @description Address generator
 *
 * @returns {IAddress}
 */
declare function address(): IAddress;
/**
 * @function addressString
 * @description Address described as a string
 *
 * @returns {string}
 */
declare function addressString(): string;
declare const Address: {
    postcode: typeof postcode;
    city: typeof city;
    county: typeof county;
    country: typeof country;
    street: typeof street;
    houseNameNumber: typeof houseNameNumber;
    address: typeof address;
    addressString: typeof addressString;
};

declare function IBAN(): string;
declare function accountNumber(): number;
declare function sortCode(): number;
declare function cardNumber(): string;
declare function cvv(): number;
declare const Bank: {
    IBAN: typeof IBAN;
    accountNumber: typeof accountNumber;
    sortCode: typeof sortCode;
    cardNumber: typeof cardNumber;
    cvv: typeof cvv;
};

declare const Generators: {
    Finance: {
        Bank: {
            IBAN: typeof IBAN;
            accountNumber: typeof accountNumber;
            sortCode: typeof sortCode;
            cardNumber: typeof cardNumber;
            cvv: typeof cvv;
        };
    };
    Geographic: {
        Address: {
            postcode: typeof postcode;
            city: typeof city;
            county: typeof county;
            country: typeof country;
            street: typeof street;
            houseNameNumber: typeof houseNameNumber;
            address: typeof address;
            addressString: typeof addressString;
        };
        Map: {
            lat: typeof lat;
            long: typeof long;
            latLong: typeof latLong;
        };
    };
    Identification: {
        Person: {
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
    Math: {
        int: typeof int;
        float: typeof float;
        bool: typeof bool;
        percent: typeof percent;
        normalDist: typeof normalDist;
    };
    Util: {
        Array: {
            fromArray: typeof fromArray;
        };
        string: {
            alphaN: typeof alphaN;
            fromFormat: typeof fromFormat;
        };
    };
};

declare function Contingency<T, P>(parameters: P, generator: () => T): T;

type TGenerator<T> = (() => T) | T;
interface IProbability<T> {
    probability: number;
    generator: TGenerator<T>;
}
interface IProbabilityOptions<T> {
    conditions: IProbability<T>[];
}
declare function Probability<T>(options: IProbabilityOptions<T>): (options: IProbabilityOptions<T>) => T;

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
    private traverseValidate;
    private itemsAreSameType;
    fake(): T;
    private traverseObject;
}

declare const Core: {
    Contingency: typeof Contingency;
    Probability: typeof Probability;
    Factory: typeof Factory;
};

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

declare const API: {
    Server: typeof Server;
};

/**
 * @description Generates a new json web token (JWT)
 *
 * @example
 * const token = sign({some: payload});
 *
 */
declare function JWT(payload?: string | object | Buffer, privateKey?: string, options?: SignOptions): string;
/**
 * @description generates a random alpha numeric token
 *
 * @example
 * const t = token(); // hA76dcB12l
 */
declare function token(len?: number): string;
declare const Authentication: {
    JWT: typeof JWT;
    token: typeof token;
};

/**
 * @module
 * @category Generators
 * @subcategory Internet
 * @description Some awesome description for this generator...
 */
/**
 * @function md5
 * @description Hash any string input with MD5
 *
 * @param {string} [input] input string to hash
 * @returns {string} the hashed string
 *
 * @example typescript const hash = md5('my-string');
 */
declare function md5(input?: string): string;
/**
 * @function salt
 * @description Generates a random salt
 *
 * @param {number} [len=10] input string to hash
 * @returns {string} the hashed string
 *
 * @example const randomSalt = salt();
 *
 * const randomSalt2 = salt(12);
 */
declare function salt(len?: number): string;
declare const Password: {
    md5: typeof md5;
    salt: typeof salt;
};

export { API, Address, Array, Authentication, Bank, Config, Contingency, Core, Factory, Generators, locales as Locales, Map, Number, Password, Person, Probability, Server, string };
