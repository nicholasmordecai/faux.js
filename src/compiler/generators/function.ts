import { CodeBlockWriter } from 'ts-morph';

export function createFakeFunction(interfaceName: string) {
	const writer = new CodeBlockWriter({ useTabs: true });
	writer.writeLine(`return ${interfaceName}.fakeSchema;`);
	return writer.toString();
}
