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
export declare function postcode(): string;
/**
 * Generate a random city name
 *
 * @export
 * @returns {string}
 */
export declare function city(): string;
/**
 * Generate a random county
 *
 * @export
 * @returns {string}
 */
export declare function county(): string;
/**
 * Generate a random street name
 *
 * @export
 * @returns {string}
 */
export declare function street(): string;
/**
 * Generate a random house name or number
 *
 * @export
 * @returns {(string | number)}
 */
export declare function houseNameNumber(): string | number;
/**
 * Generate a random country
 *
 * @export
 * @returns {string}
 */
export declare function country(): string;
/**
 * Address generator
 *
 * @export
 * @returns {IAddress}
 */
export declare function address(): IAddress;
/**
 * Address described as a string
 *
 * @export
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
