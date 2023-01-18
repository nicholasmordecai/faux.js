<script lang="ts">
    import CodeBlock from "../components/snippets/code-block/code-block.svelte";
    import type { CodeBlock as ICodeBlock } from './../interfaces/codeBlock';
    import MacTerminal from "./../components/snippets/mac-terminal.svelte";

    const fn3: ICodeBlock = {
        name: 'md5',
        description: 'Hash any string input with MD5',
        returns: { type: 'string', description: 'hashed string' },
        params: [
            {
            name: 'input',
            type: 'string',
            default: null,
            description: 'input string to hash',
            attributes: 'optional'
            }
        ],
        example: "hash = md5('my-string');",
        exported: true,
        fileName: 'src/generators/internet/password.ts',
        lineNumber: 6
    };
    const fns = [fn3];
</script>

<!-- <MacTerminal>
    <p class="pb-1">user@macbook dir$ npm install --save tseudo</p>
</MacTerminal> -->
{#each fns as funct, i}
    <CodeBlock block={funct}/>
{/each}

