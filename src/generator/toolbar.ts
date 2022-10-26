import type {Leaflet} from 'Leaflet';
import MapToolbar from "../components/MapToolbar.svelte";
import type {IToolbarActions} from "../types";

function makeToolTip(DomUtil: Leaflet.DomUtil, actions: IToolbarActions ): MapToolbar  {
    let div = DomUtil.create('div');
    let toolbarComponent = new MapToolbar({
        target: div,
        props: {}
    });

    toolbarComponent.$on('toggle-map', actions.toggleMap);
    toolbarComponent.$on('update-data', actions.update);
    return div;
}

export {makeToolTip}