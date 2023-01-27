<script lang="ts">
  import Sidebar from "@components/sidebar.svelte";
	import TableOfContents from "@components/table-of-contents.svelte";
</script>

  <div class="flex">
    <div class="flex mx-auto w-1/4">
        <Sidebar/>
    </div>
    <main class="flex flex-col w-full bg-slate-50 mb-14">
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
