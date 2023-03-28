<script>
    import ProxFrame from './ProxFrame.svelte';
    export let active = false;
    /**
     * @type {any}
     */
     export let title;
    /**
     * @type {any}
     */
    let newURL;
    /**
     * @type {HTMLInputElement}
     */
     let inputvalue;
     /**
     * @type {HTMLInputElement}
     */
     let newtabinputvalue;
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
    /**
     * @param {{ keyCode: number; }} e
     */
    function handleNewTabSubmit(e) {
        if (e.keyCode == 13) { 
          submittedvalue = newtabinputvalue;
        } 
    }
</script>

<div class={active == true ? 'flex flex-col w-full h-full' : 'binactive flex flex-col w-full h-full'}>
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
    {#if submittedvalue == null}
	    <div class="newtab-cont">
            <img class="newtab-logo" src="/img/pickle.svg">
            <div class='newtab-inputcontainer'>
                <input class='newtab-input' on:keyup={handleNewTabSubmit} bind:value={newtabinputvalue}/>
            </div>
            <div class="newtab-pins">
                <div class="newtab-pin"><img class="pin-logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"><p class="pin-text">Google</p></div>
                <div class="newtab-pin"><img class="pin-logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"><p class="pin-text">Google</p></div>
                <div class="newtab-pin"><img class="pin-logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"><p class="pin-text">Google</p></div>
                <div class="newtab-pin"><img class="pin-logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"><p class="pin-text">Google</p></div>
                <div class="newtab-pin"><img class="pin-logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"><p class="pin-text">Google</p></div>
                <div class="newtab-pin"><img class="pin-logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"><p class="pin-text">Google</p></div>
                <div class="newtab-pin"><img class="pin-logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"><p class="pin-text">Google</p></div>
                <div class="newtab-pin"><img class="pin-logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"><p class="pin-text">Google</p></div>
            </div>
        </div>
    {:else}
        <ProxFrame url={submittedvalue} bind:proxurl={inputvalue} bind:title />
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
        @apply hover:bg-green-900 transition-all py-0.5 px-2 rounded-sm mx-0.5 text-green-600 ;
    }
    .binactive {
        @apply hidden;
    }
    .newtab-inputcontainer {
        @apply bg-inherit my-2 bg-gray-900 w-[60%] flex p-2 rounded-lg;
    }
    .newtab-input {
        @apply bg-inherit focus-visible:!outline-none flex-1;
    }
    .newtab-cont {
        @apply flex items-center justify-center flex-col w-full flex-1;
    }
    .newtab-logo {
        @apply w-32 h-32 my-2;
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
    .newtab-pins {
        @apply flex my-2;
    }
    .newtab-pin {
        @apply justify-center border-2 rounded-md mx-1 flex flex-col p-1 bg-green-900 border-green-600 bg-opacity-30 p-2;
    }
    .pin-logo {
        @apply w-8 h-8 mx-auto;
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
    .pin-text {
        @apply text-sm mx-auto;
    }
</style>