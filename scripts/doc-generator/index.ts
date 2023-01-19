import { getAllFiles } from './get-files';
import { getCommentBlocks } from './get-comment-blocks';
import { writeFileSync } from 'fs';

const configuration = {
    srcDirectory: './src',
    outDirectory: './docs/src/data/docs.json'
}

export async function run() {
    const allFiles = getAllFiles(configuration.srcDirectory);
    const result: {[key: string]: any} = {};
    for(const file of allFiles) {
        console.info(`Parsing file: ${file}`);
        result[file] = getCommentBlocks(file);
    }

    console.info('All files parsed = writing output...');

    writeFileSync(configuration.outDirectory, JSON.stringify(result), 'utf-8');

    console.info('Documentation generated');
    process.exit(0);
}

run();