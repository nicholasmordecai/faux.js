export interface CodeBlock {
    name: string;
    description: string | null;
    params?: Parameters[];
    
    returns: {
        type: string;
        description: string;
    };
    example: string;
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