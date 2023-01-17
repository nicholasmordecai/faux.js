<script lang="ts">
  import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';
  import TiDivide from 'svelte-icons/ti/TiDivide.svelte';

  const routes = {
    "Getting Started": {
      modules: {

      }
    },
    "Generators": {
      modules: {
        "Internet": {},
        "Identification":{},
        "Geography":{},
        "Math":{}
      }
    },
    "Core": {
      modules: {

      }
    },
    "API": {
      modules: {

      }
    },
    "Utils": {
      modules: {

      }
    },
  }
</script>

<div id="sidebar"class="bg-white md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 transition-transform duration-300 ease-in-out">
  <div class="space-y-6 md:space-y-10 mt-10">
    <div id="menu" class="flex flex-col space-y-2">
      {#each Object.entries(routes) as [key, route]}
        <a href="" class="text-sm font-medium text-gray-700 py-2 px-2 hover:underline rounded-md transition duration-150 ease-in-out">
          <div class="flex flex-row">
            {#if Object.entries(route.modules).length > 0}
              <div class="icon w-2 mr-3 pt-1">
                <FaAngleDown />
              </div>
            {:else}
              <div class="icon w-3 mr-3 pt-1">
                <TiDivide />
              </div>
            {/if}


            <span>{key}</span>
          </div>
        </a>

        {#if Object.entries(route.modules).length > 0}
        <ul class="space-y-4 ml-3 pl-4 border-l">
            {#each Object.entries(route.modules) as [key, subRoute]}
            <li class="text-sm">{key}</li>
            {/each}
          </ul>
        {/if}
      {/each}
    </div>
  </div>
</div>
