import { writable} from 'svelte/store';
import type {Writable} from 'svelte/store';

const EQ_DATA_24_HOURS: Writable<any[]> = writable(undefined);
const CURRENT_MAP_TYPE: Writable<string> = writable("1")
const START_END_DATE: Writable<string[]> = writable([]);

export {EQ_DATA_24_HOURS, CURRENT_MAP_TYPE, START_END_DATE};
