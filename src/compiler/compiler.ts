import { InterfaceDeclaration, ModuleResolutionKind, Project } from 'ts-morph';

import { functionGenerator } from './function-generator';
import { generateMethod } from './method-generator';

const project = new Project();
project.addSourceFilesAtPaths('./src/**/*{.d.ts,.ts}');
project.resolveSourceFileDependencies();

const writeProject = new Project({
	skipAddingFilesFromTsConfig: true,
	compilerOptions: {
		outDir: './node_modules/hwrld/src/factory/',
		declaration: true,
		sourceMap: true,
		moduleResolution: ModuleResolutionKind.Classic,
	},
});

const writeSourceFile = writeProject.createSourceFile(
	'./node_modules/hwrld/src/factory/index.ts',
	'',
	{
		overwrite: true,
	}
);

const factoryClass = writeSourceFile.addClass({
	isDefaultExport: true,
	name: 'factory',
});

const sourceFiles = project.getSourceFiles();

const allInterfaces: InterfaceDeclaration[] = [];
for (const sourceFile of sourceFiles) {
	allInterfaces.push(...sourceFile.getInterfaces());
}

// need to find a way to create the factory here so I can automatically create an object from an interface
for (const tInterface of allInterfaces) {
	writeSourceFile.addInterface({
		name: tInterface.getName(),
		isExported: true,
		properties: tInterface.getProperties().map((propertySignature) => {
			return {
				name: propertySignature.getName(),
				type: propertySignature.getType().getText(),
			};
		}),
	});

	const properties = tInterface.getProperties();

	const interfaceName = tInterface.getName();
	const newMethod = generateMethod(factoryClass, interfaceName, interfaceName);

	const params: { name: string; type: string }[] = [];
	for (const prop of properties) {
		params.push({ name: prop.getName(), type: prop.getType().getText() });
		newMethod.addParameter({
			name: prop.getName(),
			type: prop.getType().getText(),
			hasQuestionToken: true,
		});
	}
	console.log(doSth.toString());
	newMethod.addStatements([functionGenerator(properties)]);
}

writeProject.save();

function doSth() {
	return true;
}
