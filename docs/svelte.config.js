import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			'@store': './src/store.ts',
			'@ui': './src/components/ui/*',
			'@snippets': './src/components/snippets/*',
			'@components': './src/components/*',
			'@interfaces': './src/interfaces/*',
			'@utils': './src/utils/*',
		}
	}
};

export default config;
