import { ModuleResolutionKind, Project, SourceFile } from 'ts-morph';

export function testProject(): { project: Project, sourceFile: SourceFile } {
	const project = new Project({
		skipAddingFilesFromTsConfig: true,
		compilerOptions: {
			useInMemoryFileSystem: true,
			declaration: false,
			sourceMap: false,
			moduleResolution: ModuleResolutionKind.Classic,
		},
	});
	
	const sourceFile = project.createSourceFile('index.ts');

	return {
		project,
		sourceFile
	};
}
