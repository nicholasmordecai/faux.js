<script lang="ts">
  import Sidebar from "@components/docs/sidebar.svelte";
	import TableOfContents from "@components/docs/table-of-contents.svelte";
</script>

  <div class="flex">
    <div class="flex mx-auto w-1/4">
        <Sidebar/>
    </div>
    <main class="flex flex-col w-full mb-14">
      <div class="flex w-full mx-auto px-6 py-8">
        <div class="flex flex-col w-full overflow-y-auto">
            <slot/>
        </div>
      </div>
    </main>
    <nav class="flex w-1/3">
      <div class="w-full flex mx-auto px-6 py-8">
        <TableOfContents/>
      </div>
    </nav>
  </div>
