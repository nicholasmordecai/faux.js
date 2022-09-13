import { InterfaceDeclaration, ModuleResolutionKind, Project } from 'ts-morph';
import { generateClass } from './generators/class';

import { createFakeFunction } from './generators/function';
import { generateInterface, generateOptionalInterface } from './generators/interface';
import { generateCreateMethod, generateFakeMethod } from './generators/method';

export async function compile(entryPoint: string): Promise<void> {
	const project = new Project();
	project.addSourceFilesAtPaths(entryPoint);
	project.resolveSourceFileDependencies();

	const nodeEnv = process.env.NODE_ENV;
	
	const fileConfig = {
		outDir: nodeEnv === 'dev' ? './dev/compiled' : './node_modules/lumis/dist/factory',
		srcFile: nodeEnv === 'dev' ? './src/factory/index.ts' : '../node_modules/lumis/src/factory/index.ts',
		rootSrcFile: nodeEnv === 'dev' ? './src/index.ts' : '../node_modules/lumis/src/index.ts',
	};

	// instatiate a new project, to be written into the factory directory
	const writeProject = new Project({
		skipAddingFilesFromTsConfig: true,
		compilerOptions: {
			outDir: fileConfig.outDir,
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
		fileConfig.srcFile, 'import { options } from "./utils/types";', { overwrite: true, }
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
		const createMethod = generateCreateMethod(newClass, 'create', interfaceName);
		// const fakeMethod = generateFakeMethod(newClass, 'fake', interfaceName);

		// create functional statements
		createMethod.addStatements('return options;');
		// fakeMethod.addStatements([createFakeFunction(properties)]);
	}

	// create source file for the exports
	writeProject.createSourceFile(
		fileConfig.rootSrcFile,
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

	writeProject.addSourceFilesAtPaths('./src/factory/utils/**/*{.d.ts,.ts}');
	await writeProject.save();
	await writeProject.emit();
}
