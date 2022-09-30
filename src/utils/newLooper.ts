import { ArrayTypeNode, PropertySignature, SyntaxKind, TypeLiteralNode } from 'ts-morph';

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
	symbol,
	typeReference
}

export interface RawType {
	key: string | null;
	type: tsTypes;
	children: RawType[] | undefined;
}

// export function recursivlyTraverse() {
	
// }

export function traverseProperty(property: PropertySignature): RawType | undefined {
	const identifier = property.getFirstChildByKind(SyntaxKind.Identifier);
	if(!identifier) {
		return undefined;
	}

	for(const node of property.getChildren()) {
		const internalType = mapTypes(node.getKind());
		// only do something if the type is mapped correctly
		if(internalType === undefined) {
			continue;
		} else {
			/**
			 * This handles object mapping recursively 
			 */
			if(internalType === tsTypes.object) {
				const members = (node as TypeLiteralNode).getMembers();
				const children: RawType[] = [];

				members.forEach((childProp) => {
					// cast here too as all children of a typeLiteralNode are property signatures
					const memberType = traverseProperty(childProp as PropertySignature);
					if(memberType) {
						children.push(memberType);
					}
				});

				return {
					key: identifier.getText(),
					type: internalType,
					children: children
				};
			}

			/**
			 * This handles arrays
			 */
			if(internalType === tsTypes.array) {
				const element = (node as ArrayTypeNode).getElementTypeNode();
				const elementType = mapTypes(element.getKind());
				if(elementType === undefined) {
					return undefined;
				}

				return {
					key: identifier.getText(),
					type: tsTypes.array,
					children: [{
						key: null,
						type: elementType,
						children: []
					}]
				};
			}

			return {
				key: identifier.getText(),
				type: internalType,
				children: []
			};
		}
	}
	
	// if (type.isArray()) {
	// 	return handleArrayProperty(property);
	// }
	
	// if (type.isObject()) {
	// 	if(property.isKind(SyntaxKind.TypeLiteral)) {
	// 		return { 
	// 			key: property.getName(),
	// 			type: tsTypes.object,
	// 			children: constructFromLiteralType(property)
	// 		};
	// 	}
		
	// const tupleType = node.getFirstChildByKind(SyntaxKind.TupleType);
	// if(tupleType) {
	// 	return loopTupleType(tupleType);
	// }

	// const nodeChild = property.getFirstChildByKind(SyntaxKind.TypeLiteral);
	// if(!nodeChild) {
	// 	const symbol = type.getSymbol();

	// 	if(!symbol) return undefined;
	// 	const identifier = symbol.getName();
	// 	const referenceInterface = node.getSourceFile().getInterface(identifier);
	// 	if(!referenceInterface) return '{}';

	// 	let s = '{';
	// 	referenceInterface.getProperties().forEach((property) => {
	// 		s += `${property.getName()}: ${traverseNodes(property)},`;
	// 	});
	// 	s += '}';
	// 	return s;
	// }

	// return constructFromLiteralType(nodeChild);
	// }

	return undefined;
}

// function constructFromLiteralType(literalNode: TypeLiteralNode): RawType[] {
// 	const rawTypes: RawType[] = [];
// 	literalNode.getProperties().forEach((property) => {
// 		const rawType = traverseProperty(property);
// 		if(rawType) {
// 			rawTypes.push(rawType);
// 		}
// 	});
// 	return rawTypes;
// }

// function handleArrayProperty(node: PropertySignature): RawType | undefined {
// 	// handles cases like string[] or interface[]
// 	const arrayTypeNode = node.getFirstChildByKind(SyntaxKind.ArrayType);
// 	if(arrayTypeNode) {
// 		return { 
// 			key: node.getName(),
// 			type: tsTypes.array,
// 			children: loopArrayType(arrayTypeNode)
// 		};
// 	}

// 	// handles cases like Array<string>
// 	// const typeReference = node.getFirstChildByKind(SyntaxKind.TypeReference);
// 	// if(typeReference) {
// 	// 	return loopThroughComplexArrayType(typeReference);
// 	// }
// }

// function loopArrayType(arrayTypeNode: ArrayTypeNode): RawType[] | undefined {
// 	const child = arrayTypeNode.getFirstChildByKind(SyntaxKind.TypeReference);
// 	if(!child) return undefined;
// 	const arrayProperty = mapTypes(child.getKind());

// 	if(!arrayProperty) return undefined;
// 	return [{
// 		key: null,
// 		type: arrayProperty,
// 		children: []
// 	}];
// }

// function loopTupleType(tupleNode: TupleTypeNode): RawType[] | undefined {
// 	const typeArray: RawType[] = [];
// 	tupleNode.getElements().forEach((node) => {
// 		const type = node.getType();
// 		if(!type) return undefined;
// 		const kind = node.getKind();
// 		return {
// 			key: null,
// 			type: mapTypes(kind),
// 			children: []
// 		};
// 	});
	
// 	return typeArray;
// }

// function loopThroughComplexArrayType(typeReference: TypeReferenceNode) {
// 	const writer = new CodeBlockWriter({ useTabs: true });
// 	writer.write('[');
// 	typeReference.forEachChild((childNode) => {
// 		const recursion = traverseNodes(childNode);
// 		if(recursion) {
// 			writer.write(recursion.toString());
// 		}
// 	});
// 	writer.write(']');
// 	return writer.toString();
// }

function mapTypes(kind: SyntaxKind): tsTypes | undefined {
	switch (kind) {
	case SyntaxKind.StringKeyword :
		return tsTypes.string;
	case SyntaxKind.NumberKeyword :
		return tsTypes.number;
	case SyntaxKind.BooleanKeyword :
		return tsTypes.boolean;
	case SyntaxKind.TupleType :
		return tsTypes.tuple;
	case SyntaxKind.EnumKeyword :
		return tsTypes.enum;
	case SyntaxKind.UnknownKeyword :
		return tsTypes.unknown;
	case SyntaxKind.AnyKeyword :
		return tsTypes.any;
	case SyntaxKind.VoidKeyword :
		return tsTypes.void;
	// case SyntaxKind.NullKeyword : -- null type isn't working as it's being displayed as a literal rather than syntaxKind.NullKeyword
	// 	return tsTypes.null;
	case SyntaxKind.UndefinedKeyword:
		return tsTypes.undefined;
	case SyntaxKind.NeverKeyword :
		return tsTypes.never;
	// case SyntaxKind.ObjectKeyword : -- this shouldn't exist here as if it's an object, it should be dealt with recursivly
	// 	return tsTypes.object;
	// case SyntaxKind.UnionType : -- this is the type, not the keyword. Needs investigation
	// 	return tsTypes.union;
	case SyntaxKind.BigIntKeyword :
		return tsTypes.bigint;
	case SyntaxKind.SymbolKeyword :
		return tsTypes.symbol;
	case SyntaxKind.TypeLiteral :
		return tsTypes.object;
	case SyntaxKind.ArrayType :
		return tsTypes.array;
	case SyntaxKind.TypeReference :
		return tsTypes.typeReference;
	}
}
