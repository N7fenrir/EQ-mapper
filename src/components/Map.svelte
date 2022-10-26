<script lang="ts">
    import {CURRENT_MAP_TYPE, EQ_DATA_24_HOURS} from "./stores";
    import {getMap, getMarkerLayer} from "../lib/Map.js";

    let map;

    function mapAction(container: HTMLDivElement) {
        map = getMap(container, $CURRENT_MAP_TYPE);
        getMarkerLayer(map, $EQ_DATA_24_HOURS);
        return {
            destroy: () => {
                map.remove();
                map = undefined;
            }
        };
    }

    function resizeMap() {
        if(map) { map.invalidateSize(); }
    }

    $: onChange($EQ_DATA_24_HOURS);

    async function onChange(args) {
        if(map !== undefined && args){
            getMarkerLayer(map, $EQ_DATA_24_HOURS);
        }
    }

</script>

<svelte:window on:resize={resizeMap} />

<div class="map" style="height:100%;width:100%"  use:mapAction>
</div>



