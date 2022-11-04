import { CodeBlockWriter } from 'ts-morph';
import { RawType } from '../../shared/types';
import { tsTypes } from '../../shared/enums';

export function generateFakeMethod(schema: RawType[]) {
	const writer = new CodeBlockWriter({ useTabs: true });
	writer.writeLine('return {');
	for (const property of schema) {
		writer.writeLine(`${property.key}: Faker.${generateFakeFromType(property)}(),`);
	}
	writer.writeLine('}');
	return new Function(writer.toString());
}

export function generateFakeFromType(rawType: RawType) {
	switch (rawType.type) {
	case tsTypes.string:
		return 'datatype.string';
	case tsTypes.number:
		return 'datatype.number';
	case tsTypes.boolean:
		return 'datatype.boolean';
	case tsTypes.bigint:
		return 'datatype.bigint';
	}
}
