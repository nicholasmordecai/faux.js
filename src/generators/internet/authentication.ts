// import { sign, SignOptions } from 'jsonwebtoken';
import { int } from '../math/number';
import { alphaNumeric } from '../util/string';

/**
 * @description Generates a fake JSON Web Token
 * It literally creates random strings with a period in between. There are not real JWT's and can not be decoded etc
 * If you need to include real JWT's for your seed / test data then it would be ideal to use the same logic as in your application
 * 
 * @example
 * const JWToken = JWT(); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 * 
 */
export function JWT(): string {
	const header = alphaNumeric(int({min: 36, max: 52}));
	const payload = alphaNumeric(int({min: 64, max: 300}));
	const verify = alphaNumeric(int({min: 44, max: 76}));

	return `${header}.${payload}.${verify}`;
}

/**
 * @description generates a random alpha numeric token
 * 
 * @example
 * const t = token(); // hA76dcB12l
 */
export function token(len = 10): string {
	return alphaNumeric(len);
}

export const Authentication = {
	JWT,
	token
};
