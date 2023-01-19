import fs from 'fs';
import { parse } from 'comment-parser';
import type { Block, Spec } from 'comment-parser';
import { parseModule } from './get-module';
import type { ModuleBlock } from './get-module';

export interface CodeBlock {
    name: string | null;
    description: string;
    params?: Parameters[];
    returns: Returns | null;
    example: string | null;
    fileName?: string;
    lineNumber?: number;
    exported: boolean;
    function: boolean;
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
    return {
        name: getFunctionName(block),
        description: block.description,
        returns: parseReturns(block),
        params: parseParameters(block),
        example: parseExaple(block),
        exported: isExported(block),
        fileName: absolutePath,
        lineNumber: block.source[0].number,
        function: isFunction(block)
    }
}

function parseParameters(block: Block): Parameters[] {
    const parameters = block.tags.filter((spec) => {
        if (spec.tag === 'param') return spec;
    });

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

function isFunction(block: Block): boolean {
    const functionTag = block.tags.filter((spec) => {
        if (spec.tag === 'function') return spec;
    });

    return functionTag.length > 0;
}

function getFunctionName(block: Block): string | null {
    const functionTag = block.tags.filter((spec) => {
        if (spec.tag === 'function') return spec;
    });

    if(functionTag.length === 0) {
        return null;
    }

    return functionTag[0].name;
}

function isExported(block: Block): boolean {
    const exported = block.tags.filter((spec) => {
        if (spec.tag === 'export') return spec;
    });

    return exported.length > 0;
}

function parseReturns(block: Block): Returns | null {
    const returnBlocks = block.tags.filter((spec) => {
        if (spec.tag === 'returns') return spec;
    });

    if(returnBlocks.length === 0) {
        return null;
    }

    return {
        type: returnBlocks[0].type,
        description: returnBlocks[0].description
    };
}

function parseExaple(block: Block): string | null{
    const example = block.tags.filter((spec) => {
        if (spec.tag === 'example') return spec;
    });

    if(example.length === 0) {
        return null;
    }

    return example[0].description;
}

export function getCommentBlocks(absolutePath: string) {
    const fileContents = getFileContents(absolutePath);
    const comments = parse(fileContents);
    let module: ModuleBlock | null = null;
    const codeBlocks: CodeBlock[] = [];

    for (const comment of comments) {
        if (comment.tags.filter(tag => tag.tag === 'module').length > 0) {
            module = parseModule(comment, absolutePath);
        } else {
            const commentBlock = parseComment(comment, absolutePath);
            codeBlocks.push(commentBlock);
        }
    }

    return {
        module,
        blocks: codeBlocks,
    }
}
