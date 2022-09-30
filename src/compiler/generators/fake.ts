import { CodeBlockWriter } from "ts-morph";
import { RawType } from "../../utils/newLooper";

export function generateFakeMethod(schema: RawType[]): Function {
    const writer = new CodeBlockWriter({ useTabs: true });
    writer.writeLine(`return {`);
    for(const property of schema) {
        writer.writeLine(`${property.key}: "abcdefg"`);
    }
    writer.writeLine(`}`);
    return new Function(writer.toString());
}