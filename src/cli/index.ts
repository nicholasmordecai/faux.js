#!/usr/bin/env node

// import chalk from 'chalk';
import { getArguments } from './options';
import { compile } from '../compiler/compiler';
import { Project } from 'ts-morph';

async function runCli() {
	const argv = await getArguments();
	const fileName: string = argv.file;

	const project = new Project();
	project.addSourceFilesAtPaths(fileName);
	await compile(project);
}

runCli();
