import MapPopup from "../MapPopup.svelte";
import type { Marker } from 'leaflet';
import type {Feature} from "geojson";

function getPopupComponent(m: Marker, location: Feature) : MapPopup {
    return new MapPopup({
        target: m,
        props: {location}
    });
}

export {getPopupComponent}