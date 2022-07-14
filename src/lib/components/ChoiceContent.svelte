<script lang="ts">
  import { fly, slide } from "svelte/transition";
  import ChoiceOption from "./ChoiceOption.svelte";

  export let sentence: string;
  export let options: string[][];
  export let answers: string[];
  export let selected = "";
  export let showAnswers = false;

  function handleSelected(e: CustomEvent<{ index: string }>) {
    selected = e.detail.index;
  }

  $: if (!showAnswers) selected = "";
</script>

<div style="overflow-x:hidden;">
{#key sentence}
  <div in:fly={{ x: 100 }} class="container">
    <h3>{sentence}</h3>
    <ul>
    {#each options as option}
      <ChoiceOption
        index={option[0]}
        text={option[1]}
        selected={selected === option[0]}
        on:selected={handleSelected}
      />
    {/each}
    </ul>
    {#if showAnswers}
    <div class="container" in:slide>
      <h4>
        {answers.length > 1 ? "Posibles respuestas" : "Posible respuesta"}
      </h4>
      <p style="display:flex; gap:2rem; ">
      {#if answers.length > 0}
        {#each answers as answer}
          <span>{answer}</span>
        {/each}
      {:else}
        <span>No disponible</span>
      {/if}
      </p>
    </div>
    {/if}
  </div>
{/key}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    background-color: hsla(var(--fc-primary-content), 2.5%);
    border-radius: 1rem;
    max-width: 960px;
  }

  h4 {
    display: block;
  }

  ul {
    list-style: none;
    margin-top: 0;
  }

  p {
    margin-top: 0;
  }
</style>
