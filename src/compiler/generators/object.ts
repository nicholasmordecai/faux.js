import { CodeBlockWriter, PropertySignature } from 'ts-morph';
import { getNativeType } from '../../utils/utils';

export function createSchemaObject(properties: PropertySignature[]): string {
	const writer = new CodeBlockWriter({ useTabs: true });
	const codeBlock =  writer.write('').block(() => {
		properties.map((property) => {
			const type = getNativeType(property.getType());
			return writer.writeLine(` ${property.getName()}: ${type},`);
		});
	}).toString();

	return codeBlock;
}
