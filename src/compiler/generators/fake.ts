import { CodeBlockWriter } from 'ts-morph';
import { RawType } from '../../utils/newLooper';
import { tsTypes } from '../../utils/utils';

export function generateFakeMethod(schema: RawType[]) {
	const writer = new CodeBlockWriter({ useTabs: true });
	writer.writeLine('return {');
	for (const property of schema) {
		writer.writeLine(`${property.key}: ${generateFakeFromType(property)},`);
	}
	writer.writeLine('}');
	return new Function(writer.toString());
}

export function generateFakeFromType(rawType: RawType) {
	switch (rawType.type) {
		case tsTypes.string:
			return '"absdefg"';
		case tsTypes.number:
			return 123;
		case tsTypes.boolean:
			return true;
		case tsTypes.bigint:
			return `BigInt("900719925474099145665")`;
	}
}