const quake =` <svg width="24px" height="24px" class="pulse" fill="$fill-color$" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <circle cx = "50%" cy = "50%" r = "7px"></circle>
    </svg>`;


function getQuakeWithDangerColor(color:string) : string {
    return quake.replace('$fill-color$', color)
}


export {getQuakeWithDangerColor}