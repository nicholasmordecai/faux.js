/// <reference types="node" />
import { SignOptions } from 'jsonwebtoken';
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
export declare function JWT(payload?: string | object | Buffer, privateKey?: string, options?: SignOptions): string;
export declare function token(len?: number): string;
export declare const authentication: {
    JWT: typeof JWT;
};
