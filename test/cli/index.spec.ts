import { writeFileSync, mkdirSync } from 'fs';
import { expect } from 'chai';
import { execSync } from 'child_process';

const testInterface = `
export interface ITest { userName: string; }
`;

const cli = (args: any) => {
	return execSync(`ts-node src/cli/index.ts ${args}`).toString();
};

const testFn = `
import { ITest } from './result/';
const created = ITest.create({ userName: 'heyyy' });
console.log(JSON.stringify(created));
`;

const runFn = (args: any) => {
	return execSync(`ts-node temp/run.ts ${args}`).toString();
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
		try {
			const compileResult = cli('--file=./temp/main.ts --out=./temp/result');
			// null check here is to ensure a process exit code 0
			expect(compileResult).to.be.null;
		} catch(error) {
			expect(error).to.not.be.null;
		}
		const runnerFile = writeFileSync('./temp/run.ts', testFn);
		const runResult = runFn('');
		expect(JSON.parse(runResult)).to.deep.equal({
			userName: 'heyyy'
		});
	});
});
