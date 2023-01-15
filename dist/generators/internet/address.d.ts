/**
 * @category Generators
 * @subcategory Internet
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
export declare function postcode(): string;
/**
 * @description Generate a random city name
 *
 * @returns {string}
 */
export declare function city(): string;
/**
 * Generate a random county
 *
 * @returns {string}
 */
export declare function county(): string;
/**
 * Generate a random street name
 *
 * @returns {string}
 */
export declare function street(): string;
/**
 * Generate a random house name or number
 *
 * @returns {(string | number)}
 */
export declare function houseNameNumber(): string | number;
/**
 * Generate a random country
 *
 * @returns {string}
 */
export declare function country(): string;
/**
 * Address generator
 *
 * @returns {IAddress}
 */
export declare function address(): IAddress;
/**
 * Address described as a string
 *
 * @returns {string}
 */
export declare function addressString(): string;
declare const _default: {
    postcode: typeof postcode;
    city: typeof city;
    county: typeof county;
    country: typeof country;
    street: typeof street;
    houseNameNumber: typeof houseNameNumber;
    address: typeof address;
    addressString: typeof addressString;
};
export default _default;
