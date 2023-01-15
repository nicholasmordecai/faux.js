"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sets = exports.bool = exports.percentString = exports.percent = exports.normalDist = exports.int = exports.float = void 0;
var configuration_1 = require("../../configuration");
function float(options) {
    var float;
    if (options && options.min && options.max) {
        float = mulberry32() * (options.max - options.min) + options.min;
    }
    else {
        float = mulberry32();
    }
    configuration_1.Config.seed += 1;
    if (options && options.precision) {
        return toFixedNumber(float, options.precision);
    }
    else {
        return float;
    }
}
exports.float = float;
function int(options) {
    if (!options) {
        return Math.floor(mulberry32() * 100);
    }
    configuration_1.Config.seed += 1;
    // check if null to prevent nullish checks in case they pass a 0, -1 or 1
    if (options.min != null && options.max != null) {
        return Math.floor(mulberry32() * (options.max - options.min + 1) + options.min);
    }
    return Math.floor(mulberry32() * 100);
}
exports.int = int;
function normalDist(min, max, skew) {
    var u = 0, v = 0;
    while (u === 0)
        u = mulberry32(); //Converting [0,1) to (0,1)
    while (v === 0)
        v = mulberry32();
    var num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
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
exports.normalDist = normalDist;
// export function rngProbDist() {
// }
// export function logDist() {
// }
function percent(options) {
    return float(options);
}
exports.percent = percent;
function percentString(options) {
    return "".concat(int(options), "%");
}
exports.percentString = percentString;
function bool() {
    return float() > 0.5;
}
exports.bool = bool;
/**
 * Will return a random integer from a set of min and max values.
 * This is a basic implementation and should be improved at a later date.
 * It picks a random number between 0 and the number of sets passed and then
 * picks between the min and max of that set.
 * @returns { number }
 */
function sets(sets) {
    var set = int({ min: 0, max: sets.length - 1 });
    return int(sets[set]);
}
exports.sets = sets;
exports.default = {
    float: float,
    int: int,
    normalDist: normalDist,
    bool: bool,
    percent: percent,
    percentString: percentString
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
function toFixedNumber(value, digits, base) {
    if (base === void 0) { base = 10; }
    var pow = Math.pow(base, digits);
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
function mulberry32() {
    var t = configuration_1.Config.seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    var result = ((t ^ t >>> 14) >>> 0) / 4294967296;
    return result;
}