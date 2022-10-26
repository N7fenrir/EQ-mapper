const MAP_TYPES: Record<number, any[]> = {
    1 : ["https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", { attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}],
    2: ['https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',  { attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>, &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`, subdomains: 'abcd', maxZoom: 14 }]
}


const DEFAULT_INITIAL_VIEW: number[] = [39.8283, -98.5795];


export {MAP_TYPES, DEFAULT_INITIAL_VIEW};