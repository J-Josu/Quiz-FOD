<script lang="ts">
  import { page } from "$app/stores";
  let pageUrl = $page.url.host + $page.url.pathname;
</script>

<svelte:head>
  <title>404 Not Found</title>
</svelte:head>

<section>
  <h1>No existe la pagina '{pageUrl}'</h1>
  <p>Puede regresar a la <a href="/">pagina principal</a></p>
</section>

<style>
  section {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  section > * {
    text-align: center;
  }
  h1 {
    max-width: 90vw;
    word-wrap: break-word;
  }
  a,
  a:any-link {
    position: relative;
    font-weight: bolder;
  }
  a::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0%;
    left: 50%;
    border-bottom: 2px solid var(--fc-accent);
    transition: width 0.5s ease, left 0.5s ease;
  }
  a:hover::before {
    width: 100%;
    left: 0.5px;
  }
</style>
