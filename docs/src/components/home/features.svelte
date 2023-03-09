<script lang="ts">
	import FeatureItem from './feature-item.svelte';
	import ChartIcon from './../ui/icons/chart.svelte';
	import NodeIcon from './../ui/icons/node.svelte';
	import PerfIcon from './../ui/icons/performance.svelte';
	import TsIcon from './../ui/icons/ts.svelte';
	import FaDice from 'svelte-icons/fa/FaDice.svelte';
	import FaSeedling from 'svelte-icons/fa/FaSeedling.svelte';
</script>

<section class="bg-white dark:bg-gray-900 w-screen">
	<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
		<div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
			<FeatureItem title="Statistically Significant" body="Accuracy, reliability and confidence is key. If your real-world data has statistical significance, then why shouldn't your testing data?">
				<ChartIcon/>
			</FeatureItem>

			<FeatureItem title="Highly Performant" body="Reduce the time it takes to test, populate databases with lightweight overhad for generating fake data">
				<PerfIcon/>
			</FeatureItem>

			<FeatureItem title="Typescript First" body="Strictly TypeScript first with everything extensivly typed for a better developer experience">
				<TsIcon/>
			</FeatureItem>

			<FeatureItem title="Testing" body="Accurate test data ensures that the software performs as intended in real-world scenarios and in production environments">
				<NodeIcon/>
			</FeatureItem>

			<FeatureItem title="Seed" body="Ensure the initial state of the application is consistent for testing and for rapid database population">
				<div class="icon w-48 text-white">
					<FaSeedling/>
				</div>
			</FeatureItem>

			<FeatureItem title="Deterministic" body="Test results will be consistent every time. This makes it easier to identify and fix issues that arise during testing">
				<div class="icon w-48 text-white">
					<FaDice />
				</div>
			</FeatureItem>
		</div>
	</div>
</section>
