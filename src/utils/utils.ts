import { ArrayTypeNode, PropertySignature, SyntaxKind, TypeLiteralNode } from 'ts-morph';
import { tsTypes } from '../shared/enums';
import { RawType } from '../shared/types';

export function recursivlyTraverse(properties: PropertySignature[]): RawType[] | undefined {
	const rawTypes: RawType[] = [];

	for (const property of properties) {
		const identifier = property.getFirstChildByKind(SyntaxKind.Identifier);
		if (!identifier) {
			return undefined;
		}

		const rawType = traverseProperty(property);
		if (rawType !== undefined) {
			rawTypes.push(rawType);
		}
	}

	return rawTypes;
}

export function traverseProperty(property: PropertySignature): RawType | undefined {
	const identifier = property.getFirstChildByKind(SyntaxKind.Identifier);
	if (!identifier) {
		return undefined;
	}

	for (const node of property.getChildren()) {
		const internalType = mapTypes(node.getKind());
		// only do something if the type is mapped correctly
		if (internalType === undefined) {
			continue;
		} else {
			/**
             * This handles object mapping recursively 
             */
			if (internalType === tsTypes.object) {
				const members = (node as TypeLiteralNode).getMembers();
				const children: RawType[] = [];

				members.forEach((childProp) => {
					// cast here too as all children of a typeLiteralNode are property signatures
					const memberType = traverseProperty(childProp as PropertySignature);
					if (memberType) {
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
			if (internalType === tsTypes.array) {
				const element = (node as ArrayTypeNode).getElementTypeNode();
				const elementType = mapTypes(element.getKind());
				if (elementType === undefined) {
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

	return undefined;
}

export function mapTypes(kind: SyntaxKind): tsTypes | undefined {
	switch (kind) {
	case SyntaxKind.StringKeyword:
		return tsTypes.string;
	case SyntaxKind.NumberKeyword:
		return tsTypes.number;
	case SyntaxKind.BooleanKeyword:
		return tsTypes.boolean;
	case SyntaxKind.TupleType:
		return tsTypes.tuple;
	case SyntaxKind.EnumKeyword:
		return tsTypes.enum;
	case SyntaxKind.UnknownKeyword:
		return tsTypes.unknown;
	case SyntaxKind.AnyKeyword:
		return tsTypes.any;
	case SyntaxKind.VoidKeyword:
		return tsTypes.void;
		// case SyntaxKind.NullKeyword : -- null type isn't working as it's being displayed as a literal rather than syntaxKind.NullKeyword
		// 	return tsTypes.null;
	case SyntaxKind.UndefinedKeyword:
		return tsTypes.undefined;
	case SyntaxKind.NeverKeyword:
		return tsTypes.never;
		// case SyntaxKind.ObjectKeyword : -- this shouldn't exist here as if it's an object, it should be dealt with recursivly
		// 	return tsTypes.object;
		// case SyntaxKind.UnionType : -- this is the type, not the keyword. Needs investigation
		// 	return tsTypes.union;
	case SyntaxKind.BigIntKeyword:
		return tsTypes.bigint;
	case SyntaxKind.SymbolKeyword:
		return tsTypes.symbol;
	case SyntaxKind.TypeLiteral:
		return tsTypes.object;
	case SyntaxKind.ArrayType:
		return tsTypes.array;
	case SyntaxKind.TypeReference:
		return tsTypes.typeReference;
	}
}
