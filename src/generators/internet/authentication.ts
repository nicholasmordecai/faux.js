import { sign, SignOptions } from 'jsonwebtoken';
import { alphaN, fromFormat } from '../util/string';

/**
 * @description Generates a new Json Web Token
 * 
 * @example
 * const token = sign({some: payload});
 * 
 * @param { string | object | buffer } payload 
 * @param { string } privateKey 
 * @param { SignOptions } options
 * @returns { string }
 */
export function JWT(payload: string | object | Buffer = '', privateKey = '', options: SignOptions = {}): string {
	if (!privateKey) privateKey = fromFormat('aAaAaAaAaAaAaAaA');
	return sign(payload, privateKey, options);
}

export function token(len = 10): string {
	return alphaN(len);
}

export const authentication = {
	JWT
};
