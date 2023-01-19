import type { Block } from 'comment-parser';

export interface ModuleBlock {
    name: string;
    description: string;
    fileName: string;
    category: string;
    subCategory: string;
}

export function parseModule(comment: Block, absolutePath: string) {
    return {
        name: '',
        description: '',
        fileName: absolutePath,
        category: '',
        subCategory: '',
    }
}