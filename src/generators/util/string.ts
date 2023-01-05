import { int } from '../math/number';

export function fromFormat(format: string) {
	let result = '';

	for (const char of format) {
		// numberic (0-9)
		if (char === '9') {
			result += int({ min: 0, max: 9 });
			// upper case alpha (A-Z)
		} else if (char === 'A') {
			result += String.fromCharCode(int({ min: 65, max: 90 }));
		}
		// lower case alpha (a-z)
		else if (char === 'a') {
			result += String.fromCharCode(int({ min: 97, max: 122 }));
		} else {
			result += char;
		}
	}

	return result;
}

export default {
	fromFormat
}