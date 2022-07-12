import { writable } from "svelte/store";
import { limitedCounter } from "./limitedCountStore";
import { localStore } from "./localStore";


export const welcomePopUpOpen = localStore<boolean>('welcomePopUp', true);

export const preferredTheme = localStore<string>('preferredTheme', 'light-mode');

export const emojiCount = limitedCounter(35);
