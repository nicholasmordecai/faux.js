<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let routes;
	export let docs;
	export let callback: Function | Boolean = false;

	import { selectedDoc } from '@store';

	import type { Docs } from '@interfaces/docs';
	import SidebarItem from './sidebar-item.svelte';
	import type { IItem } from '@interfaces/sidebar';

	const typedRoutes: IItem[] = routes as unknown as IItem[];
	const typedDocs: Docs = docs;

	function changeDocSource(event: CustomEvent<string>) {
		if(callback !== false && typeof(callback) === 'function') {
			return callback(event.detail);
		}

		const urlSearchParams = $page.url.searchParams;
		urlSearchParams.set('doc', event.detail);
		goto(`?${urlSearchParams.toString()}`);

		selectedDoc.set(typedDocs[event.detail]);
	}

	onMount(async () => {
		const urlSearchParams = $page.url.searchParams;
		const docParam = urlSearchParams.get('doc');
		if (!docParam || docParam === '') return;

		selectedDoc.set(typedDocs[docParam]);
	});
</script>

<div id="sidebar" class="md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 min-h-screen">
	<div class="space-y-6 md:space-y-10 mt-10">
		<div id="menu" class="flex flex-col space-y-2">
			{#each typedRoutes as item}
				<SidebarItem
					key={item.title}
					source={item.source}
					children={item.children}
					on:sourceChange={changeDocSource}
				/>
			{/each}
		</div>
	</div>
</div>
