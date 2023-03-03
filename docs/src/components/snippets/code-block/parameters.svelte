<script lang="ts">
	import type { Parameters } from '@interfaces/codeBlock';

	export let parameters: Parameters[];

	const tableHeaderPadding = 'p-2';
	const tableRowPadding = 'p-2';
</script>

<div class="w-full max-w-2xl">
	<header class="py-4 border-b border-gray-100">
		<h2 class="font-semibold">Parameters</h2>
	</header>
	<div class="overflow-x-auto">
		<table class="table-auto w-full">
			<thead class="text-xs uppercase bg-gray-50 px-2">
				<tr>
					<th class={tableHeaderPadding}>Name</th>
					<th class={tableHeaderPadding}>
						<div class="font-semibold">Type</div>
					</th>
					<th class={tableHeaderPadding}>
						<div class="font-semibold">Attributes</div>
					</th>
					<th class={tableHeaderPadding}>
						<div class="font-semibold">Default</div>
					</th>
					<th class={tableHeaderPadding}>
						<div class="font-semibold">Description</div>
					</th>
				</tr>
			</thead>
			<tbody class="text-sm divide-y divide-gray-100">
				{#each parameters as parameter, i}
					<tr class="even:bg-gray-50 odd:bg-gray-100">
						<td class={tableRowPadding}><div class="text-left">{parameter.name}</div></td>
						<td class={tableRowPadding}><div class="text-left">{parameter.type}</div></td>
						<td class={tableRowPadding}><div class="text-left">{parameter.attributes}</div></td>
						<td class={tableRowPadding}><div class="text-left">{parameter.default}</div></td>
						<td class={tableRowPadding}><div class="text-left">{parameter.description}</div></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
