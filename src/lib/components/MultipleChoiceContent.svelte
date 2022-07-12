<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition"
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
  <h3>{sentence}</h3>
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
    <div class='container' in:slide>
      <h4>{answers.length > 1? 'Posibles respuestas': 'Posible respuesta'}</h4>
      <p style='display:flex; gap:2rem; '>
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
