// import chalk from 'chalk';
import { InterfaceDeclaration, ModuleResolutionKind, Project } from 'ts-morph';

import { functionGenerator } from './function-generator';
import { generateMethod } from './method-generator';

export async function compile(entryPoint: string): Promise<void> {
	// console.log(chalk.green('Creating new project...'));
	const project = new Project();
	project.addSourceFilesAtPaths(entryPoint);
	project.resolveSourceFileDependencies();

	const writeProject = new Project({
		skipAddingFilesFromTsConfig: true,
		compilerOptions: {
			outDir: './node_modules/lumis/dist/factory',
			declaration: true,
			sourceMap: true,
			moduleResolution: ModuleResolutionKind.Classic,
		},
	});

	const writeSourceFile = writeProject.createSourceFile(
		'./node_modules/lumis/src/factory/index.ts',
		'',
		{
			overwrite: true,
		}
	);

	const factoryClass = writeSourceFile.addClass({
		isDefaultExport: true,
		name: 'factory',
	});

	// console.log(chalk.green('Getting all source files'));

	const sourceFiles = project.getSourceFiles();

	const allInterfaces: InterfaceDeclaration[] = [];
	for (const sourceFile of sourceFiles) {
		allInterfaces.push(...sourceFile.getInterfaces());
	}
	console.log(allInterfaces);

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
		newMethod.addStatements([functionGenerator(properties)]);
	}

	// console.log(chalk.green('Writing the project to disc...'));

	await writeProject.save();
	await writeProject.emit();

	// console.log(chalk.green('Finished'));

}

