import { ArrayTypeNode, PropertySignature, SyntaxKind, TypeLiteralNode, Node, ts, Identifier } from 'ts-morph';
import { tsTypes } from '../shared/enums';
import { RawType } from '../shared/types';
import { typeMap } from './../utils/consts';

export function recursivlyTraverse(properties: PropertySignature[]): RawType[] | undefined {
	const rawTypes: RawType[] = [];
	for (const property of properties) {
		const identifier = property.getFirstChildByKind(SyntaxKind.Identifier);

		if (!identifier) {
			continue;
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
		const internalType: tsTypes | undefined = mapTypes(node.getKind());

		if (internalType === undefined) {
			continue;
		} else {

			if (internalType === tsTypes.object) {
				return handleObject(node, identifier, internalType)
			}


			if (internalType === tsTypes.array) {
				return handleArray(node, identifier);
			}

			return {
				key: identifier.getText(),
				type: internalType,
				children: []
			};
		}
	}
}

export function handleObject(node: Node<ts.Node>, identifier: Identifier, internalType: tsTypes) {
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

export function handleArray(node: Node<ts.Node>, identifier: Identifier) {
	const element = (node as ArrayTypeNode).getElementTypeNode();

	const elementType = mapTypes(element.getKind());

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

export function mapTypes(kind: SyntaxKind): tsTypes {
	return typeMap[kind];
}
