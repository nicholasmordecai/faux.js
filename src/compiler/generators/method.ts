import { ClassDeclaration, JSDocStructure, MethodDeclaration, OptionalKind, PropertySignature } from 'ts-morph';

export function generateCreateMethod(
	classDeclaration: ClassDeclaration,
	name: string,
	returnType: string,
	properties: PropertySignature[]
): MethodDeclaration {
	const docs = generateDocs(name, properties);
	const newMethod = classDeclaration.addMethod({
		name: name,
		returnType,
		isStatic: true,
		docs: [ docs ]
	});

	newMethod.addParameter({
		name: 'options',
		type: `${returnType}Options`,
		hasQuestionToken: true,
	});

	return newMethod;
}

export function generateFakeMethod(
	classDeclaration: ClassDeclaration,
	name: string,
	returnType: string,
	properties: PropertySignature[]
): MethodDeclaration {
	const docs = generateDocs(name, properties);
	const newMethod = classDeclaration.addMethod({
		name: name,
		returnType,
		isStatic: true,
		docs: [ docs ]
	});

	newMethod.addParameter({
		name: 'options',
		type: `${returnType}Options`,
		hasQuestionToken: true,
	});

	return newMethod;
}

function generateDocs(name: string, properties: PropertySignature[]): OptionalKind<JSDocStructure> {
	return {
		description: `Factory constructor for ${name} interface`,
		tags: [
			...properties.map((property) => {
				return {
					tagName: 'param',
					text: `${property.getName()} ${property.getType().getText()}`,
				};
			}),
			{
				tagName: 'returns',
				text: name,
			},
		],
	};
}
