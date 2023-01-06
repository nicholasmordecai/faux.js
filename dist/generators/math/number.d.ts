export interface MathOptions {
    min: number;
    max: number;
    precision?: number;
}
export declare function float(options?: MathOptions): number;
export declare function int(options?: MathOptions): number;
export declare function normalDist(min: number, max: number, skew: number): number;
export declare function percent(options?: MathOptions): number;
export declare function percentString(options?: MathOptions): string;
export declare function bool(): boolean;
declare const _default: {
    float: typeof float;
    int: typeof int;
    normalDist: typeof normalDist;
    bool: typeof bool;
    percent: typeof percent;
    percentString: typeof percentString;
};
export default _default;
