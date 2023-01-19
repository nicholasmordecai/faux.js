<script lang="ts">
	import { selectedDoc } from "../../store";
    import CodeBlock from "../../components/snippets/code-block/code-block.svelte";
    import type { CodeBlock as ICodeBlock } from './../../interfaces/codeBlock';

    let functions: ICodeBlock[] = [];
    selectedDoc.subscribe((doc) => {
        if(!doc) return;

        functions = Object.entries(doc.blocks).map((block) => {
            return block[1];
        });


    });

</script>



{#each functions as funct, i}
    <CodeBlock block={funct}/>
{/each}
