// import { sign, SignOptions } from 'jsonwebtoken';
import { alphaNumeric } from '../util/string';

/**
 * @description Generates a new json web token (JWT)
 * 
 * @example
 * const token = sign({some: payload});
 * 
 */
// export function JWT(payload: string | object | Buffer = '', privateKey = '', options: SignOptions = {}): string {
// 	if (!privateKey) privateKey = fromFormat('aAaAaAaAaAaAaAaA');
// 	return sign(payload, privateKey, options);
// }

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
	// JWT,
	token
};
