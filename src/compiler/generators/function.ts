import { CodeBlockWriter, PropertySignature } from 'ts-morph';
import { getNativeType } from '../../utils/utils';

// export function functionGenerator(params: PropertySignature[]): string {
// 	let stmntStr = 'return {';
// 	for (const param of params) {
// 		const value = getNativeType(param.getType());
// 		stmntStr += `${param.getName()}: "${value}",`;
// 	}
// 	stmntStr = stmntStr.slice(0, stmntStr.length - 1);
// 	stmntStr += '};';

// 	return stmntStr;
// }

export function functionGenerator(properties: PropertySignature[]): string {
	const writer = new CodeBlockWriter({ useTabs: true });
	const codeBlock =  writer.write('return ').block(() => {
		properties.map((property) => {
			const type = getNativeType(property.getType());
			return writer.writeLine(` ${property.getName()}: ${type},`);
		});
	}).toString();
	return codeBlock;
}
