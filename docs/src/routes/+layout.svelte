<script>
    import "./../app.css";    
    import Navbar from "@components/navbar.svelte";
    import Footer from "@components/footer.svelte";
</script>

<div class="flex text-gray-800">
    <div class="flex-1 flex flex-col">
        <Navbar/>
      <div class="flex">

      <div class="flex w-full mx-auto">
        <div class="flex flex-col w-full overflow-y-auto">
            <slot/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</div>


<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&display=swap');
</style>
