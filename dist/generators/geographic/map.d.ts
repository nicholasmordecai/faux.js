/**
 * Interface for a position object (latitude and longitude)
 *
 * @interface LatLong
 * @typedef {LatLong}
 */
interface LatLong {
    /**
     * Latitude
     *
     * @type {number}
     */
    lat: number;
    /**
     * Longitude
     *
     * @type {number}
     */
    long: number;
}
/**
 * Generates a latitude and longitude object
 *
 * @export
 * @returns {LatLong}
 */
export declare function latLong(): LatLong;
/**
 * Generate a latitude
 *
 * @export
 * @returns {number}
 */
export declare function lat(): number;
/**
 * Generated a longitude
 *
 * @export
 * @returns {number}
 */
export declare function long(): number;
declare const _default: {
    lat: typeof lat;
    long: typeof long;
    latLong: typeof latLong;
};
export default _default;
