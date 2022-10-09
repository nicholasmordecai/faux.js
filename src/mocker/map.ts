import { faker } from '@faker-js/faker';

export function number(): number {
	return faker.datatype.number();
}
  
export function string(): string {
	return faker.lorem.sentence();
}
  
export function boolean(): boolean {
	return faker.datatype.boolean();
}
  
export function name(): string {
	return faker.name.fullName();
}
  
export function age(): number {
	return faker.datatype.number({ min: 1, max: 120 });
}

export function bigint(): bigint {
	return faker.datatype.bigInt()
}
  
export function randn_bm(seed: number) {
	const u = 1 - mulberry32(seed)();
	const v = mulberry32(seed)();
	return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}
  
export function mulberry32(a: number) {
	return function() {
		let t = a += 0x6D2B79F5;
		t = Math.imul(t ^ t >>> 15, t | 1);
		t ^= t + Math.imul(t ^ t >>> 7, t | 61);
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
