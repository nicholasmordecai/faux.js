import { CodeBlockWriter, PropertySignature } from 'ts-morph';
import { tsTypes } from '../../shared/enums';
import { fakerMap } from '../../utils/consts';
import { traverseProperty } from '../../utils/utils';

export function createSchemaObject(properties: PropertySignature[]): { string: string, obj: Record<string, unknown> } {
	const writer = new CodeBlockWriter({ useTabs: true });
	const obj: { [key: string]: unknown } = {};
	const codeBlock = writer.write('').block(() => {
		properties.map((property) => {
			const type = traverseProperty(property);
			if (!type || !type.key) return null;
			obj[type.key] = `tsTypes.${tsTypes[type.type]}`;
			return writer.writeLine(`${type.key}: tsTypes.${tsTypes[type.type]},`);
		});
	}).toString();
	return {
		string: codeBlock,
		obj: obj
	};
}

export function createFakeObject(properties: PropertySignature[]): { string: string, obj: Record<string, unknown> } {
	const writer = new CodeBlockWriter({ useTabs: true });
	const obj: { [key: string]: unknown } = {};
	const codeBlock = writer.write('').block(() => {
		properties.map((property) => {
			const type = traverseProperty(property);
			if (!type || !type.key) return null;
			const fakeFunction = fakerMap[type.type];
			obj[type.key] = fakeFunction;
			return writer.writeLine(`${type.key}: ${fakeFunction},`);
		});
	}).toString()

	return {
		string: codeBlock,
		obj: obj
	}
}
