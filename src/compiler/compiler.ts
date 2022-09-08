import { InterfaceDeclaration, ModuleResolutionKind, Project } from 'ts-morph';
import { generateClass } from './generators/class';

import { functionGenerator } from './generators/function';
import { generateInterface, generateOptionalInterface } from './generators/interface';
import { generateCreateMethod } from './generators/method';

export async function compile(entryPoint: string): Promise<void> {
	const project = new Project();
	project.addSourceFilesAtPaths(entryPoint);
	project.resolveSourceFileDependencies();

	// instatiate a new project, to be written into the factory directory
	const writeProject = new Project({
		skipAddingFilesFromTsConfig: true,
		compilerOptions: {
			outDir: './node_modules/lumis/dist/factory',
			declaration: true,
			sourceMap: true,
			moduleResolution: ModuleResolutionKind.Classic,
		},
	});

	const sourceFiles = project.getSourceFiles();

	// find all interfaces from the source files
	const allInterfaces: InterfaceDeclaration[] = [];
	for (const sourceFile of sourceFiles) {
		allInterfaces.push(...sourceFile.getInterfaces());
	}

	// create source file for the interfaces
	const writeSourceFile = writeProject.createSourceFile(
		'./node_modules/lumis/src/factory/index.ts',
		writer => { writer.writeLine('import { options } from \'./../types/types\';').blankLine();},
		{
			overwrite: true,
		},
	);

	// need to find a way to create the factory here so I can automatically create an object from an interface
	const importDeclarations: string[] = [];
	const exports: string[] = [];
	for (const referenceInterface of allInterfaces) {
		// get some consts for easier access
		const properties = referenceInterface.getProperties();
		const interfaceName: string = referenceInterface.getName();
		
		// create the new class
		const newClass = generateClass(writeSourceFile, interfaceName, properties);
		importDeclarations.push(`import { ${interfaceName}, ${interfaceName}Options } from './factory';`);
		exports.push(`${interfaceName}`);
		exports.push(`${interfaceName}Options`);

		// generate the interfaces
		generateInterface(writeSourceFile, referenceInterface);
		generateOptionalInterface(writeSourceFile, referenceInterface);

		// create the class methods
		const createMethod = generateCreateMethod(newClass, 'create', interfaceName, properties);
		// const fakeMethod = generateFakeMethod(newClass, 'fake', interfaceName, properties);

		// create functional statements
		createMethod.addStatements([functionGenerator(properties)]);
		// fakeMethod.addStatements([functionGenerator(properties)]);
	}

	// create source file for the exports
	writeProject.createSourceFile(
		'./node_modules/lumis/src/index.ts',
		writer => {
			// write each import statement
			importDeclarations.map((value) => {
				writer.writeLine(value);
			});

			// export all modules in a single export block
			writer.write('export').block(() => {
				exports.map((value) => {
					writer.writeLine(`${value},`);
				});
			});
		},
		{
			overwrite: true,
		},
	);

	await writeProject.save();
	await writeProject.emit();
}
