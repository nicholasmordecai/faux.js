/**
 * @description Generates a new json web token (JWT)
 *
 * @example
 * const token = sign({some: payload});
 *
 */
/**
 * @description generates a random alpha numeric token
 *
 * @example
 * const t = token(); // hA76dcB12l
 */
export declare function token(len?: number): string;
export declare const Authentication: {
    token: typeof token;
};
