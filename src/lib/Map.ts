import L from 'leaflet';
import {DEFAULT_INITIAL_VIEW, MAP_TYPES} from '../static';

import type {Map, Marker} from 'leaflet';
import type {Feature} from 'geojson';
import {generateWarningColor} from "./utils";
import {getQuakeWithDangerColor} from "../generator/marker";


let currentMapType, tileLayer, markerLayer;

function getMap(container: HTMLDivElement, type: number): Map {
    let map = L.map(container, {
        zoomSnap: 0.25,
        minZoom: 2.5,
        preferCanvas: true,
    }).setView(DEFAULT_INITIAL_VIEW, 2.5);
    setLayer(map, type)
    L.control.scale().addTo(map);
    return map;
}

function setLayer(map: Map, type: number) {
    currentMapType = type
    if(tileLayer) tileLayer.remove();
    tileLayer = L.tileLayer(MAP_TYPES[type][0], MAP_TYPES[type][1]);
    tileLayer.addTo(map);
}

function getMarkerLayer(map: Map, locs: Feature[]) : void {
    markerLayer = L.layerGroup()
    locs.forEach((location: Feature) => {
        let marker = createMarker(location);
        markerLayer.addLayer(marker);
    })
    markerLayer.addTo(map);
}


function createMarker(loc: Feature): Marker {
    let icon = L.divIcon({
        html: `<div>${getQuakeWithDangerColor(generateWarningColor(loc.properties.mag))}</div>`,
        className: 'x'
    });
    return L.marker([loc.geometry['coordinates'][1], loc.geometry['coordinates'][0]], {icon});
}




export  { getMap, getMarkerLayer }