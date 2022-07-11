<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { preferredTheme } from "$stores/stores";

  const toggleTheme = () => {
    window.document.body.classList.toggle("dark-mode");
    preferredTheme.set(
      $preferredTheme === "dark-mode" ? "light-mode" : "dark-mode"
    );
  };

  onMount(() => {
    if ($preferredTheme === "dark-mode") {
      document.body.classList.add("dark-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  });
</script>

<svelte:head>
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
  <script>
    if (document) {
      let mode = localStorage.getItem("preferredTheme");
      if (mode === '"dark-mode"')
        document.documentElement.classList.add("dark-mode");
      else if (mode === null)
        localStorage.setItem(
          "preferredTheme",
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? '"dark-mode"'
            : '"light-mode"'
        );
    }
  </script>
</svelte:head>

<main>
  <slot />
</main>

<footer><button on:click={toggleTheme}>Cambiar Tema</button></footer>

<style>
  main {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }

  footer {
    display: flex;
    flex: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: clamp(0.5rem, 2vw, 2rem);
  }
  footer button {
    opacity: 0.75;
    color: var(--fc-primary);
    border: none;
    border-radius: 6px;
    transition: all 0.5s ease;
    position: relative;
    font-weight: bolder;
    padding: 0;
  }
  footer button::before {
    opacity: 1;
    content: "";
    position: absolute;
    bottom: 0;
    width: 0%;
    left: 50%;
    border-bottom: 2px solid var(--fc-primary);
    transition: width 0.5s ease, left 0.5s ease;
  }
  footer button:hover {
    opacity: 1;
  }
  footer button:hover::before {
    width: 100%;
    left: 0.5px;
  }
</style>
