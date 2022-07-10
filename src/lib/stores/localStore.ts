import { writable } from "svelte/store";
import { browser } from "$app/env";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export const localStore = (key: string, initial: JsonValue) => {
  const toString = (value: JsonValue) => JSON.stringify(value, null, 2);
  const toObj = JSON.parse;

  if (browser && localStorage.getItem(key) === null) {
    localStorage.setItem(key, toString(initial));
  }

  const saved = browser? toObj(localStorage.getItem(key)) : initial;

  const { subscribe, set, update } = writable(saved);

  return {
    subscribe,
    set: (value: JsonValue) => {
      localStorage.setItem(key, toString(value));
      return set(value);
    },
    update,
  };
};