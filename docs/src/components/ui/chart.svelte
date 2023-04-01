<script lang="ts">
	import { onMount } from 'svelte';

	// @ts-ignore
	import { Chart } from 'frappe-charts';
    
	let divElement: HTMLElement;
    export let data: any;
    export let options: any;

    let chart: any;

	export function update() {
		chart.update(data);
	}

	onMount(() => {
		chart = new Chart(divElement, options);
	});
</script>

<div bind:this={divElement} />
