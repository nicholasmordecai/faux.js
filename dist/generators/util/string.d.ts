export declare function fromFormat(format: string): string;
export declare function alphaNumeric(length: number): string;
export declare const string: {
    alphaNumeric: typeof alphaNumeric;
    fromFormat: typeof fromFormat;
};
