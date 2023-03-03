<script lang="ts">
	import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';
	import img from '$lib/assets/icons/faux-word-black.svg';
</script>

<section class="">
	<div class="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12">
		<img class="mx-auto pt-16" src={img} alt="Faux.js icon" />

		<h1 class="mb-4 mt-16 text-3xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl">
			Boost your development and testing efforts!
		</h1>
		<p class="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">
			TypeScript library for generating statistically significant fake data
		</p>
		<div
			class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
		>
			<a
				href="/docs"
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
			>
				Documentation
				<svg
					class="ml-2 -mr-1 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</a>
			<a
				href="https://github.com/nicholasmordecai/faux.js"
				target="_blank"
				rel="noreferrer"
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-700 hover:bg-gray-700 focus:ring-4 focus:ring-gray-800 "
			>
				<div class="icon w-8 mr-4">
					<DiGithubBadge />
				</div>
				Github
			</a>
		</div>
	</div>
</section>
