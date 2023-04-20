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
export declare function postcode(): string;
/**
 * @function city
 * @description Generate a random city name
 *
 * @returns {string}
 */
export declare function city(): string;
/**
 * @function county
 * @description Generate a random county
 *
 * @returns {string}
 */
export declare function county(): string;
/**
 * @function street
 * @description Generate a random street name
 *
 * @returns {string}
 */
export declare function street(): string;
/**
 * @function houseNameNumber
 * @description Generate a random house name or number
 *
 * @returns {(string | number)}
 */
export declare function houseNameNumber(): string | number;
/**
 * @function address
 * @description Address generator
 *
 * @returns {IAddress}
 */
export declare function address(): IAddress;
/**
 * @function addressString
 * @description Address described as a string
 *
 * @returns {string}
 */
export declare function addressString(): string;
export declare const Address: {
    postcode: typeof postcode;
    city: typeof city;
    county: typeof county;
    street: typeof street;
    houseNameNumber: typeof houseNameNumber;
    address: typeof address;
    addressString: typeof addressString;
};
export {};
