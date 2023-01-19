import type { CodeBlock } from "./codeBlock";

export interface Module {
    name: string;
    description: string;
    fileName: string;
    category: string;
    subCategory: string;
}

export interface Doc {
    module: Module | null;
    blocks: CodeBlock[];
}

export interface Docs { [key: string]: Doc };