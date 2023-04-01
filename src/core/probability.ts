import { float, mulberry32 } from '../generators/math/number';

/**
 * @module
 * @category Generators
 * @subcategory Math
 * @description Some awesome description for this generator...
 */

// export function uniform(min: number, max: number) {

// }

/**
 * @function normal
 * @description Generate a number from within a normal distribution / bell curve
 * 
 * @param {number} min minimum value
 * @param {number} max maximum value
 * @param {number} skew skew value
 * @returns {number} the generated number
 * 
 * @example typescript const value = normal(0, 10, 1);
 */
export function normal(min: number, max: number, skew: number) {
	let u = 0, v = 0;
	while (u === 0) u = mulberry32(); //Converting [0,1) to (0,1)
	while (v === 0) v = mulberry32();
	let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

	num = num / 10.0 + 0.5; // Translate to 0 -> 1

	if (num > 1 || num < 0) {
		num = normal(min, max, skew); // resample between 0 and 1 if out of range
	}

	else {
		num = Math.pow(num, skew);
		num *= max - min;
		num += min;
	}

	return num;
}

function binomialCoefficient(s: number, t: number): number {
	let coefficient = 1;
	for (let i = 0; i < t; i++) {
		coefficient *= (s - i) / (i + 1);
	}
	return coefficient;
}


/**
 * @function binomial
 * @description Calculate a number for a binomial distribution
 * 
 * @param {number} k number of trials
 * @param {number} n maximum value
 * @param {number} p probability of a success
 * @returns {number} the generated number
 * 
 * @example typescript const value = binomial(0, 10, 1);
 */
export function binomial(k: number, n: number, p: number): number {
	return binomialCoefficient(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

/**
 * @function exponential
 * @description Decay rate for an exponential distribution
 * 
 * @param {number} lambda rate
 * @returns {number} the generated number
 * 
 */
export function exponential(lambda: number): number {
	return -Math.log(1.0 - float()) / lambda;
}


/**
 * @function pareto
 * @description Pareto distribution (80/20 rule)
 * 
 * @param {number} minimum minimum value
 * @param {number} alpha alpha
 * @returns {number} the generated number
 * 
 * @example typescript const value = pareto(0, 10, 1);
 */
export function pareto(minimum: number, alpha: number): number {
	return minimum / Math.pow((1.0 - float()), 1.0 / alpha);
}

export const Probability = {
	normal,
	binomial,
	pareto
};
