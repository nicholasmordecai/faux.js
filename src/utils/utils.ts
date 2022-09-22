import { ArrayTypeNode, CodeBlockWriter, Node, PropertySignature, SyntaxKind, TupleTypeNode, TypeLiteralNode, TypeReferenceNode } from 'ts-morph';

export enum tsTypes {
	string,
	number,
	boolean,
	array,
	tuple,
	enum,
	unknown,
	any,
	void,
	null,
	undefined,
	never,
	object,
	union,
	bigint,
	symbol
}

export interface rawType {
	key: string;
	type: tsTypes;
	children: rawType[];
}

export function traverseProperty(property: PropertySignature) {
	return traverseNodes(property);
}

function traverseNodes(node: Node) {
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
			return constructFromLiteralType(node);
		}
		
		const tupleType = node.getFirstChildByKind(SyntaxKind.TupleType);
		if(tupleType) {
			return loopTupleType(tupleType);
		}

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

		return constructFromLiteralType(nodeChild);
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
		return loopThroughComplexArrayType(typeReference);
	}
}

function loopTupleType(tupleNode: TupleTypeNode ) {
	const elements = tupleNode.getElements();
	const writer = new CodeBlockWriter({ useTabs: true });
	writer.write('[');
	elements.forEach((elementNode) => {
		writer.write(`${traverseNodes(elementNode)},`);
	});
	writer.write(']');
	return writer.toString();
}

function loopArrayType(arrayTypeNode: ArrayTypeNode): string {
	const writer = new CodeBlockWriter({ useTabs: true });
	writer.write('[');
	arrayTypeNode.forEachChild((childNode) => {
		const recursion = traverseNodes(childNode);
		if(recursion) {
			writer.write(recursion.toString());
		}
	});
	writer.write(']');
	return writer.toString();
}

function loopThroughComplexArrayType(typeReference: TypeReferenceNode) {
	const writer = new CodeBlockWriter({ useTabs: true });
	writer.write('[');
	typeReference.forEachChild((childNode) => {
		const recursion = traverseNodes(childNode);
		if(recursion) {
			writer.write(recursion.toString());
		}
	});
	writer.write(']');
	return writer.toString();
}

function constructFromLiteralType(literalNode: TypeLiteralNode): string {
	const properties = literalNode.getProperties();
	const writer = new CodeBlockWriter({ useTabs: true });
	return writer.write('').block(() => {
		properties.forEach((property) => {
			writer.writeLine(`${property.getName()}: ${traverseNodes(property)},`);
		});
	}).toString();
}
