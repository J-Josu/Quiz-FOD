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

<div>
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
    <div>
      <h3>{answers.length > 1? 'Posibles respuestas': 'Posible respuesta'}</h3>
      {#each answers as answer}
        <span>{answer}</span>
      {/each}
    </div>
  {/if}
</div>

<style>
  div {
    padding: 1rem;
    background-color: hsla(0, 1%, 10%, 10%);
    border-radius: 1rem;
    max-width: 960px;
  }
  ul {
    list-style: none;
  }
</style>
