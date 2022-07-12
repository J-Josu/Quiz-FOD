import { writable } from "svelte/store";
import { limitedCounterStore } from "./limitedCounterStore";
import { localStore } from "./localStore";


export const welcomePopUpOpen = localStore<boolean>('welcomePopUp', true);

export const preferredTheme = localStore<string>('preferredTheme', 'light-mode');

export const emojiCount = limitedCounterStore(35);
