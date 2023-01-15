import * as md5Lib from 'md5';

import { fromFormat } from '../util/string';

/**
 * @category Generators
 * @subcategory Internet
 */

/**
 * @description Generates an MD5 Hash
 * @returns { string }
 */
export function md5(input?: string): string {
	let rngString;

	if(!input) {
		rngString = fromFormat('AAAAAAAAAA');
	} else {
		rngString = input;
	}

	return md5Lib.default(rngString);
}

/**
 * @description Generates a salt
 * @param len length of the salt - defaults to 10
 * @returns { string }
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
