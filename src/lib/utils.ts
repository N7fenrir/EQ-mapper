import {MAGNITUDE_COLORS} from "../static";

function format_time(stamp: number) {
    return new Date(stamp).toUTCString();
}


function generateWarningColor(magnitude: number): string {
    let mag = Math.trunc(magnitude);
    return MAGNITUDE_COLORS[mag<9 ? mag : 9];
}


export { generateWarningColor, format_time};