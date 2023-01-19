import { getLocale } from '../../configuration';
import { rngFromArray } from '../util/array';
import { bool, int } from '../math/number';

export interface FullName {
	firstName: string;
	lastName: string;
	middleNames: string[];
	nickName: string;
	gender: Gender
}

export interface PersonOptions {
	gender: Gender;
}

export type Gender = 'Male' | 'Female';

export function nickname(): string {
	return rngFromArray(getLocale.names.nicknames);
}

export function fullName(options?: PersonOptions): FullName {
	let gen: Gender;
	if(options && options.gender) {
		gen = options.gender;
	} else {
		gen = gender();
	}

	return {
		firstName: firstName({ gender: gen }),
		lastName: lastName(),
		middleNames: middleNames(),
		gender: gen,
		nickName: nickname()
	};
}

export function firstName(options?: PersonOptions): string {
	if (options && options.gender) {
		if (options.gender === 'Male') {
			return rngFromArray(getLocale.names.male);
		} else {
			return rngFromArray(getLocale.names.female);
		}
	} else {
		const male = bool();
		if(male) {
			return rngFromArray(getLocale.names.male);
		} else {
			return rngFromArray(getLocale.names.female);
		}
	}
}

export function lastName(): string {
	return rngFromArray(getLocale.names.lastNames);
}

// todo there is a roughly 0.0004% chance of generating two middle names that are identicle.
// Should look at removing duplicates - but don't want to bog the code down on something superfluous
export function middleNames(): string[] {
	const count = int({ min: 0, max: 2 });
	const middleNames = [];

	for (let i = count; i > 0; i--) {
		middleNames.push(rngFromArray(getLocale.names.middleNames));
	}

	return middleNames;
}

export function gender(): Gender {
	const male = bool();
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


export default {
	firstName,
	lastName,
	middleNames,
	nickname,
	fullName,
	gender
};
