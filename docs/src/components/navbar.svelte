<script>
  import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'

  import Search from '@components/search.svelte';
  import VersionSelect from '@ui/versionSelect.svelte';
</script>

	<div class="bg-white border-b" id="navbar">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <div>
          <span>faux.js</span>
        </div>

        <div class="hidden sm:flex sm:items-center">
          <Search/>
        </div>

        <div class="hidden sm:flex sm:items-center">
          <VersionSelect/>
          <a href="https://github.com/megmut/faux.js" target="_blank" rel="noopener noreferrer">
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
            <VersionSelect/>
            <a href="https://github.com/megmut/faux.js" target="_blank" rel="noopener noreferrer">
              <div class="icon w-8">
                <DiGithubBadge />
              </div>
            </a> 
          </div>
        </div>
      </div>
    </div>
  </div>