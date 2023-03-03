<script lang="ts">
	import Fuse from 'fuse.js';

	import type { Docs } from '@interfaces/docs';

	const options = {
		includeScore: true,
		useExtendedSearch: true,
		includeMatches: true,
		keys: [
			{
				name: 'blocks.name',
				score: 0.5
			}
		]
	};

	import docs from './../data/docs.json';
	const typedDocs: Docs = docs;

	const arrayEntries = Object.entries(docs);
	const mapped = arrayEntries.map((v) => v[1]);
	console.log(mapped);
	const fuse = new Fuse(mapped, options);

	let input: string;
	function searchInputChange() {
		const result = fuse.search(input);
		console.log(result);
	}
</script>

<div class="flex border-b-2 w-32">
	<input
		type="text"
		class="w-24 rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
		placeholder="Search"
		bind:value={input}
		on:change={searchInputChange}
	/>
	<button class="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
		<svg
			class="w-4 h-4 fill-current"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>
</div>
