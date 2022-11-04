import { writeFileSync, mkdirSync, rmSync } from 'fs';
import { expect } from 'chai';
import { execSync } from 'child_process';

const testInterface = `
export interface ITest { userName: string; }
`;

const cli = (args: any) => {
	return execSync(`ts-node src/cli/index.ts ${args}`).toString();
};

const createFn = `
import { ITest } from './index';
const created = ITest.create({ userName: 'heyyy' });
console.log(JSON.stringify(created));
`;

const fakeFn = `
import { ITest } from './index';
const created = ITest.fake();
console.log(JSON.stringify(created));
`;

const createFnExec = (args: any) => {
	return execSync(`ts-node temp/run.ts ${args}`).toString();
};

const fakeFnExec = (args: any) => {
	return execSync(`ts-node temp/run.ts ${args}`).toString();
};

describe('Command Line Interface Compiler', () => {
	// Setup the temp folder and create a test interface, along with calling the CLI to run Lumis
	before(() => {
		mkdirSync('./temp', { recursive: true });
		mkdirSync('./temp/shared', { recursive: true });
		writeFileSync('./temp/main.ts', testInterface);
		cli('--file=./temp/main.ts --out=./temp');
	});

	after(() => {
		// clear the temp folder here
		// rmSync('./temp', { recursive: true, force: true });
	});

	it('Should fail due to no file argument passed', () => {
		expect(function () {
			cli('');
		}).to.throw(Error);
	});

	it('Should run complete create function test', async () => {
		const runnerFile = writeFileSync('./temp/run.ts', createFn);
		const runResult = createFnExec('');
		expect(JSON.parse(runResult)).to.deep.equal({
			userName: 'heyyy'
		});
	});

	it('Should run complete fake function test', async () => {
		writeFileSync('./temp/run.ts', fakeFn);
		const fakeResult = fakeFnExec('');
		const obj = JSON.parse(fakeResult);
		expect(obj).not.to.be.null;
		expect(obj).to.haveOwnProperty('userName');
		expect(obj.userName).to.be.string;
	});
});
