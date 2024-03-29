import { int } from '../math/number';

const capitalCharCodes = { min: 65, max: 90 };
const lowerCaseCharCodes = { min: 97, max: 122 };

const alphaNumerics = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const alphaNumericLength = alphaNumerics.length -1;

const alphaNumericsLower = 'abcdefghijklmnopqrstuvwxyz0123456789';
const alphaNumericLowerLength = alphaNumericsLower.length -1;

export function fromFormat(format: string) {
	let result = '';

	for (const char of format) {
		// numberic (0-9)
		if (char === '9') {
			result += int({ min: 0, max: 9 });
			// upper case alpha (A-Z)
		} else if (char === 'A') {
			result += String.fromCharCode(int(capitalCharCodes));
		}
		// lower case alpha (a-z)
		else if (char === 'a') {
			result += String.fromCharCode(int(lowerCaseCharCodes));
		} else {
			result += char;
		}
	}

	return result;
}

export function alphaNumeric(length: number): string {
	let result = '';
	for (let i = length; i > 0; i--) {
		result += alphaNumerics[int({ min: 0, max: alphaNumericLength })];
	}
	return result;
}

export function alphaNumericLower(length: number): string {
	let result = '';
	for (let i = length; i > 0; i--) {
		result += alphaNumericsLower[int({ min: 0, max: alphaNumericLowerLength })];
	}
	return result;
}

export const string = {
	alphaNumeric,
	alphaNumericLower,
	fromFormat
};
