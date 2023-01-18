import fs from 'fs';
import path from 'path';

function walkDirectory(directory: string, files: string[]): string[] {
    try {
        fs.readdirSync(directory).forEach(file => {
            const absolutePath: string = path.join(directory, file);
            
            if (fs.statSync(absolutePath).isDirectory()) {
                return walkDirectory(absolutePath, files);
            }
            
            files.push(absolutePath);
        });
        return files;
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
}

export function getAllFiles(rootDirectory: string): string[] {
    return walkDirectory(rootDirectory, []);
}
