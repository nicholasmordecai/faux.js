import { InterfaceDeclaration, SourceFile, SyntaxKind } from 'ts-morph';

export function generateInterface(sourceFile: SourceFile, referenceInterface: InterfaceDeclaration): InterfaceDeclaration | undefined {
	const identifier = referenceInterface.getFirstChildByKind(SyntaxKind.Identifier);
	if(!identifier) return undefined;

	const newInterface = sourceFile.addInterface({
		name: identifier.getText(),
		isExported: true,
		properties: referenceInterface.getProperties().map((propertySignature) => {
			const identifier = propertySignature.getFirstChildByKindOrThrow(SyntaxKind.Identifier);
			// TODO get a fix for the getType function as it costs roughly 500ms per execution!
			return {
				name: identifier.getText(),
				type: propertySignature.getType().getText(),
				hasQuestionToken: propertySignature.hasQuestionToken()
			};
		}),
	});

	return newInterface;
}

export function generateOptionalInterface(sourceFile: SourceFile, referenceInterface: InterfaceDeclaration): InterfaceDeclaration {
	const newInterface = sourceFile.addInterface({
		name: `${referenceInterface.getName()}Options`,
		isExported: true,
		properties: referenceInterface.getProperties().map((propertySignature) => {
			return {
				name: propertySignature.getName(),
				type: `options<${propertySignature.getType().getText()}>`,
				hasQuestionToken: true,
			};
		}),
	});

	return newInterface;
}
