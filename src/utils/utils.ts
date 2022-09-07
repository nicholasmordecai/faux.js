import { Type } from 'ts-morph';
import { Type as tsType } from 'typescript';

export function getNativeType(type: Type<tsType>) {
	if(type.isString()) {
		return '""';
	}

	if(type.isNumber()) {
		return 1;
	}

	if(type.isBoolean()) {
		return true;
	}

	if(type.isNull()) {
		return null;
	}

	if(type.isUnknown()) {
		return;
	}

	if(type.isArray()) {
		return '[1, 2, 3, 4, 5]';
	}

	// return null;
}
