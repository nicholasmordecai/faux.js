<script lang="ts">
	import { selectedDoc } from "@store";
    import type { CodeBlock as ICodeBlock } from '@interfaces/codeBlock';
    import CodeBlock from '@snippets/code-block/code-block.svelte';
	import Chart from "@snippets/chart.svelte";
	
    let functions: ICodeBlock[] = [];
    selectedDoc.subscribe((doc) => {
        if(!doc) return;

        functions = Object.entries(doc.blocks).map((block) => {
            return block[1];
        });
    });

    // const source = `gantt
    // title A Gantt Diagram
    // dateFormat  YYYY-MM-DD
    // section Section
    // A task           :a1, 2014-01-01, 30d
    // Another task     :after a1  , 20d
    // section Another
    // Task in sec      :2014-01-12  , 12d
    // another task      : 24d
    // `;
</script>

<!-- <Chart source={source}/> -->

{#each functions as funct, i}
    <CodeBlock block={funct}/>
{/each}
