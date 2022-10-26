<script lang="ts">
    import type {Feature} from 'geojson';
    import {format_time} from "../lib/utils.js";

    export let location: Feature;

</script>


<div style="width:100%;text-align:center;font-weight:600">
    <h1 class="f-title">{location.properties.type}</h1>
    <hr class="solid">
    <h3>Location: {location.properties.place}</h3>
    <h4>Magnitude: {location.properties.mag}</h4>

    <p>{format_time(location.properties.time)}</p>
    <a href=location.properties.url>Details</a>

</div>

<style>
    hr.solid {
        border-top: 3px solid #bbb;
    }

    .f-title {
        text-transform: capitalize;
    }
</style>