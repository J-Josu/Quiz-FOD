<script lang="ts">
  import { welcomePopUpOpen } from "$stores/stores";
  import WelcomePopUp from "$components/WelcomePopUp.svelte";
  import MultipleChoice from "$components/MultipleChoice.svelte";
  import quizData from "$lib/data/extracted_multiple_choices.json";

  let waited = false;
  setTimeout(() => (waited = true), 500);

  let isPlaying = false;
</script>

<svelte:head>
  <title>Quiz FOD</title>
  <meta
    name="description"
    content="Una forma mas entretenida de estudiar y repasar que
    solo leer teoria y/o resumenes."
  />
</svelte:head>

{#if waited && $welcomePopUpOpen}
  <WelcomePopUp />
{/if}

<section>
  <h1>{isPlaying ? "Quiz Time" : "Si sabes, empeza"}</h1>

  {#if isPlaying}
    <MultipleChoice quizes={quizData} />
  {:else}
    <button on:click={() => (isPlaying = true)}>Comenzar</button>
  {/if}
</section>

{#if isPlaying}
  <button on:click={() => (isPlaying = false)} class="reset">Home</button>
{/if}
<button class="info" on:click={() => welcomePopUpOpen.set(!$welcomePopUpOpen)}
  >&#9432;</button
>

<style>
  section {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin-inline: auto;
    color: var(--fc-accent);
  }

  button {
    --color: var(--fc-tertiary);
    color: var(--color);
    background-color: transparent;
    font-size: 1.5rem;
    position: relative;
    margin: 2rem;
    padding: 1rem 2rem;
    border: 3px solid var(--color);
    transition: all 0.3s ease;
    border-radius: 6px;
  }
  button::before {
    --delta: 3px;
    border-radius: 6px;
    content: "";
    position: absolute;
    width: calc(100% + calc(var(--delta)*2));
    height: calc(100% + calc(var(--delta)*2));
    left: calc(var(--delta)*-1);
    bottom: calc(var(--delta)*-1);
    z-index: -1;
    border: var(--delta) solid var(--color);
    opacity: 0.5;
    transition: all 0.3s ease;
  }
  button:hover {
    --color: var(--fc-primary);
    transform: translate(5px, -5px);
  }
  button:hover::before {
    opacity: 0.25;
    transform: translate(-10px, 10px);
  }

  .reset {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 1.5rem;
  }

  .info {
    width: fit-content;
    height: fit-content;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 0.5rem;
    padding: 0.5rem;
    font-weight: bolder;
    border-radius: 100%;
    font-size: 1.5rem;
    border: none;
    opacity: 0.5;
    transition: all 0.3s ease;
  }
  .info::before {
    content: none;
  }
  .info:hover {
    opacity: 1;
    transform: none;
    background-color: hsla(var(--fc-primary-content), 0.05);
    box-shadow: 0px 0px 1rem 1rem hsl(var(--fc-primary-content), 0.05);
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
    .reset {
      margin: 1rem;
    }
    .info {
      content: none;
      margin: calc(0.5rem*0.75);
      padding: calc(0.5rem*0.75);
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
    .reset {
      margin: 0.5rem;
    }
    .info {
      margin: calc(0.5rem*0.5);
      padding: calc(0.5rem*0.5);
    }
  }
  /* @media screen and (max-width: 688px) {
    button {
      margin: 0.5rem;
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
    }
    .reset {
      margin: 0.25rem;
    }
    .info {
      margin: calc(0.5rem*0.25);
      padding: calc(0.5rem*0.25);
    }
  } */
</style>
