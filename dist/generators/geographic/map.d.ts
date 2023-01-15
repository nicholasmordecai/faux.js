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
export declare function latLong(): LatLong;
/**
 * Generate a latitude
 *
 * @returns {number}
 */
export declare function lat(): number;
/**
 * Generated a longitude
 *
 * @returns {number}
 */
export declare function long(): number;
declare const _default: {
    lat: typeof lat;
    long: typeof long;
    latLong: typeof latLong;
};
export default _default;
