import { Config } from '../../configuration';

export interface MathOptions {
	min?: number;
	max?: number;
	precision?: number;
}

export function float(options?: MathOptions): number {
	let float: number;

	if (options && options.min && options.max) {
		float = mulberry32() * (options.max - options.min) + options.min;
	} else {
		float = mulberry32();
	}

	Config.seed += 1;
	if (options && options.precision) {
		return toFixedNumber(float, options.precision);
	} else {
		return float;
	}
}

export function int(options?: MathOptions): number {
	if (!options) {
		return Math.floor(mulberry32() * 100);
	}

	Config.seed += 1;

	// check if null to prevent nullish checks in case they pass a 0, -1 or 1
	if (options.min != null && options.max != null) {
		return Math.floor(mulberry32() * (options.max - options.min + 1) + options.min);
	}

	return Math.floor(mulberry32() * 100);
}


// export function rngProbDist() {

// }

// export function logDist() {

// }

export function percent(options?: MathOptions): number {
	return float(options);
}

export function percentString(options?: MathOptions): string {
	return `${int(options)}%`;
}

export function bool(): boolean {
	return float() > 0.5;
}

/**
 * Will return a random integer from a set of min and max values.
 * This is a basic implementation and should be improved at a later date.
 * It picks a random number between 0 and the number of sets passed and then 
 * picks between the min and max of that set.
 * @returns { number }
 */
export function sets(sets: Pick<MathOptions, 'min' | 'max'>[]): number {
	const set = int({ min: 0, max: sets.length -1 });
	return int(sets[set]);
}

export const Number = {
	float,
	int,
	bool,
	percent,
	percentString
};


/**
 * Internal Number Utils
 */

/**
 * 
 * @param value 
 * @param digits 
 * @param base 
 * @returns { number }
 */
function toFixedNumber(value: number, digits: number, base = 10): number {
	const pow = Math.pow(base, digits);
	return Math.round(value * pow) / pow;
}

// function randn_bm() {
// 	const u = 1 - mulberry32();
// 	const v = mulberry32();
// 	return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
// }

/**
 * @returns { number }
 */
export function mulberry32(): number {
	let t = Config.seed += 0x6D2B79F5;
	t = Math.imul(t ^ t >>> 15, t | 1);
	t ^= t + Math.imul(t ^ t >>> 7, t | 61);
	const result = ((t ^ t >>> 14) >>> 0) / 4294967296;
	return result;
}
