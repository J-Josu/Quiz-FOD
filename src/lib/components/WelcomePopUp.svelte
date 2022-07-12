<script lang="ts">
  import { fade } from "svelte/transition";
  import { welcomePopUpOpen } from "$stores/stores";
</script>

<div class="container" transition:fade>
  <div class="content">
    <h1>Advertencia</h1>
    <p>
      Usted utiliza esta pagina bajo su propia voluntad,<br />
      el creador no se hace responsable por que la informacion en los quiz este equivocada.
    </p>
    <footer style:color="#000">Y obviamente dono mi ALMA</footer>
    <button on:click={() => ($welcomePopUpOpen = false)}
      >Acepto los Terminos<br />y<br />Condiciones</button
    >
  </div>
</div>

<style>
  .container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsla(0, 0%, 0%, 75%);
    color: hsl(0, 0%, 90%);
  }

  .content {
    --alpha: 95%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    background-color: hsla(0, 0%, 0%, var(--alpha));
    border: 2px solid hsl;
    border-radius: 1rem;
    padding: 2rem;
    transition: box-shadow 1s ease;
  }
  .content:hover {
    --alpha: 99.5%;
    box-shadow: 1px 1px 2rem 1rem hsla(0, 0%, 0%, var(--alpha));
  }

  p {
    text-align: center;
  }
  button {
    --light: 70%;
    border: none;
    color: hsl(0, 0%, var(--light));
    text-decoration: none;
    background-color: transparent;
    padding: 1rem 2rem;
    font-size: 1.25rem;
    position: relative;
    margin: 32px;
    border: 3px solid;
    border-color: hsl(0, 0%, var(--light));
    transition: transform 0.3s ease;
    border-radius: 6px;
    cursor: pointer;
  }
  button::before {
    border-radius: 6px;
    content: "";
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
  button:hover::before {
    --light: 50%;
    transform: translate(-10px, 10px);
  }
</style>
