<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import routes from '../../data/sidebar.json';
	import docs from '../../data/docs.json';

	import { selectedDoc } from '@store';

	import type { Docs } from '@interfaces/docs';
	import SidebarItem from './sidebar-item.svelte';
	import type { IItem } from '@interfaces/sidebar';

	const typedRoutes: IItem[] = routes as unknown as IItem[];
	const typedDocs: Docs = docs;

	function changeDocSource(event: CustomEvent<string>) {
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
			{#each typedRoutes as item }
				<SidebarItem key={item.title} source={item.source} children={item.children} on:sourceChange={changeDocSource} />
			{/each}
		</div>
	</div>
</div>

<!-- transition-all ease-in-out duration-150invisible h-0 -->
<!-- transition-all ease-in-out duration-150 invisible h-0 -->
