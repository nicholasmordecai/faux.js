export interface CodeBlock {
    name: string;
    description: string;
    params?: Parameters[];
    
    returns: {
        type: string;
        description: string;
    };
    example: string;
    fileName?: string;
    lineNumber?: number;
};

export interface Parameters {
    name: string;
    type: string;
    attributes: string;
    default: string;
    description: string;
}