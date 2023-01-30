export interface CodeBlock {
    name: string | null;
    description: string | null;
    params?: Parameters[];
    
    returns: {
        type: string;
        description: string;
    } | null;
    example: string | null;
    fileName?: string;
    lineNumber?: number;
    exported: boolean;
};

export interface Parameters {
    name: string;
    type: string;
    attributes: string;
    default: string | null;
    description: string;
}
