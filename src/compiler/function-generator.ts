import { PropertySignature } from 'ts-morph';

export function functionGenerator(params: PropertySignature[]): string {
	let stmntStr = 'return {';
	for (const param of params) {
		const value = valueGenerator(param);
		stmntStr += `${param.getName()}: "${value}",`;
	}
	stmntStr = stmntStr.slice(0, stmntStr.length - 1);
	stmntStr += '};';

	return stmntStr;
}

function valueGenerator(prop: PropertySignature): string {
	const textType = prop.getType().getText();
	switch (textType) {
	case 'string':
		return 'hi';
	case 'number':
		return '123';
	case 'boolean':
		return 'true';
	default:
		return 'hello world';
	}
}
