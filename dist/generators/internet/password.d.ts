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
export declare function md5(input?: string): string;
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
export declare function salt(len?: number): string;
export declare const Password: {
    md5: typeof md5;
    salt: typeof salt;
};
