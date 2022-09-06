import yargs from 'yargs';

export interface IArguments {
    file: string
}

export async function getArguments() {
	const parser = yargs(process.argv.slice(2)).options({
		file: {
			alias: 'f',
			demandOption: true,
			describe: 'Pass a file flag to the entry point of your application',
			string: true
		}
	});

	const argv = await parser.argv;

	return {
		file: argv.file
	};
}


