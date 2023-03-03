<script lang="ts">
	export let title: string;
	export let body: string;
</script>

<div>
	<div class="flex justify-center items-center mb-4 w-10 mx-auto">
		<slot />
	</div>
	<div class="feature-content text-center">
		<h3 class="mb-2 text-xl font-bold text-gray-200">{title}</h3>
		<p class="text-gray-500">{body}</p>
	</div>
</div>
