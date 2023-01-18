<script>
    import "./../app.css"
    import Navbar from "./../components/navbar.svelte";
</script>

<div class="flex">
    <div class="flex-1 flex flex-col">
        <Navbar/>
      <div class="flex">

      <div class="flex w-full mx-auto px-6">
        <div class="flex flex-col w-full overflow-y-auto">
            <slot/>
        </div>
      </div>
    </div>
  </div>
</div>
