<script lang="ts">
	import Chart from '@ui/chart.svelte';
	import { Probability } from '@fauxjs/faux.js';
	import { onMount } from 'svelte';

	const data = {
		labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		datasets: [{ values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }]
	};

	const options = {
		data: data,
		type: 'line',
		height: 250,
		colors: ['#7cd6fd', '#743ee2'],
		spline: 1
	};

	let sampleSize: number = 10000;
	let minimum: number = 1;
	let maximum: number = 20;
	let skew: number = 1;

	let chart: Chart;

	function calculate() {
		const results: number[] = [];

		const newLabels = [];
		for (let i = minimum; i <= maximum; i++) {
			newLabels.push(i);
		}

		for (let i = 0; i < sampleSize; i++) {
			const result = Probability.normal(minimum, maximum, skew);
			results.push(Math.round(result));
		}

		const distribution: { [key: string]: number } = {};
		for (let label of newLabels) {
			distribution[label] = 0;
		}

		for (const num of results) {
			distribution[num] = distribution[num] + 1;
		}

		const newValues = Object.entries(distribution).map((num) => num[1]);

		data.datasets = [{ values: newValues }];
		data.labels = newLabels;

		chart.update();
	}

	onMount(() => {
		calculate();
	});

	const labelClass = 'block text-gray-700 text-sm font-bold mb-2';
	const inputClass =
		'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
</script>

<div class="flex mb-4 h-72">
	<div class="w-1/2">
		<p>
			This is an interactie example of a <a
				target="_blank"
				rel="noreferrer"
				href="https://en.wikipedia.org/wiki/Normal_distribution">Normal Distribution</a
			>
		</p>
		<div class="grid grid-cols-4 mt-8 gap-8">
			<div class="grid grid-rows-2">
				<label class={labelClass} for="itterations"> Sample Size </label>
				<input
					class={inputClass}
					id="itterations"
					on:input={calculate}
					type="number"
					bind:value={sampleSize}
				/>
			</div>
			<div class="grid grid-rows-2">
				<label class={labelClass} for="minimum"> Minimum </label>
				<input
					class={inputClass}
					on:input={calculate}
					id="minimum"
					type="number"
					bind:value={minimum}
				/>
			</div>
			<div class="grid grid-rows-2">
				<label class={labelClass} for="maximum"> Maximum </label>
				<input
					class={inputClass}
					on:input={calculate}
					id="maximum"
					type="number"
					bind:value={maximum}
				/>
			</div>
			<div class="grid grid-rows-2">
				<label class={labelClass} for="skew"> Skew </label>
				<input class={inputClass} on:input={calculate} id="skew" type="number" bind:value={skew} />
			</div>
		</div>
	</div>
	<div class="w-1/2">
		<Chart bind:this={chart} {data} {options} />
	</div>
</div>
