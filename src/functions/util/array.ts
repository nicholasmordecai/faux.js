import { rngInt } from '../math/number';

export function rngFromArray<T>(array: Array<T>): T {
	return array[rngInt({ min: 0, max: array.length-1 })];
}
