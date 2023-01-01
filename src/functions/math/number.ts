import { Config } from "../../configuration";

export function randn_bm() {
    const u = 1 - mulberry32();
    const v = mulberry32();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
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


export function mulberry32() {
    let t = Config.seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    const result = ((t ^ t >>> 14) >>> 0) / 4294967296;
    return result;
}

export function rngFloat(options?: { min: number, max: number }): number {
    if (!options) {
        return mulberry32()
    }
    Config.seed += 1;
    return mulberry32() * (options.max - options.min) + options.min;
}

export function rngInt(options?: { min: number, max: number }): number {
    if (!options) {
        return mulberry32()
    }

    Config.seed += 1;
    return Math.floor(mulberry32() * (options.max - options.min + 1) + options.min)
}

export function rngProbDist() {

}

export function logDist() {

}
