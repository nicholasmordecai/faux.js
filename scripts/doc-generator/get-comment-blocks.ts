import fs from 'fs';
import { parse } from 'comment-parser';
import type { Block, Spec } from 'comment-parser';

export interface CodeBlock {
    name: string;
    description: string;
    params?: Parameters[];
    returns: Returns | null;
    example: string | null;
    fileName?: string;
    lineNumber?: number;
    exported: boolean
};

export interface Returns {
    type: string;
    description: string;
}

export interface Parameters {
    name: string;
    type: string;
    attributes: string;
    default: string | null;
    description: string;
}

function getFileContents(absolutePath: string) {
    try {
        const file = fs.readFileSync(absolutePath, 'utf8');
        return file;
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

function parseComment(block: Block, absolutePath: string): CodeBlock {

    const returnBlock = block.tags.filter((spec) => {
        if (spec.tag === 'returns') return spec;
    });

    const paramBlocks = block.tags.filter((spec) => {
        if (spec.tag === 'param') return spec;
    });

    const functionName = block.tags.filter((spec) => {
        if (spec.tag === 'function') return spec;
    });

    const example = block.tags.filter((spec) => {
        if (spec.tag === 'example') return spec;
    });

    const exported = block.tags.filter((spec) => {
        if (spec.tag === 'export') return spec;
    });

    return {
        name: functionName[0].name,
        description: block.description,
        returns: parseReturns(returnBlock[0]),
        params: parseParameters(paramBlocks),
        example: example[0].description,
        exported: exported.length > 0 ? true : false,
        fileName: absolutePath,
        lineNumber: block.source[0].number
    }
}

function parseParameters(parameters: Spec []): Parameters[] {
    const params: Parameters[] = [];
    for (const parameter of parameters) {
        if (parameter) {
            params.push({
                name: parameter?.name,
                type: parameter.type,
                default: parameter.default || null,
                description: parameter.description,
                attributes: parameter.optional ? 'optional' : ''
            });
        }
    }

    return params;
}

function parseReturns(returnComment: Spec): Returns | null {
    return {
        type: returnComment.type,
        description: returnComment.description
    };
}

export function getCommentBlock(absolutePath: string) {
    const fileContents = getFileContents(absolutePath);
    const comments = parse(fileContents);
    for (const comment of comments) {
        const commentBlock = parseComment(comment, absolutePath);
        console.log(commentBlock);
    }

    return {
        module: '',
        blocks: [],

    }
}
