<script lang="ts">
	import type { IItem } from '@interfaces/sidebar';
	import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';
	import TiDivide from 'svelte-icons/ti/TiDivide.svelte';
	import { createEventDispatcher } from 'svelte';

	let expanded: boolean = false;
	export let key: string;
	export let source: string | undefined;
	export let children: IItem[] | undefined;

	function toggle() {
		expanded = !expanded;
	}

	const dispatch = createEventDispatcher<{ sourceChange: string }>();

	function changeSource() {
		dispatch('sourceChange', source);
	}
</script>

<div class="text-sm font-medium py-2 px-2">
	{#if children && children.length > 0}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="flex flex-row cursor-pointer" on:click={toggle}>
			<div
				class="icon collapsable w-2 mr-3 pt-1 transition-transform duration-300 -rotate-90"
				class:expanded
			>
				<FaAngleDown />
			</div>
			<span>{key}</span>
		</div>
	{:else}
		<div class="flex flex-row cursor-pointer">
			<div class="icon w-2 mr-3 pt-1">
				<TiDivide />
			</div>
			{#if source}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span on:click={changeSource}>{key}</span>
			{:else}
				<span>{key}</span>
			{/if}
		</div>
	{/if}

	{#if children && children.length > 0}
		<div
			class="child-list border-l ml-[3px] pl-2 border-gray-200 max-h-0 overflow-hidden"
			class:expanded
		>
			{#each children as child}
				<svelte:self key={child.title} children={child.children} source={child.source} on:sourceChange />
			{/each}
		</div>
	{/if}
</div>

<style>
	.collapsable.expanded {
		transform: rotate(0deg);
	}

	.child-list.expanded {
		max-height: 96rem;
	}
</style>
