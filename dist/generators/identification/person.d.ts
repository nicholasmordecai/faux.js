/**
 * @category Generators
 * @subcategory Identification
 */
export interface FullName {
    firstName: string;
    lastName: string;
    middleNames: string[];
    nickName: string;
    gender: Gender;
}
export interface PersonOptions {
    gender: Gender;
}
export type Gender = 'Male' | 'Female';
export declare function nickname(): string;
export declare function fullName(options?: PersonOptions): FullName;
export declare function firstName(options?: PersonOptions): string;
export declare function lastName(): string;
export declare function middleNames(): string[];
export declare function gender(): Gender;
declare const _default: {
    firstName: typeof firstName;
    lastName: typeof lastName;
    middleNames: typeof middleNames;
    nickname: typeof nickname;
    fullName: typeof fullName;
    gender: typeof gender;
};
export default _default;
