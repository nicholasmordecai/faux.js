<script lang="ts">
    import CodeBlock from "../components/snippets/code-block/code-block.svelte";
    import MacTerminal from "./../components/snippets/mac-terminal.svelte";

    const fn = {
        name: 'postcode',
        description: 'Generate a random postcode',
        params: [{
            name: 'locale',
            type: 'ILocale',
            attributes: 'optional',
            default: 'GB',
            description: 'A locale used to generate the postcode'
        },
        {
            name: 'locale',
            type: 'ILocale',
            attributes: 'optional',
            default: 'GB',
            description: 'A locale used to generate the postcode'
        },
        {
            name: 'locale',
            type: 'ILocale',
            attributes: 'optional',
            default: 'GB',
            description: 'A locale used to generate the postcode'
        }],
        returns: {
            type: 'string',
            description: 'the postcode'
        },
        example: 'const zip = postcode(); // LP17 6GB'
    };

    const fn2 = {
        name: 'address',
        description: 'Generate a random postcode',
        params: [],
        returns: {
            type: 'string',
            description: 'the postcode'
        },
        example: `const address = address();
// 17 fair view way, Bristol, BR16 5FG`
    };

    const fn3 = {
        name: 'houseNameNumber',
        description: 'Generate a random postcode',
        params: [],
        returns: {
            type: 'string',
            description: 'the postcode'
        },
        example: `const address = address();
// 17 fair view way, Bristol, BR16 5FG`
    };
    const fns = [fn, fn2, fn3];
</script>

<!-- <MacTerminal>
    <p class="pb-1">user@macbook dir$ npm install --save faux.js</p>
</MacTerminal> -->
{#each fns as funct, i}
    <CodeBlock block={funct}/>
{/each}

