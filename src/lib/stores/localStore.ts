import { writable } from "svelte/store";
import { browser } from "$app/env";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export const localStore = <T>(key: string, initial: T) => {
  const toString = (value: T) => JSON.stringify(value, null, 2);
  const toObj = JSON.parse;

  let startValue = initial;
  if (browser) {
    let savedValue = localStorage.getItem(key);
    if (savedValue === null) {
      localStorage.setItem(key, toString(initial));
      startValue = initial;
    }
    else {
      startValue = toObj(savedValue);
    }
  }

  const { subscribe, set, update } = writable<T>(startValue);

  return {
    subscribe,
    set: (value: T) => {
      browser && localStorage.setItem(key, toString(value));
      return set(value);
    },
    update,
  };
};