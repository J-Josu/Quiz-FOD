<script lang="ts">
  import { welcomePopUpOpen } from "$stores/stores";
  import WelcomePopUp from "$components/WelcomePopUp.svelte";

  let waited = false;
  setTimeout(() => (waited = true), 500);
</script>

<svelte:head>
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
</svelte:head>

{#if waited && $welcomePopUpOpen}
  <WelcomePopUp />
{/if}
<main>
  <slot />
</main>

<style>
  /* #cdb4db,
  #ffc8dd,
  #ffafcc,
  #bde0fe,
  #a2d2ff,
  #cdb4db,
  #ffc8dd */

  /* hsl(278, 35%, 75%),
  hsl(337, 100%, 75%),
  hsl(338, 100%, 75%),
  hsl(208, 97%, 75%),
  hsl(209, 100%, 75%),
  hsl(278, 35%, 75%),
  hsl(337, 100%, 75%) */

  /* hsl(278, 35%, 08%),
        hsl(337, 100%, 19%),
        hsl(338, 100%, 14%),
        hsl(208, 97%, 17%),
        hsl(209, 100%, 12%),
        hsl(278, 35%, 08%),
        hsl(337, 100%, 19%) */
  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
    200% {
      background-position: 200% 200%;
    }
  }
  :global(body) {
    --color-top: 0;
    --color-bottom: 25;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-image: repeating-linear-gradient(
      to bottom,
      hsl(278, 35%, 08%),
      hsl(337, 100%, 19%),
      hsl(338, 100%, 14%),
      hsl(208, 97%, 17%),
      hsl(209, 100%, 12%),
      hsl(278, 35%, 08%),
      hsl(337, 100%, 19%)
    );
    background-size: 700% 700%;
    animation: gradient 25s linear infinite reverse;
    display: grid;
    align-content: center;
    align-items: center;
    height: 100vh;
    justify-content: center;
    color: hsl(0, 0%, 90%);
    margin: 0;
  }
  :global(*, *::after, *::before) {
    box-sizing: border-box;
  }

  /* button{
    border: none;
    color: hsl(0, 0%, 70%);
    text-decoration: none;
    background-color: transparent;
    padding: 20px 50px;
    font-size: 1.25rem;
    position: relative;
    margin: 32px;
    border-color: 3px solid hsl(0, 0%, 70%);
    transition: transform 0.3s ease;
  }
  button::after, button::before{
    border: 3px solid;
    content: '';
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: transform 0.3s ease;
  }
  button:hover {
    color:hsl(0, 0%, 90%);
  }
  button::before{
    border: 3px solid hsla(0, 0%, 90%, 50%);
  }
  button:hover::after {
    transform: translate(5px, -5px);
  }
  button:hover::before{
    transform: translate(-5px, 5px);
  } */
</style>
