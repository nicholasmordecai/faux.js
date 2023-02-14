<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';
	import TiDivide from 'svelte-icons/ti/TiDivide.svelte';

	import routes from '../../data/sidebar.json';
	import docs from '../../data/docs.json';

	import { selectedDoc } from '@store';

	import type { IRoutes } from '@interfaces/sidebar';
	import type { Docs } from '@interfaces/docs';
	const typedRoutes: IRoutes = routes;
	const typedDocs: Docs = docs;

	function navigateToDoc(source: string) {
		const urlSearchParams = $page.url.searchParams;
		urlSearchParams.set('doc', source);
		goto(`?${urlSearchParams.toString()}`);

		selectedDoc.set(typedDocs[source]);
	}

	onMount(async () => {
		const urlSearchParams = $page.url.searchParams;
		const docParam = urlSearchParams.get('doc');
		if (!docParam || docParam === '') return;

		selectedDoc.set(typedDocs[docParam]);
	});
</script>

<div
	id="sidebar"
	class="md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 transition-transform duration-300 ease-in-out"
>
	<div class="space-y-6 md:space-y-10 mt-10">
		<div id="menu" class="flex flex-col space-y-2">
			{#each Object.entries(typedRoutes) as [key, root]}
				<a
					href=""
					class="text-sm font-medium py-2 px-2 hover:underline rounded-md transition duration-150 ease-in-out"
				>
					<div class="flex flex-row">
						{#if Object.entries(root.groups).length > 0}
							<div class="icon w-2 mr-3 pt-1 ">
								<FaAngleDown />
							</div>
						{:else}
							<div class="icon w-3 mr-3 pt-1 ">
								<TiDivide />
							</div>
						{/if}
						<span>{key}</span>
					</div>
				</a>

				{#if Object.entries(root.groups).length > 0}
					<ul class="space-y-4 ml-3 pl-4 border-l border-gray-700">
						{#each Object.entries(root.groups) as [key, group]}
							<li class="text-sm">{key}</li>

							{#if Object.entries(group).length > 0}
								<ul class="space-y-4 ml-3 pl-4 border-l border-gray-700 text-sm">
									{#each Object.entries(group) as [key, module]}
										{#if module.source}
											<li class="cursor-pointer" on:click={() => navigateToDoc(module.source)}>
												{key}
											</li>
										{/if}
									{/each}
								</ul>
							{/if}
						{/each}
					</ul>
				{/if}
			{/each}
		</div>
	</div>
</div>
