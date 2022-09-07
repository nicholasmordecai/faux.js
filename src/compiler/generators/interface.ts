import { InterfaceDeclaration, SourceFile } from 'ts-morph';

export function generateOptionsInterface(sourceFile: SourceFile): InterfaceDeclaration {
	const newInterface = sourceFile.addInterface({
		name: 'options',
		isExported: true,
		properties: [
			{
				name: 'fake',
				type: 'boolean',
				hasQuestionToken: true,
			},
			{
				name: 'value',
				type: 'T',
				hasQuestionToken: true,
			}
		],
		typeParameters: [
			{ name: 'T',
			}
		]
	});

	return newInterface;
}

export function generateInterface(sourceFile: SourceFile, referenceInterface: InterfaceDeclaration): InterfaceDeclaration {
	const newInterface = sourceFile.addInterface({
		name: referenceInterface.getName(),
		isExported: true,
		properties: referenceInterface.getProperties().map((propertySignature) => {
			return {
				name: propertySignature.getName(),
				type: propertySignature.getType().getText(),
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
