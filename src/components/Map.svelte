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

</script>


<div class="map" style="height:100%;width:100%"  use:mapAction>
</div>



