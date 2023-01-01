import { rngFloat } from "../functions/math/number";

type TGenerator<T> = (() => T) | T;

interface IProbability<T> {
    probability: number;
    generator: TGenerator<T>
}

export interface IProbabilityOptions<T> {
    conditions: IProbability<T>[]
}

export function Probability<T>(options: IProbabilityOptions<T>): (options: IProbabilityOptions<T>) => T {
    return () => {
        return generate(options);
    }
}

export function generate<T>(options: IProbabilityOptions<T>): T {
    validateConditions(options.conditions);
    const condition = getConditionFromProbability(options.conditions);
    return getValue<T>(condition.generator);
}

export function validateConditions<T>(conditions: IProbability<T>[]): boolean {
    let allProbs = 0;
    for (const condition of conditions) { 
        allProbs += condition.probability;
    }
    
    if(allProbs === 100) {
        return true;
    } else {
        throw new Error('Conditions are not valid. They do not equal 100.');
    }
}

//! Sometimes this is failing...
export function getConditionFromProbability<T>(conditions: IProbability<T>[]): IProbability<T> {
    const calculatedProb = rngFloat({ min: 0, max: 100 });
    let previousProb = 0;
    for (const condition of conditions) {
        if(calculatedProb > previousProb && calculatedProb <= previousProb + condition.probability) {
            return condition;
        }
    }

    throw new Error('Could not generate a conditional value.');
}

export function getValue<T>(generator: TGenerator<T>): T {
    if (generator instanceof Function) {
        return generator();
    } else {
        return generator;
    }
}
