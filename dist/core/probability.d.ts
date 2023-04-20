/**
 * @module
 * @category Generators
 * @subcategory Math
 * @description Some awesome description for this generator...
 */
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
export declare function normal(min: number, max: number, skew: number): number;
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
export declare function binomial(k: number, n: number, p: number): number;
/**
 * @function exponential
 * @description Decay rate for an exponential distribution
 *
 * @param {number} lambda rate
 * @returns {number} the generated number
 *
 */
export declare function exponential(lambda: number): number;
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
export declare function pareto(minimum: number, alpha: number): number;
export declare const Probability: {
    normal: typeof normal;
    binomial: typeof binomial;
    pareto: typeof pareto;
};
