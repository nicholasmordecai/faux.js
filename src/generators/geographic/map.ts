import { rngFloat } from "../math/number";

// Note: Precision is done mathematically not using a string, so unnessessary 0's will be removed from the end.
// If you want to fix this, you can do: lat().toPrecision(9) and it will return a string representation including trailing 0's.

// todo give a starting point and give a maximum distance from and to

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
export function LatLong(): LatLong {
    return {
        lat: lat(),
        long: long()
    }
}

/**
 * Generate a latitude
 *
 * @export
 * @returns {number}
 */
export function lat(): number {
    return rngFloat({ min: -180, max: 180, precision: 9 });
}

/**
 * Generated a longitude
 *
 * @export
 * @returns {number}
 */
export function long(): number {
    return rngFloat({ min: -180, max: 180, precision: 9 });
}
