<script lang="ts">
	import ExponentialDist from './charts/exponential-dist.svelte';
	import NormalDist from './charts/normal-dist.svelte';
	import ParetoDist from './charts/pareto-dist.svelte';

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
</script>

<div class="container mx-auto">
	<div class="mt-12" />
	<NormalDist />
	<hr />

	<div class="mt-12" />
	<ParetoDist />
	<hr />

	<div class="mt-12" />
	<ExponentialDist />
</div>
