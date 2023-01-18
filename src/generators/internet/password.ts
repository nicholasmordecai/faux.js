import md5Lib from 'md5';

import { fromFormat } from '../util/string';

/**
 * @module
 * @category Generators
 * @subcategory Internet
 * @description Some awesome description for this generator...
 */

/**
 * Hash any string input with MD5
 * 
 * @param {string} [input] input string to hash
 * @returns {string} the hashed string
 * 
 * @example const hash = md5('my-string');
 * 
 * @function md5
 * @export
 */
export function md5(input?: string): string {
	let rngString;

	if(!input) {
		rngString = fromFormat('AAAAAAAAAA');
	} else {
		rngString = input;
	}

	return md5Lib(rngString);
}

export function salt(len = 10): string {
	return fromFormat('A'.repeat(len));
}

// export const sha1BlockLength = ['1', '224', '256', '384', '512'] as const;
// export function sha(blockLength: typeof sha1BlockLength[number]) {
// 	if(blockLength === '512') {

// 	}
// }

// export const sha3BlockLength = ['224', '256', '384', '512'] as const;
// export function sha3() {

// }

// export function crc() {

// }

export const password = {
	md5,
	salt
};
