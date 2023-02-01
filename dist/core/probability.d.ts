type TGenerator<T> = (() => T) | T;
interface IProbability<T> {
    probability: number;
    generator: TGenerator<T>;
}
export interface IProbabilityOptions<T> {
    conditions: IProbability<T>[];
}
export declare function Probability<T>(options: IProbabilityOptions<T>): (options: IProbabilityOptions<T>) => T;
export declare function generate<T>(options: IProbabilityOptions<T>): T;
export declare function validateConditions<T>(conditions: IProbability<T>[]): boolean;
export declare function getConditionFromProbability<T>(conditions: IProbability<T>[]): IProbability<T>;
export declare function getValue<T>(generator: TGenerator<T>): T;
export {};
