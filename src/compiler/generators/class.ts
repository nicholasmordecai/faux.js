import { ClassDeclaration, PropertySignature, SourceFile } from 'ts-morph';
import { createFakeObject, createSchemaObject } from './object';

export function generateClass(sourceFile: SourceFile, className: string, properties: PropertySignature[]): ClassDeclaration {
	// const objectSchema = createSchemaObject(properties);
	const fakeSchema = createFakeObject(properties);

	const factoryClass = sourceFile.addClass({
		isDefaultExport: false,
		isExported: true,
		name: className,
		properties: [
			// { 
			// 	name: 'schema', 
			// 	isStatic: true,
			// 	type: className,
			// 	initializer: objectSchema
			// },
			{ 
				name: 'fakeSchema', 
				isStatic: true,
				type: className,
				initializer: fakeSchema
			}
		]
	});

	return factoryClass;
}
