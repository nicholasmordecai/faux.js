<script lang="ts">
	import { onMount } from "svelte";
    import mermaid from 'mermaid';

    export let source: string;


    onMount(() => {
        const t = mermaid.render('foo', source, undefined);
        chartDiv.innerHTML = t;
    });

    let chartDiv: HTMLDivElement;
</script>


<div bind:this={chartDiv}/>