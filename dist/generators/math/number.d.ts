export interface MathOptions {
    min?: number;
    max?: number;
    precision?: number;
}
export declare function float(options?: MathOptions): number;
export declare function int(options?: MathOptions): number;
export declare function percent(options?: MathOptions): number;
export declare function percentString(options?: MathOptions): string;
export declare function bool(): boolean;
/**
 * Will return a random integer from a set of min and max values.
 * This is a basic implementation and should be improved at a later date.
 * It picks a random number between 0 and the number of sets passed and then
 * picks between the min and max of that set.
 * @returns { number }
 */
export declare function sets(sets: Pick<MathOptions, 'min' | 'max'>[]): number;
export declare const Number: {
    float: typeof float;
    int: typeof int;
    bool: typeof bool;
    percent: typeof percent;
    percentString: typeof percentString;
};
/**
 * @returns { number }
 */
export declare function mulberry32(): number;
