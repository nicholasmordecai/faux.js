<script>
  import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'

  import Search from '@components/search.svelte';
	import LogoWord from '@ui/icons/logo-word.svelte';
</script>

	<div class="" id="navbar">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <div class="flex justify-between gap-8">
          <a class="pt-4 w-28" href="/"><LogoWord color="#000000"/></a>
        </div>
        
        <Search/>
        
        <div class="hidden sm:flex sm:items-center sm:space-x-8">
          <a href="/docs">Docs</a>
          <!-- <VersionSelect/> -->
          <a href="https://github.com/nicholasmordecai/faux.js" target="_blank" rel="noopener noreferrer">
            <div class="icon w-8">
              <DiGithubBadge />
            </div>
          </a> 
        </div>
      </div>
      
      <div class="block sm:hidden bg-white border-t-2 py-2">
        <div class="flex flex-col">
          <Search/>
          <div class="flex justify-between items-center border-t-2 pt-2">
            <a href="/docs">Docs</a>
            <!-- <VersionSelect/> -->
            <a href="https://github.com/nicholasmordecai/faux.js" target="_blank" rel="noopener noreferrer">
              <div class="icon w-8">
                <DiGithubBadge />
              </div>
            </a> 
          </div>
        </div>
      </div>
    </div>
  </div>