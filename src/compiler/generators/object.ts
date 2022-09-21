import { CodeBlockWriter, PropertySignature } from 'ts-morph';
import { traverseProperty }  from '../../utils/utils';

export function createSchemaObject(properties: PropertySignature[]): string {
	const writer = new CodeBlockWriter({ useTabs: true });
	const codeBlock =  writer.write('').block(() => {
		properties.map((property) => {
			const type = traverseProperty(property);
			return writer.writeLine(`${property.getName()}: ${type},`);
		});
	}).toString();

	return codeBlock;
}

export function createFakeObject(properties: PropertySignature[]) {
	const writer = new CodeBlockWriter({ useTabs: true });
	const codeBlock =  writer.write('').block(() => {
		properties.map((property) => {
			const name = property.getName();
			const fakeFunction = getType(property);
			return writer.writeLine(`${name}: ${fakeFunction},`);
		});
	});
	
	return codeBlock.toString();
}

function getType(node: PropertySignature) {
	const type = node.getType();

	if(type.isString()) return 'faker.name.fullName';
	if(type.isBoolean()) return 'faker.datatype.boolean';

	// TO Implement
	if(type.isEnum()) return 0;

	if(type.isLiteral()) {
		return {};
	}
}
