export function Contingency<T, P>(parameters: P, generator: () => T): T {
	const result = generator.apply(parameters);
	return result;
}
