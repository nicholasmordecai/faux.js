import { JSDocStructure, OptionalKind } from 'ts-morph';

export function generateDocs(name: string): OptionalKind<JSDocStructure> {
	return {
		tags: [
			{
				tagName: 'description',
				text: `Create a new object instance from the ${name} interface.`
			},
			{
				tagName: 'param',
				text: `{${name}Options} options`
			},
			{
				tagName: 'returns',
				text: `{${name}}`,
			},
		],
	};
}
