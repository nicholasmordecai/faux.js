import { int } from '../math/number';

// Note: Precision is done mathematically not using a string, so unnessessary 0's will be removed from the end.
// If you want to fix this, you can do: lat().toPrecision(9) and it will return a string representation including trailing 0's.

// todo give a starting point and give a maximum distance from and to


interface LatLong {
    lat: number;
    long: number;
}

/**
 * Generates a latitude and longitude object
 *
 * @returns {LatLong}
 */
export function latLong(): LatLong {
	return {
		lat: lat(),
		long: long()
	};
}

/**
 * Generate a latitude
 *
 * @returns {number}
 */
export function lat(): number {
	return int({ min: -180, max: 180, precision: 9 });
}

/**
 * Generated a longitude
 *
 * @returns {number}
 */
export function long(): number {
	return int({ min: -180, max: 180, precision: 9 });
}

export const Map = { 
	lat,
	long,
	latLong
};
