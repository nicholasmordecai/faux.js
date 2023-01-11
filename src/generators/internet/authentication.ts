import { sign, SignOptions } from 'jsonwebtoken';
import { fromFormat } from '../util/string';

export function JWT(payload: string | object | Buffer = '', privateKey = '', options: SignOptions = {}): string {
	if (!privateKey) privateKey = fromFormat('aAaAaAaAaAaAaAaA');
	return sign(payload, privateKey, options);
}
