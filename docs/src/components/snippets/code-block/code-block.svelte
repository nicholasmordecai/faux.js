<script lang="ts">
    import Prism from 'prismjs';
    import FaLink from 'svelte-icons/fa/FaLink.svelte';

    import type { CodeBlock } from '../../../interfaces/codeBlock';
	import Parameters from './parameters.svelte';

    function nameClick(event: any) {
        // console.log(event.target.innerHTML)
        //! there's a bug here where if you're already at an element ID with a hash, it just appends that
        // const url = `${window.location.href}#${event.target.innerHTML}`;
        // navigator.clipboard.writeText(url);
    }

    export let block: CodeBlock;

</script>

<div class="rounded overflow-hidden shadow bg-white mb-4" id="{block.name}">
    <div class="px-6 py-4">
        <div class="font-bold text-2xl mb-2 hover:underline group cursor-pointer flex flex-row" on:click={event => nameClick(event)}>
            <span id="block-name">{ block.name }</span>
            <div class="icon w-4 ml-1 mt-2 invisible group-hover:visible">
                <FaLink />
              </div>
        </div>
        <p class="text-gray-700 text-base">{ block.description }</p>
    </div>

    {#if block.params && block.params.length > 0}
        <div class="px-6 pt-4 pb-2">
            <Parameters parameters={block.params}/>
        </div>
    {/if}

    {#if block.returns}
        <div class="px-6 pt-4 pb-2">
            <span>Returns:</span>
            {block.returns.description} {'{'} {block.returns.type} {'}'}
        </div>
    {/if}

    {#if block.example}
        <div class="px-6 pt-4 pb-2">
            <span>Example:</span>
            <pre><code class="language-ts">{@html Prism.highlight(block.example, Prism.languages.javascript, 'javascript')}</code></pre>
        </div>
    {/if}

    <div class="px-6 pt-4 pb-2">
        <span>Source:</span>
        
        <a href="https://github.com/megmut/tseudo/tree/main/src/generators/internet/password.ts" target="_blank" rel="noopener noreferrer" class="text-blue-500">password.ts</a>

        <a href="https://github.com/megmut/tseudo/tree/main/src/generators/internet/password.ts#L6" target="_blank" rel="noopener noreferrer" class="text-blue-500">line 6</a>
    </div>

    <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">function</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">exported</span>
    </div>
</div>
