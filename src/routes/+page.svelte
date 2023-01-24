<button on:click={incrementCount}>HEloo</button>
<p>{count} is {doubled}</p>
<h1 class="text-3xl color-blue-500">HEloo</h1>

<script>
    let count = 0;
    $: doubled = count * 2;
    function incrementCount() {
        count += 1;
    }
</script>