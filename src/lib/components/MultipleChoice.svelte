<script lang="ts">
  type MultipleChoice = {
    sentence : string,
    options : string[][],
    answers : string[]
  }
  import MultipleChoiceContent from './MultipleChoiceContent.svelte';
  
  export let quizes : MultipleChoice[];

  let choice : MultipleChoice;
  let state: 'new'|'answered'|''='';
  function newChoice () {
    state = 'new';
    choice = quizes[Math.floor(Math.random()*quizes.length)];
  }
  
  function submitAnswer() {
    state = 'answered';
  }

  newChoice()
</script>

<MultipleChoiceContent
  sentence={choice.sentence}
  options={choice.options}
  answers={choice.answers}
  state={state}
  on:reset={e => state = ''}
></MultipleChoiceContent>
<div>
  <button on:click={submitAnswer}>Ver respuesta</button>
  <button on:click={() => newChoice()}>Nueva</button>
</div>

<style>
  button {
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
    border-radius: 6px;
    overflow: hidden;
  }
  button:hover{
    box-shadow:1px 1px 25px 10px rgba(255,255,255,.1);
  }
  button:before{
    content:'';
    position:absolute;
    top:-50%;
    left:-100%;
    width:20%;
    height:200%;
    transform: skew(-45deg);
    background:linear-gradient(120deg,transparent,rgba(255,255,255));
  }
  button:hover:before{
    animation: gradient 2.5s ease infinite;
    left:100%;
  }
  @keyframes gradient {
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
</style>