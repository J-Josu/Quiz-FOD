<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<{selected:{index:string}}>();

  export let index: string;
  export let text: string;
  export let selected= false;
  // export let update:any;

  function handleClick() {
    // update(index);
    dispatch('selected',{index})
  }

  $: styledText = text[0].toUpperCase() + text.slice(1)
</script>

<div class:selected on:click={handleClick}>
  <span>{index.toLocaleUpperCase()}.&nbsp;</span>
  <span>{styledText}</span>
</div>

<style>
  div {
    display: flex;
    padding: 4px 8px;
  }
  div:hover {
    cursor: pointer;
    background-color: hsla(0, 0%, 90%, 40%);
  }
  .selected {
    background-color: hsla(0, 0%, 90%, 20%);
  }
</style>