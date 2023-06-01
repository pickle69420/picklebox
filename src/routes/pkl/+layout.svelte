<script>
  import "../../app.css";
  import { onMount } from 'svelte';
  onMount(async () => {
    await import('../../serviceworker/regSW');
  });
</script>

<slot />