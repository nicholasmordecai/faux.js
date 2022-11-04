import { copyFileSync } from 'fs';
import { EmitResult, InterfaceDeclaration, ModuleResolutionKind, Project } from 'ts-morph';
import { generateClass } from './generators/class';

import { createFakeFunction } from './generators/function';
import { generateInterface, generateOptionalInterface } from './generators/interface';
import { generateCreateMethod, generateFakeMethod } from './generators/method';

interface compileOptions {
	inMemory: boolean;
	outDir?: string;
}

export async function compile(project: Project, options: compileOptions): Promise<EmitResult> {
	project.resolveSourceFileDependencies();

	const fileConfig = {
		outDir: './node_modules/lumis/dist/factory',
		srcDir: './src',
		rootSrcFile: './src/index.ts',
	};

	// override outdir if it's not null
	if (options.outDir) {
		fileConfig.outDir = options.outDir;
	}

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
		`${fileConfig.srcDir}/factory/index.ts`, '', { overwrite: true, }
	);

	writeSourceFile.addStatements([
		'import { faker } from "@faker-js/faker"',
		'import { options } from "../shared/types.d.ts";',
		'import { tsTypes } from "../shared/enums"',
	]);

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
		const fakeMethod = generateFakeMethod(newClass, 'fake', interfaceName);

		// create functional statements
		createMethod.addStatements('return options;');
		fakeMethod.addStatements([createFakeFunction(interfaceName)]);
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

	const files: string[] = ['types.d.ts', 'enums.ts'];
	for (const file of files) {
		copyFileSync(`${fileConfig.srcDir}/shared/${file}`, `${fileConfig.outDir}/shared/${file}`);
	}

	await writeProject.save();
	return writeProject.emit();
}
