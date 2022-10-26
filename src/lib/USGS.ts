import {URL_24_HOUR_EQ_LIST} from "../static";
import type {Feature} from "geojson";

let startDate, endDate;

function getLast24HoursFromNow() : string[] {

    const date = new Date()
    const year = date.getFullYear()

    let monthVal = date.getMonth()
    const monthMap = {
        0: '01',
        1: '02',
        2: '03',
        3: '04',
        4: '05',
        5: '06',
        6: '07',
        7: '08',
        8: '09',
        9: '10',
        10: '11',
        11: '12'
    }
    const month = monthMap[monthVal]

    let today = date.getDate().toString();
    if(parseInt(today) < 10) today = '0' + today;

    let yesterday = (date.getDate() - 1).toString();
    if(parseInt(today) < 10) today = '0' + today;

    let localtime = date.toLocaleTimeString('en-US', { hour12: false });

    startDate = `${year}-${month}-${yesterday}%20${localtime}`
    endDate = `${year}-${month}-${today}%20${localtime}`

    return [startDate, endDate]
}

async function getDataFromTimeDate(): Promise<Feature[]> {
    const url = URL_24_HOUR_EQ_LIST.replace('$startDate$', startDate).replace('$endDate$', endDate);
    return await makeGetRequest(url);
}

async function makeGetRequest(url : string) : Promise<Feature[]>  {
    return await fetch(url)
        .then(function(response) {
            return response.json();
        }).then((data) => {
            return data.features
        });
}

function setDate(date: string[]) {
    [startDate, endDate] = date;
}

export {getDataFromTimeDate, setDate, getLast24HoursFromNow}