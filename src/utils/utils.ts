import { PropertySignature, SyntaxKind } from 'ts-morph';

export function traverseProperty(property: PropertySignature) {
	return getNativeType(property);
}

export function getNativeType(property: PropertySignature) {
	const type = property.getType();
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

	// should probably re-write this using the writer.object class instead of constructing strings.
	if(type.isObject()) {
		const typeLiteral = property.getLastChildByKind(SyntaxKind.TypeLiteral);
		if(!typeLiteral) return;
		const properties = typeLiteral.getProperties();
		let t = '{';
		for(const tProperty of properties) {
			t += `${tProperty.getName()}: ${traverseProperty(tProperty)},`;
		}
		t += '}';
		return t;
	}

	// if(type.isInterface()) {
	// 	const typeLiteral = property.getLastChildByKind(SyntaxKind.TypeLiteral);
	// 	if(!typeLiteral) return;
	// 	const properties = typeLiteral.getProperties();
	// 	let t = '{';
	// 	for(const tProperty of properties) {
			
	// 	}
	// 	t += '}';
	// 	return t;
	// }
}
