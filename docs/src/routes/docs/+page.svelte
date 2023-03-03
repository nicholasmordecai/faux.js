<script lang="ts">
	import { selectedDoc } from "@store";
    import type { CodeBlock as ICodeBlock } from '@interfaces/codeBlock';
    import CodeBlock from '@snippets/code-block/code-block.svelte';
	
    let functions: ICodeBlock[] = [];
    selectedDoc.subscribe((doc) => {
        if(!doc) return;

        functions = Object.entries(doc.blocks).map((block) => {
            return block[1] as ICodeBlock;
        });
    });
</script>

<!-- <Chart source={source}/> -->

{#each functions as funct, i}
    <CodeBlock block={funct}/>
{/each}
