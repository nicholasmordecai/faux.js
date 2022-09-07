import { Type } from 'ts-morph';
import { Type as tsType } from 'typescript';

export function getNativeType(type: Type<tsType>) {
	if(type.isString()) {
		console.log('is string');
		return '""';
	}

	if(type.isNumber()) {
		console.log('is number');
		return 1;
	}

	if(type.isBoolean()) {
		console.log('is boolean');
		return true;
	}

	if(type.isNull()) {
		console.log('is null');
		return null;
	}

	if(type.isUnknown()) {
		return;
	}

	console.log('no if triggered, return null');
	return null;
}
