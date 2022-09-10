import { ArrayTypeNode, Node, PropertySignature, SyntaxKind, TypeLiteralNode } from 'ts-morph';

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
		return handleArrayType(node);
	}

	if (type.isObject()) {
		if(node.isKind(SyntaxKind.TypeLiteral)) {
			return loopLiteralType(node);
		}
		
		const nodeChild = node.getFirstChildByKind(SyntaxKind.TypeLiteral);
		if(!nodeChild) {
			const symbol = type.getSymbol();

			if(!symbol) return '{}';
			const identifier = symbol.getName();
			console.log('got into here')
			const referenceInterface = node.getSourceFile().getInterface(identifier);
			if(!referenceInterface) return '{}';

			let s = '{';
			referenceInterface.getProperties().forEach((property) => {
				s += `${property.getName()}: ${traverseNodes(property)},`;
			});
			s += '}';
			return s;
		}

		return loopLiteralType(nodeChild);
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

function handleArrayType(node: Node) {
	// handles cases like string[]
	const arrayTypeNode = node.getFirstChildByKind(SyntaxKind.ArrayType);
	if(arrayTypeNode) {
		return loopArrayType(arrayTypeNode);
	}

	// handles cases like Array<string>
	const typeReference = node.getFirstChildByKind(SyntaxKind.TypeReference);
	if(typeReference) {
		let s = '[';
		const typeArguments = typeReference.getTypeArguments();
		typeArguments.forEach((arg) => {			
			s += traverseNodes(arg);
		});
		s += ']';
		return s;
	}
}

function loopArrayType(arrayTypeNode: ArrayTypeNode) {
	let s = '[';
	arrayTypeNode.forEachChild((childNode) => {
		s += traverseNodes(childNode);
	})
	s += ']';
	return s;
}

function loopLiteralType(literalNode: TypeLiteralNode) {
	let s = '{';
	literalNode.getProperties().forEach((property) => {
		s += `${property.getName()}: ${traverseNodes(property)},`;
	});
	s += '}';
	return s;
}
