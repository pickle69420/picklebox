<script>
    import ProxFrame from './ProxFrame.svelte';
    export let active = false;
    /**
     * @type {any}
     */
    let newURL;
    /**
     * @type {HTMLInputElement}
     */
     let inputvalue;
    /**
     * @type {any}
     */
    let submittedvalue;
    /**
     * @param {{ keyCode: number; }} e
     */

    function handleURLSubmit(e) {
        if (e.keyCode == 13) { 
          submittedvalue = inputvalue;
        } 
    }
</script>

<div class={active == true ? '' : 'binactive'}>
    <div class='flex border-b-[1px] border-b-green-800 pb-3 pt-1'>
        <button class="browsertab-btn jam jam-arrow-left"></button>
        <button class="browsertab-btn jam jam-arrow-right"></button>
        <button class="browsertab-btn jam jam-refresh"></button>
        <div class='browsertab-inputcontainer'>
            <button class="browsertab-btn jam jam-database"></button>
            <input class='browsertab-input' on:keyup={handleURLSubmit} bind:value={inputvalue}/>
            <button class="browsertab-btn jam jam-star"></button>
        </div>
        <button class="browsertab-btn jam jam-more-horizontal"></button>
    </div>
    {#if submittedvalue != null}
	    <ProxFrame url={submittedvalue} bind:proxurl={inputvalue}/>
    {/if}
</div>

<style lang="postcss">
    .browsertab-inputcontainer {
        @apply bg-gray-900 w-full rounded-md hover:border-gray-700 border-[1px] border-transparent py-0.5 px-1 text-sm flex flex-1 transition-all mx-1;
    }
    .browsertab-input {
        @apply bg-inherit focus-visible:!outline-none flex-1;
    }
    .browsertab-btn {
        @apply hover:bg-green-900 transition-all py-0.5 px-2 rounded-sm mx-0.5 text-green-600;
    }
    .binactive {
        @apply hidden;
    }
</style>