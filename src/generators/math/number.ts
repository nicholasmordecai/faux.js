import { Config } from '../../configuration';

export interface MathOptions {
	min: number;
	max: number;
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
	return Math.floor(mulberry32() * (options.max - options.min + 1) + options.min);
}

export function normalDist(min: number, max: number, skew: number) {
	let u = 0, v = 0;
	while (u === 0) u = mulberry32(); //Converting [0,1) to (0,1)
	while (v === 0) v = mulberry32();
	let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

	num = num / 10.0 + 0.5; // Translate to 0 -> 1

	if (num > 1 || num < 0) {
		num = normalDist(min, max, skew); // resample between 0 and 1 if out of range
	}

	else {
		num = Math.pow(num, skew);
		num *= max - min;
		num += min;
	}

	return num;
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

export default {
	float,
	int,
	normalDist,
	bool,
	percent,
	percentString
};


/**
 * Internal Number Utils
 */

function toFixedNumber(value: number, digits: number, base = 10): number {
	const pow = Math.pow(base, digits);
	return Math.round(value * pow) / pow;
}

function randn_bm() {
	const u = 1 - mulberry32();
	const v = mulberry32();
	return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

function mulberry32() {
	let t = Config.seed += 0x6D2B79F5;
	t = Math.imul(t ^ t >>> 15, t | 1);
	t ^= t + Math.imul(t ^ t >>> 7, t | 61);
	const result = ((t ^ t >>> 14) >>> 0) / 4294967296;
	return result;
}
