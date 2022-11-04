import { CodeBlockWriter, PropertySignature } from 'ts-morph';
import { tsTypes } from '../../shared/enums';
import { traverseProperty }  from '../../utils/utils';

export function createSchemaObject(properties: PropertySignature[]): {string: string, obj: Record<string, unknown>} {
	const writer = new CodeBlockWriter({ useTabs: true });
	const obj: {[key: string]: unknown} = {};
	const codeBlock =  writer.write('').block(() => {
		properties.map((property) => {
			const type = traverseProperty(property);
			if(!type || !type.key) return null;
			obj[type.key] = `tsTypes.${tsTypes[type.type]}`;
			return writer.writeLine(`${property.getName()}: tsTypes.${tsTypes[type.type]},`);
		});
	}).toString();
	return { string: codeBlock, obj: obj };
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

	if(type.isString()) return 'faker.name.fullName()';
	if(type.isBoolean()) return 'faker.datatype.boolean()';

	// TO Implement
	// if(type.isEnum()) return 0;

	// if(type.isLiteral()) {
	// 	return {};
	// }
}
