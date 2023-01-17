<script lang="ts">
    import { fade } from 'svelte/transition';
    import FaAlignLeft from 'svelte-icons/fa/FaAlignLeft.svelte'
    import FaRegArrowAltCircleUp from 'svelte-icons/fa/FaRegArrowAltCircleUp.svelte';
    
    import ScrollAnchor from "./ui/scrollAnchor.svelte";

    const links = [
        { name: 'Postcode', id: 'postcode' },
        { name: 'Address', id: 'address' },
        { name: 'House Name Number', id: 'houseNameNumber' },
    ];

    const scrollBack = true;
    let y: number;
</script>

<div class="bg-white w-full">
    <div class="flex flex-row">
        <div class="icon w-3 pt-1 mr-3">
            <FaAlignLeft />
          </div>
        <span class="mb-4 text-left font-bold">On this page</span>
    </div>

    <nav>
        <ul class="space-y-3">
            {#each links as link, i}
                <li><ScrollAnchor href="#postcode">{link.name}</ScrollAnchor></li>
            {/each}
        </ul>
    </nav>

    <hr class="w-7/8 my-8 mx-auto">

    {#if y > 100}
        <div class="flex flex-row" transition:fade>
            <div class="icon w-4 pt-1 mr-3">
                <FaRegArrowAltCircleUp />
              </div>
            <ScrollAnchor href="#navbar">Scroll to top</ScrollAnchor>
        </div>
    {/if}
</div>

<svelte:window bind:scrollY={y} />
