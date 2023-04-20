/**
 * @description Generates a fake JSON Web Token
 * It literally creates random strings with a period in between. There are not real JWT's and can not be decoded etc
 * If you need to include real JWT's for your seed / test data then it would be ideal to use the same logic as in your application
 *
 * @example
 * const JWToken = JWT(); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *
 */
export declare function JWT(): string;
/**
 * @description generates a random alpha numeric token
 *
 * @example
 * const t = token(); // hA76dcB12l
 */
export declare function token(len?: number): string;
export declare const Authentication: {
    JWT: typeof JWT;
    token: typeof token;
};
