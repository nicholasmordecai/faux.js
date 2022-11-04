import { ClassDeclaration, MethodDeclaration } from 'ts-morph';
import { generateDocs } from './docs';

export function generateCreateMethod(
	classDeclaration: ClassDeclaration,
	name: string,
	returnType: string,
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
		type: `${returnType}`,
		hasQuestionToken: false,
	});

	return newMethod;
}

/**
 * This is what generates a method that will be used to fake an interface instance
 * @param classDeclaration 
 * @param name 
 * @param returnType 
 * @returns 
 */
export function generateFakeMethod(
	classDeclaration: ClassDeclaration,
	name: string,
	returnType: string,
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
