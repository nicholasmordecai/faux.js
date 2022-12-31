export function Contingency<T, P>(parameters: P, generator: Function): T {
    const result = generator.apply(parameters);
    return result;
}