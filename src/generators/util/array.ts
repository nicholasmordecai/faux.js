import { int } from '../math/number';

export function rngFromArray<T>(array: Array<T>): T {
	return array[int({ min: 0, max: array.length-1 })];
}

export const array =  {
	rngFromArray
};
