import { getLocale } from '../../configuration';
import { rngFromArray } from '../util/array';
import { rngBool, rngInt } from './../math/number';

export interface IPerson {
	firstName: string;
	lastName: string;
	middleNames?: string;
	nickName: string;
	gender: Gender
}

export type Gender = 'Male' | 'Female';

export function nickname(): string {
	return rngFromArray(getLocale.names.nicknames);
}

export function fullName(): string {
	const male = rngBool();
	if (male) {
		return rngFromArray(getLocale.names.male);
	} else {
		return rngFromArray(getLocale.names.female);
	}
}

export function firstName(): string {
	const male = rngBool();
	if (male) {
		return rngFromArray(getLocale.names.male);
	} else {
		return rngFromArray(getLocale.names.female);
	}
}

export function lastName(): string {
	return rngFromArray(getLocale.names.lastNames);
}

// todo there is a roughly 0.0004% chance of generating two middle names that are identicle.
// Should look at removing duplicates - but don't want to bog the code down on something superfluous
export function middleNames(): string[] {
	const count = rngInt({ min: 0, max: 2 });
	const middleNames = [];
	
	for(let i = count; i >= 0; i--) {
		middleNames.push(rngFromArray(getLocale.names.middleNames));
	}

	return middleNames;
}

export function gender(): Gender {
	const male = rngBool();
	if (male) {
		return 'Male';
	} else {
		return 'Female';
	}
}

// export function suffix() {

// }

// export function title() {

// }
