import { writable } from "svelte/store";
// import { localStorageStore } from "$lib/stores/localStorageStore";
import { localStore } from "$lib/stores/localStore";


// export const welcomePopUpOpen = writable<boolean>(true);
export const welcomePopUpOpen = localStore('welcomePopUp', true);

