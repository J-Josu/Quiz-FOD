<script lang="ts">
  import { onMount } from "svelte";
  import { emojiCount, choiceSample } from "$lib/stores/stores";
  import ChoiceContent from "./ChoiceContent.svelte";

  $: choice = $choiceSample;
  let choiceCount = 0;
  let selected = "";
  let showAnswers = false;
  let answered = false;

  const newChoice = () => {
    selected = "";
    showAnswers = false;
    answered = false;
    choiceSample.nextChoice();
    choiceCount++;
  };

  const lastChoice = () => {
    selected = "";
    showAnswers = false;
    answered = false;
    choiceSample.previousChoice();
    choiceCount--;
  };

  const validateAnswer = () => {
    if (answered) return;
    answered = true;
    showAnswers = true;
    if (selected == "" || choice.options.length === 0) {
      $emojiCount = $emojiCount;
      return;
    }
    const possibleAnswers = choice.answers.map((answer) =>
      answer.toLocaleLowerCase()
    );
    const existAnswers = possibleAnswers
      .map((answer) => {
        const optionIndex = choice.options.findIndex(
          (option) =>
            option.filter((value) => value.toLowerCase() === answer).length > 0
        );
        return optionIndex;
      })
      .filter((index) => index != -1);
    if (existAnswers.length === 0) {
      $emojiCount = $emojiCount;
      return;
    }
    const userAnswerIndex = choice.options.findIndex(
      (option) => option[0].toLowerCase() === selected.toLowerCase()
    );
    if (existAnswers.findIndex((index) => index === userAnswerIndex) === -1) {
      emojiCount.reset();
      return;
    }
    $emojiCount += 1;
  };

  onMount(() => choiceSample.nextChoice());
</script>

<ChoiceContent {...choice} bind:selected {showAnswers} />
<div style="display:flex">
  <button on:click={lastChoice} disabled={choiceCount === 0}>Anterior</button>
  <button on:click={validateAnswer}>Ver respuesta</button>
  <button on:click={newChoice}>Nueva</button>
</div>

<style>
  button {
    border: none;
    color: var(--fc-tertiary);
    text-decoration: none;
    background-color: transparent;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    position: relative;
    margin: 32px;
    border: 3px solid;
    border-color: var(--fc-tertiary);
    border-radius: 6px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
  }
  button:hover {
    color: var(--fc-primary);
    border-color: var(--fc-primary);
    box-shadow: 1px 1px 25px 10px hsla(var(--fc-primary-content), 0.1);
  }
  button:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -100%;
    width: 20%;
    height: 200%;
    transform: skew(-45deg);
    background: linear-gradient(120deg, transparent, rgb(255, 255, 255));
  }
  button:hover:before {
    animation: swipe 2.5s ease infinite;
    left: 100%;
  }
  @keyframes swipe {
    0% {
      left: -100%;
    }
    40% {
      left: 150%;
    }
    100% {
      left: 150%;
    }
  }
  @media screen and (max-width: 1312px) {
    button {
      margin: 1.5rem;
      padding: 0.75rem 1.5rem;
      font-size: 1.25rem;
      border-width: 2px;
    }
    button::before {
      --delta: 2px;
    }
  }
  @media screen and (max-width: 992px) {
    button {
      margin: 1rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border-width: 1px;
    }
    button::before {
      --delta: 1px;
    }
  }
  @media screen and (max-width: 688px) {
    button {
      margin: 0.5rem 0.25rem;
    }
  }
  button:disabled:hover {
    box-shadow: none;
    cursor: not-allowed;
  }
  button:disabled::after,
  button:disabled::before {
    content: none;
  }
</style>
