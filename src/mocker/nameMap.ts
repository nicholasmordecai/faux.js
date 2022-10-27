import { faker } from '@faker-js/faker';
import { rngBetween } from './utils';

export const nameMap = {
	name: faker.name.fullName,
};

const firstNames = [
	'John',
	'James',
	'Hailey',
	'Stephanie',
	'Anne-Mae'
];
const fnCount = firstNames.length;

const middleNames = [
	'Robert',
	'Fin',
	'Kai',
	'Oscar'
];
const mnCount = middleNames.length;

const lastNames = [
	'Smith',
	'Moore',
	'Jones',
]
const lnCount = lastNames.length;

export const someMap = {
	geo: null,
	idenfitication: {
		names: {
			firstName: firstNames[rngBetween(0, fnCount)],
			middleName: middleNames[rngBetween(0, mnCount)],
			lastName: lastNames[rngBetween(0, lnCount)],
			fullName: `${firstNames[rngBetween(0, fnCount)]} ${middleNames[rngBetween(0, mnCount)]} ${lastNames[rngBetween(0, lnCount)]}`
		},
	},
	math: null,
}

/**
 * Geo (addresses, locations etc)
 * Identification (names, emails, etc)
 * Math (Prime, rng etc)
 */
