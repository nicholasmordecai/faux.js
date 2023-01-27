import md5Lib from 'md5';

import { fromFormat } from '../util/string';

/**
 * @module
 * @category Generators
 * @subcategory Internet
 * @description Some awesome description for this generator...
 */

/**
 * @function md5
 * @description Hash any string input with MD5
 * 
 * @param {string} [input] input string to hash
 * @returns {string} the hashed string
 * 
 * @example typescript const hash = md5('my-string');
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

/**
 * @function salt
 * @description Generates a random salt
 * 
 * @param {number} [len=10] input string to hash
 * @returns {string} the hashed string
 * 
 * @example const randomSalt = salt();
 * 
 * const randomSalt2 = salt(12);
 */
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
