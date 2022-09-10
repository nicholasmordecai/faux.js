import { ClassDeclaration, JSDocStructure, MethodDeclaration, OptionalKind, PropertySignature } from 'ts-morph';

export function generateCreateMethod(
	classDeclaration: ClassDeclaration,
	name: string,
	returnType: string,
	properties: PropertySignature[]
): MethodDeclaration {
	const className: string = classDeclaration.getName() as string;
	const docs = generateDocs(className);
	const newMethod = classDeclaration.addMethod({
		name: name,
		returnType,
		isStatic: true,
		docs: [ docs ]
	});

	newMethod.addParameter({
		name: 'options',
		type: `${returnType}Options`,
		hasQuestionToken: false,
	});

	return newMethod;
}

export function generateFakeMethod(
	classDeclaration: ClassDeclaration,
	name: string,
	returnType: string,
	properties: PropertySignature[]
): MethodDeclaration {
	const className: string = classDeclaration.getName() as string;
	const docs = generateDocs(className);
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

export function generateDocs(name: string): OptionalKind<JSDocStructure> {
	return {
		tags: [
			{
				tagName: 'description',
				text: `Create a new object instance from the ${name} interface.`
			},
			{
				tagName: 'param',
				text: `{${name}Options} options`
			},
			{
				tagName: 'returns',
				text: `{${name}}`,
			},
		],
	};
}
