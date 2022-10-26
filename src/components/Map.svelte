<script lang="ts">
    import {CURRENT_MAP_TYPE} from "./stores";
    import {getMap} from "../lib/Map.js";

    let map;

    function mapAction(container: HTMLDivElement) {
        map = getMap(container, $CURRENT_MAP_TYPE);
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



