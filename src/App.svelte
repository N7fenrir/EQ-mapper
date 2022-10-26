<script lang="ts">
  import Map from "./components/Map.svelte"
  import {EQ_DATA_24_HOURS, START_END_DATE} from "./components/stores";
  import {getDataFromTimeDate, getLast24HoursFromNow, setDate} from "./lib/USGS";

  let data = false;

  $START_END_DATE = getLast24HoursFromNow();

  $: onChange($START_END_DATE);

  async function onChange(args) {
    if(args.length > 0) {
      data = false;
      setDate($START_END_DATE)
      $EQ_DATA_24_HOURS = await getDataFromTimeDate();
      data = true;
    }
  }

</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css" integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=" crossorigin="" />
</svelte:head>


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
