import L from 'leaflet';
import {DEFAULT_INITIAL_VIEW, MAP_TYPES} from '../static';

import type {Map} from 'leaflet';


let currentMapType, tileLayer;

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

export  { getMap }