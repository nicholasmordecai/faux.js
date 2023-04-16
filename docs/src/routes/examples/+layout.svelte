<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Sidebar from '@components/docs/sidebar.svelte';
	import { onMount } from 'svelte';
	import routes from '../../data/examples.json';

	const exampleList: {[key: string]: string} = {
		'getting-started': './example-blocks/getting-started.svelte',
		'distributions': './example-blocks/distributions.svelte'
	}

	const defaultContent = exampleList['getting-started'];
	let exampleBlock: ConstructorOfATypedSvelteComponent;

	async function loadContent(source: string) {
		const fileName = exampleList[source];

		const urlSearchParams = $page.url.searchParams;
		console.log('Setting example to:', fileName);

		urlSearchParams.set('example', fileName);
		console.log(urlSearchParams.get('example'));

		try {
			/* @vite-ignore */ 
			exampleBlock = (await import(fileName)).default;
		} catch (error) {
			console.error(error);
		}
	}

	onMount(async () => {
		const urlSearchParams = $page.url.searchParams;

		const exampleParam = urlSearchParams.get('example');

		if(exampleParam != null) {
			const fileName = exampleList[exampleParam];

			urlSearchParams.set('example', fileName ? fileName : defaultContent);
			goto(`?${urlSearchParams.toString()}`);
			
		} else {
			urlSearchParams.set('example', defaultContent);
			goto(`?${urlSearchParams.toString()}`);
		}

		loadContent(urlSearchParams.get('example') as string);
	});
</script>

<div class="flex">
	<div class="flex mx-auto w-1/4">
		<Sidebar {routes} docs={[]} callback={loadContent} />
	</div>
	<main class="flex flex-col w-full mb-14">
		<div class="flex w-full mx-auto px-6 py-8">
			<div class="flex flex-col w-full overflow-y-auto">
				<svelte:component this={exampleBlock} />
			</div>
		</div>
	</main>
</div>
