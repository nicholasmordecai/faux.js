import { CodeBlockWriter } from 'ts-morph';
import { RawType } from '../../utils/newLooper';

export enum tsTypes {
	string,
	number,
	boolean,
	array,
	tuple,
	enum,
	unknown,
	any,
	void,
	null,
	undefined,
	never,
	object,
	union,
	bigint,
	symbol
}

export function generateFakeMethod(schema: RawType[]) {
	const writer = new CodeBlockWriter({ useTabs: true });
	writer.writeLine('return {');
	for (const property of schema) {
		writer.writeLine(`${property.key}: Mocker.${generateFakeFromType(property)}(),`);
	}
	writer.writeLine('}');
	return new Function(writer.toString());
}

export function generateFakeFromType(rawType: RawType) {
	switch (rawType.type) {
		case tsTypes.string:
			return 'string';
		case tsTypes.number:
			return 'number';
		case tsTypes.boolean:
			return 'boolean';
		case tsTypes.bigint:
			return 'bigint';
	}
}
