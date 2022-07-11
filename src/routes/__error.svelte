<script lang="ts">
  import { page } from "$app/stores";
  let pageUrl = $page.url.host + $page.url.pathname;
</script>

<svelte:head>
  <title>404 Not Found</title>
</svelte:head>

<div>
  <h1>No existe la pagina '{pageUrl}'</h1>
  <footer>Puede regresar a la <a href="/">pagina principal</a></footer>
</div>

<style>
  div {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  div > * {
    text-align: center;
    max-width: 90vw;
  }
  a,
  a:any-link {
    text-decoration: underline;
    font-weight: 900;
    color: inherit;
  }
</style>
