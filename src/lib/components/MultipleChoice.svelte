<script lang="ts">
  type MultipleChoice = {
    sentence: string;
    options: string[][];
    answers: string[];
  };
  import MultipleChoiceContent from "./MultipleChoiceContent.svelte";

  export let quizes: MultipleChoice[];

  let choice: MultipleChoice;
  let state: "new" | "answered" | "" = "";
  function newChoice() {
    state = "new";
    choice = quizes[Math.floor(Math.random() * quizes.length)];
  }

  function submitAnswer() {
    state = "answered";
  }

  newChoice();
</script>

<MultipleChoiceContent
  sentence={choice.sentence}
  options={choice.options}
  answers={choice.answers}
  {state}
  on:reset={(e) => (state = "")}
/>
<div>
  <button on:click={submitAnswer}>Ver respuesta</button>
  <button on:click={() => newChoice()}>Nueva</button>
</div>

<style>
  /* div {
    display: flex;
  } */
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
      /* padding: 0.25rem 0.5rem;
      font-size: 0.75rem; */
    }
  }
</style>
