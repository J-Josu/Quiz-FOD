<script lang="ts">
  import MultipleChoice from '$lib/MultipleChoice.svelte';
  import quizData from '$lib/data/extracted_multiple_choices.json';

  let isPlaying = false;
</script>

<svelte:head>
  <title>Quiz FOD</title>
</svelte:head>

<div>
  <h1>{isPlaying? 'Quiz Time':'Si sabes, empeza'}</h1>
  
  {#if isPlaying}
    <MultipleChoice quizes={quizData}></MultipleChoice>
  {:else}
    <button on:click={() => isPlaying=true}>Comenzar</button>
  {/if}
</div>

{#if isPlaying}
  <button on:click={() => isPlaying=false} class='reset'>Reset</button>
{/if}


<style>
  h1 {
    width: fit-content;
    background-color: none;
    margin-inline: auto;
    color: white;
  }
  div {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
  button{
    --light: 70%;
    border: none;
    color: hsl(0, 0%, var(--light));
    text-decoration: none;
    background-color: transparent;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    position: relative;
    margin: 32px;
    border: 3px solid;
    border-color: hsl(0, 0%, var(--light));
    transition: transform 0.3s ease;
    border-radius: 6px;
  }
  .reset {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  button::before{
    border-radius: 6px;
    content: '';
    position: absolute;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    left: -3px;
    bottom: -3px;
    z-index: -1;
    border: 3px solid hsla(0, 0%, 90%, 50%);
    transition: transform 0.3s ease;
  }
  button:hover {
    --light: 90%;
    transform: translate(5px, -5px);
  }
  button:hover::before{
    --light: 50%;
    transform: translate(-10px, 10px);
  }
</style>