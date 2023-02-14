import { mulberry32 } from './number';

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
