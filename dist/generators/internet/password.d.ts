/**
 * @category Generators
 * @subcategory Internet
 */
/**
 * @description Generates an MD5 Hash
 * @returns { string }
 */
export declare function md5(input?: string): string;
/**
 * @description Generates a salt
 * @param len length of the salt - defaults to 10
 * @returns { string }
 */
export declare function salt(len?: number): string;
export declare const password: {
    md5: typeof md5;
    salt: typeof salt;
};
