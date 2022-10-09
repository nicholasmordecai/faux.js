import { CodeBlockWriter } from 'ts-morph';
import { RawType } from '../../utils/newLooper';
import * as Utils from '../../mocker/map';

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
		writer.writeLine(`${property.key}: ${generateFakeFromType(property)}(),`);
	}
	writer.writeLine('}');
	return new Function(writer.toString());
}

export function generateFakeFromType(rawType: RawType) {
	switch (rawType.type) {
		case tsTypes.string:
			return Utils.string;
		case tsTypes.number:
			return Utils.number;
		case tsTypes.boolean:
			return Utils.boolean;
		case tsTypes.bigint:
			return Utils.bigint;
	}
}
