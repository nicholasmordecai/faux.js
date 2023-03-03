<script lang="ts">
	import Chart from '@ui/chart.svelte';
    // import { Number } from '@fauxjs/faux.js';

	const data = {
		labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]
	};
	const options = {
		title: 'My Awesome Chart',
		data: data,
		type: 'bar', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
		height: 250,
		colors: ['#7cd6fd', '#743ee2']
	};
	const labelClass = 'block text-gray-700 text-sm font-bold mb-2';
	const inputClass =
		'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';

	let sampleSize: number = 100;
	let minimum: number = 0;
	let maximum: number = 10;
	let skew: number = 1;

	function calculate() {
        // const result = Number.int({min: minimum, max: maximum});
        // console.log(result);
    }
    // calculate();
</script>

<div class="flex mb-4 h-72">
	<div class="w-1/2">
		<p>This is an example of a normal distribution</p>
		<div class="grid grid-cols-2">
			<div class="mb-4 flex">
				<label class={labelClass} for="itterations"> Sample Size </label>
				<input class={inputClass} id="itterations" type="number" value={sampleSize} />
			</div>
			<div class="mb-4 flex">
				<label class={labelClass} for="minimum"> Minimum </label>
				<input class={inputClass} id="minimum" type="number" value={minimum} />
			</div>
			<div class="mb-4 flex">
				<label class={labelClass} for="maximum"> Maximum </label>
				<input class={inputClass} id="maximum" type="number" value={maximum} />
			</div>
			<div class="mb-4 flex">
				<label class={labelClass} for="skew"> Skew </label>
				<input class={inputClass} id="skew" type="number" value={skew} />
			</div>
		</div>
	</div>
	<div class="w-1/2">
		<Chart {data} {options} />
	</div>
</div>
