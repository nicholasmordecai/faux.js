import { getAllFiles } from './get-files';
import { getCommentBlock } from './get-comment-blocks';

const configuration = {
    srcDirectory: './src'
}

export async function run() {
    const allFiles = getAllFiles(configuration.srcDirectory);
    const oneFile = getCommentBlock('src/generators/internet/password.ts');
}

run();