<script>
    import '../../cdn/jam/jam.min.css';
    import { onMount } from 'svelte';
    onMount(async () => {
        if ("serviceWorker" in navigator) {
          const registrations = await navigator.serviceWorker.getRegistrations();
          if (registrations.length <= 0) {
            if ("serviceWorker" in navigator) {
              navigator.serviceWorker
                .register("/sw.js", {
                  scope: "/~uv/"
                })
                .then(() => {
                  location.reload();
                });
            }
          } else {
            if ("serviceWorker" in navigator) {
              navigator.serviceWorker.register("/sw.js", {
                scope: "/~uv/"
              });
            }
          }
        }
    });
</script>

<h1 class="pikl-apptitle"><span class="jam jam-home"></span>Home</h1>
