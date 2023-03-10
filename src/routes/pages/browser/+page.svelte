<script>
    import '../../cdn/jam/jam.min.css';
    import BrowserTabContainer from '../../../components/BrowserTabContainer.svelte';

    let tabs = ['Google','Facebook','Incative','New Tab'];
    let selected_tab = 'TAB-0';
    function newTab() {
        tabs.push('New Tab');
    }
    /**
     * @param {number} index
     */
    function changeTab(index) {
        selected_tab = 'TAB-' + index;
    }
</script>

<div class="flex flex-col w-full h-full">
    <div class="browser-tabs">
        <div class="browser-tab-cont flex">
            {#each tabs as tab, index (tab)}
                <button id={'TAB-' + index}
                        class="browser-tab"
                        class:active="{'TAB-' + index === selected_tab}"
                        on:click={() => changeTab(index)}
                    >
                    {tab}
                </button>
            {/each}
        </div>
        <button class="newtabbtn jam jam-plus" on:click={newTab}></button>
    </div>
    {#each tabs as tab, index (tab)}
            <BrowserTabContainer active={'TAB-' + index === selected_tab}/>
    {/each}
</div>

<style lang="postcss">
    .browser-tabs {
        @apply flex bg-slate-900 rounded-t;
    }
    .browser-tab {
        @apply py-0.5 px-1 bg-transparent rounded-t border-x-[1px] border-t-[1px] border-transparent mx-1 mt-0.5;
    }
    .browser-tab.active {
        @apply bg-gray-800 border-gray-700;
    }
</style>