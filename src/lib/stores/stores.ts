import { writable } from "svelte/store";
import { limitedCounterStore } from "./limitedCounterStore";
import { localStore } from "./localStore";
import quizData from "$lib/data/extracted_multiple_choices.json";


export const welcomePopUpOpen = localStore<boolean>('welcomePopUp', true);

export const preferredTheme = localStore<string>('preferredTheme', 'light-mode');

export const emojiCount = limitedCounterStore(32);


type MultipleChoice = {
  sentence: string;
  options: string[][];
  answers: string[];
};

const shuffledChoicesData = [...quizData].sort(() => Math.random() - 0.5);

const createChoiceStore = () => {
  const { set, subscribe } = writable<MultipleChoice>(shuffledChoicesData[0]);
  let choiceIndex = 0;

  const nextChoice = () => {
    choiceIndex += 1;
    if (choiceIndex === shuffledChoicesData.length) choiceIndex = 0;
    set(shuffledChoicesData[choiceIndex]);
  }

  return {
    subscribe,
    nextChoice
  }
}

export const choiceSample = createChoiceStore();
