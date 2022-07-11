<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import McOption from "./MCOption.svelte";

  const dispatch = createEventDispatcher<{reset:{}}>();

  export let sentence: string;
  export let options: string[][];
  export let answers: string[];
  export let state: string;
  
  let selected='';
  function handleSelected(e:CustomEvent<{index:string}>) {
    selected = e.detail.index
  }

  $: if (state === 'new') {
    selected = '';
    dispatch('reset', {});
  }
</script>

<div class='container'>
  <h2>{sentence}</h2>
  <ul>
    {#each options as option}
      <McOption
        index={option[0]}
        text={option[1]}
        selected={selected===option[0]}
        on:selected={handleSelected}
      ></McOption>
    {/each}
  </ul>
  {#if state==='answered'}
    <div class='container'>
      <h3>{answers.length > 1? 'Posibles respuestas': 'Posible respuesta'}</h3>
      <div style='display:flex; gap:2rem; '>
        {#if answers.length > 0}
          {#each answers as answer}
            <span>{answer}</span>
          {/each}
        {:else}
          <span>No disponible</span>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
  .container {
    padding: 1rem;
    background-color: hsla(var(--fc-primary-content), 2.5%);
    border-radius: 1rem;
    max-width: 960px;
  }
  ul {
    list-style: none;
  }
</style>
