import L from 'leaflet';

import {generateWarningColor} from "./utils";
import {getQuakeWithDangerColor} from "../generator/marker";
import {getPopupComponent} from "../generator/popup";

import {DEFAULT_INITIAL_VIEW, MAP_TYPES} from '../static';

import type {Map, Marker} from 'leaflet';
import type {Feature} from 'geojson';
import {makeToolTip} from "../generator/toolbar";
import {makeScale} from "../generator/scale";


let currentMapType, tileLayer, markerLayer;

function getMap(container: HTMLDivElement, type: number): Map {
    let map = L.map(container, {
        zoomSnap: 0.25,
        minZoom: 2.5,
        preferCanvas: true,
    }).setView(DEFAULT_INITIAL_VIEW, 2.5);
    setLayer(map, type)
    addScale(map);
    addToolTip(map);
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
        bindOnClickFunction(marker, location);
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

function addToolTip(map: Map): void {
    let toolbar = L.control({ position: 'topright' });
    toolbar.onAdd = () => {
        return makeToolTip(L.DomUtil, {toggleMap: ()=> {setLayer(map, currentMapType === 1? 2 : 1 )}, update: ()=> {}});
    }
    toolbar.addTo(map)
}

function addScale(map: Map): void {
    const legendLayer = L.control({position: "bottomright"});
    legendLayer.onAdd = function () {
        return makeScale(L.DomUtil)
    };
    legendLayer.addTo(map);
}

function bindOnClickFunction(marker: Marker, location: Feature) : void {
    bindPopup(marker, (m) => {
        return getPopupComponent(m, location)
    });
}


function bindPopup(marker, createFn) {
    let popupComponent;
    marker.bindPopup(() => {
        let container = L.DomUtil.create('div');
        popupComponent = createFn(container);
        return container;
    });

    marker.on('popupclose', () => {
        if(popupComponent) {
            let old = popupComponent;
            popupComponent = null;
            setTimeout(() => {
                old.$destroy();
            }, 500);
        }
    });
}



export  { getMap, getMarkerLayer }