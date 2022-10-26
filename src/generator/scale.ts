import {EQ_SCALE, MAGNITUDE_COLORS} from "../static";
import type {Leaflet} from 'leaflet';

function makeScale(DomUtil: Leaflet.DomUtil): string {
    const div = DomUtil.create("div", "info legend");

    let legendInfo = `
              <h1> Magnitude </h1>
                  <div class="labels">
                      <div class="min">
                        ${EQ_SCALE[0]}
                      </div>
                      <div class="max">
                        ${EQ_SCALE[EQ_SCALE.length - 1]}
                      </div>
                  </div>
              <ul>`;

    EQ_SCALE.forEach(function (limit, index) {
        legendInfo += '<li style="background-color: ' + MAGNITUDE_COLORS[index] + '"></li>';
    });
    legendInfo += "</ul>";
    div.innerHTML = legendInfo;
    return div;
}

export {makeScale}