import { writable } from "svelte/store";
import { localStore } from "./localStore";


export const welcomePopUpOpen = localStore<boolean>('welcomePopUp', true);
