#!/usr/bin/env node

// import chalk from 'chalk';
import { getArguments } from './options';
import { compile } from '../compiler/compiler';

async function runCli() {
	const argv = await getArguments();
	const fileName: string = argv.file;
	await compile(fileName);
}

runCli();
