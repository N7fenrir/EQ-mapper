<script lang="ts">
  import Map from "./components/Map.svelte"

  let data = true;


</script>

<div class="content-container">
  {#if !data}
    <h1> Getting EQ Data ... </h1>
  {:else}
    <div class="Map">
      <Map />
    </div>
  {/if}
</div>



<style>

  .content-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    gap: 0 0;
    grid-auto-flow: row dense;
    justify-content: center;
    align-content: center;
    justify-items: stretch;
    align-items: stretch;
    grid-template-areas:
    "Map";
  }

  .Map { grid-area: Map; }

</style>
