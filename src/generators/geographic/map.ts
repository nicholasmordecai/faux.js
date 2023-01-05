import { rngFloat } from "../math/number";

interface LatLong {
    lat: number;
    long: number;
}

// give a starting point and give a maximum distance from and to
export function LatLong(): LatLong {
    return {
        lat: lat(),
        long: long()
    }
}

// add start position and distace
export function lat(): number {
    return rngFloat({ min: -180, max: 180, precision: 9});
}

// add start position and distace
export function long(): number {
    return rngFloat({ min: -180, max: 180, precision: 9 });
}

