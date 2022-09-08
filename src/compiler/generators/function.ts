import { PropertySignature } from 'ts-morph';
import { createSchemaObject } from './object';

export function functionGenerator(properties: PropertySignature[]): string {
	let codeBlock = 'return ';
	codeBlock += createSchemaObject(properties);
	return codeBlock;
}
