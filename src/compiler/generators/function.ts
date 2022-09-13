import { CodeBlockWriter, PropertySignature } from 'ts-morph';
// import { nameMap } from '../../mocker/nameMap';
import { traverseProperty } from '../../utils/utils';

export function createFakeFunction(properties: PropertySignature[]) {
	const writer = new CodeBlockWriter({ useTabs: true });
	const codeBlock =  writer.write('').block(() => {
		properties.map((property) => {
			const schema = traverseProperty(property);
			// const name = property.getName();
			console.log(typeof schema);

			// return writer.writeLine(`${name}: ${type},`);
		});
	}).toString();
	return '';
}
