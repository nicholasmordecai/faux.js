import { writeFileSync, mkdirSync } from 'fs';
import { expect } from 'chai';
import { execSync } from 'child_process';

const testInterface = `
export interface ITest { userName: string; }
`;

const cli = (args: any) => {
	return execSync(`ts-node src/cli/index.ts ${args}`, { stdio: 'inherit' });
};

const testFn = `
import { ITest } from './result/';
const created = ITest.create({ userName: 'heyyy' });
console.log(created);
`;

const runFn = (args: any) => {
	return execSync(`ts-node temp/run.ts ${args}`, { stdio: 'inherit' });
};

describe('Command Line Interface', () => {
	it('Should fail due to no file argument passed', () => {
		expect(function () {
			cli('');
		}).to.throw(Error);
	});

	it('Should run complete test', async () => {
		mkdirSync('./temp', { recursive: true });
		const createdFile = writeFileSync('./temp/main.ts', testInterface);
		// expect(cli("--file=./temp/main.ts --out=./temp/result")).to.not.be.null;
		const runnerFile = writeFileSync('./temp/run.ts', testFn);
		const runResult = runFn('');
		console.log(runResult);
	});
});
