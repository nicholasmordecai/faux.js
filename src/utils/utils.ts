import { Node, PropertySignature, SyntaxKind } from 'ts-morph';

export function traverseProperty(property: PropertySignature) {
	return traverseNodes(property);
}

function traverseNodes(node: Node): any {
	const type = node.getType();
	if (type.isString()) {
		return '""';
	}

	if (type.isNumber()) {
		return 1;
	}

	if (type.isBoolean()) {
		return true;
	}

	if (type.isNull()) {
		return null;
	}

	if (type.isUnknown()) {
		return;
	}

	if (type.isArray()) {
		const arrayType = type.getArrayElementType();
		if(!arrayType) return '[]';
		let s = '[';
		// const n = arrayType.get
			// s += traverseNodes(arrayType);
		s += ']';
		return s;
	}

	if (type.isObject()) {
	/**
	 * Interfaces are appearing as objects here
	 * Need to get 
	 */
		console.log('its an object?');
		const nodeChild = node.getFirstChildByKind(SyntaxKind.TypeLiteral);
		if(!nodeChild) {
			const symbol = type.getSymbol();
			
			if(!symbol) return '{}';
			const identifier = symbol.getName();
			
			const referenceInterface = node.getSourceFile().getInterface(identifier);
			if(!referenceInterface) return '{}';

			let s = '{';
			referenceInterface.getProperties().forEach((property) => {
				s += `${property.getName()}: ${traverseNodes(property)},`;
			});
			s += '}';
			return s;
		}

		let s = '{';
		nodeChild.getProperties().forEach((property) => {
			s += `${property.getName()}: ${traverseNodes(property)},`;
		});
		s += '}';
		return s;
	}

	if(type.isTuple()) {
		const elements = type.getTupleElements();
		if(!elements || elements.length === 0) {
			return  '[]';
		}
		
		let s = '[';
		elements.forEach((element) => {
			// element.
		})
		s += ']'
		return s;
	}
}

// export function getNativeFromType(type: Type<ts.Type>): any {
// 	if(type.isString()) {
// 		return '""';
// 	}

// 	if(type.isNumber()) {
// 		return 1;
// 	}

// 	if(type.isBoolean()) {
// 		return true;
// 	}

// 	if(type.isNull()) {
// 		return null;
// 	}

// 	if(type.isUnknown()) {
// 		return;
// 	}

// 	if(type.isArray()) {
// 		const arrayType = type.getArrayElementType();
// 		if(!arrayType) return '[]';

// 		return `[${getNativeFromType(arrayType)}]`;
// 	}

// 	if(type.isObject()) {

// 		// type.getProperties().forEach((symbol) => {

// 		// })
// 	}
// }

// function getNativeFromSymbol(symbol: Symbol): any {
// 	const type = symbol.getDeclaredType();
// 	if(type.isString()) {
// 		return '""';
// 	}

// 	if(type.isNumber()) {
// 		return 1;
// 	}

// 	if(type.isBoolean()) {
// 		return true;
// 	}

// 	if(type.isNull()) {
// 		return null;
// 	}

// 	if(type.isUnknown()) {
// 		return;
// 	}

// 	if(type.isArray()) {
// 		const arrayType = type.getArrayElementType();
// 		if(!arrayType) return '[]';
// 		const aTSymbol = arrayType.getSymbol();
// 		if(!aTSymbol) return '[]';
// 		return `[${getNativeFromSymbol(aTSymbol)}]`;
// 	}

// 	if(type.isTuple()) {
// 		let s = '[';
// 		type.getTupleElements().forEach((tupleType) => {
// 			const tupleSymbol = tupleType.getSymbol();
// 			if(!tupleSymbol) return '[]';
// 			s += `${getNativeFromSymbol(tupleSymbol)},`;
// 		});
// 		s += ']'
// 		return s;
// 	}

// 	if(type.isObject()) {
// 		console.log(type.getProperties());
// 		let s = '{';
// 		type.getProperties().forEach((symbol) => {
// 			s += `${getNativeFromSymbol(symbol)},`;
// 		});
// 		s += '}';
// 		return s;
// 	}
// }

// export function getNativeType(property: PropertySignature) {
// 	const type = property.getType();
// 	if(type.isString()) {
// 		return '""';
// 	}

// 	if(type.isNumber()) {
// 		return 1;
// 	}

// 	if(type.isBoolean()) {
// 		return true;
// 	}

// 	if(type.isNull()) {
// 		return null;
// 	}

// 	if(type.isUnknown()) {
// 		return;
// 	}

// 	if(type.isArray()) {
// 		// console.log('is array...');
// 		const arrayType = type.getArrayElementType();
// 		if(!arrayType) return '[]';

// 		return `[${getNativeFromType(arrayType)}]`;
// 	}

// 	if(type.isTuple()) {
// 		// console.log('is tuple');
// 		let s = '[';
// 		type.getTupleElements().forEach((tupleType) => {
// 			s += `${getNativeFromType(tupleType)},`;
// 		});
// 		s += ']'
// 		return s;
// 	}

// 	// should probably re-write this using the writer.object class instead of constructing strings.
// 	if(type.isObject()) {
// 		const typeLiteral = property.getFirstChildByKind(SyntaxKind.TypeLiteral);
// 		if(!typeLiteral) return;
// 		const properties = typeLiteral.getProperties();
// 		let t = '{';
// 		for(const tProperty of properties) {
// 			t += `${tProperty.getName()}: ${traverseProperty(tProperty)},`;
// 		}
// 		t += '}';
// 		return t;
// 	}

// 	// if(type.isInterface()) {
// 	// 	const typeLiteral = property.getLastChildByKind(SyntaxKind.TypeLiteral);
// 	// 	if(!typeLiteral) return;
// 	// 	const properties = typeLiteral.getProperties();
// 	// 	let t = '{';
// 	// 	for(const tProperty of properties) {

// 	// 	}
// 	// 	t += '}';
// 	// 	return t;
// 	// }
// }
