<script>
	import Logo from '@ui/icons/logo.svelte';
</script>

<footer class="container mx-auto p-4 rounded-lg md:px-6 md:py-8">
	<div class="sm:flex sm:items-center sm:justify-between">
		<a href="/" class="flex items-center mb-4 sm:mb-0 w-6">
			<Logo color="#000" />
		</a>
		<ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
			<li>
				<a href="/about" class="mr-4 hover:underline md:mr-6 ">About</a>
			</li>
			<li>
				<a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
			</li>
			<li>
				<a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
			</li>
			<li>
				<a href="#" class="hover:underline">Contact</a>
			</li>
		</ul>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-8" />
	<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
		>© <a href="/" class="hover:underline">Faux.js</a>. All Rights Reserved.
	</span>
</footer>
