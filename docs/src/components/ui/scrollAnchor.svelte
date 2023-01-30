<script lang="ts">
    import { scrollIntoView } from '@utils/util';

    export let href: string;
</script>

<a href="{href}" on:click|preventDefault={scrollIntoView}><slot/></a>