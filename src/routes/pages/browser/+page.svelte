<script>
    import '../../cdn/jam/jam.min.css';
    import BrowserTabContainer from '../../../components/BrowserTabContainer.svelte';

    let tabs = [{name: 'New Tab', id: 0}];
    let selected_tab = 'TAB-0';
    function newTab() {
        var newtabid = tabs.length
        tabs.push({name: 'New Tab', id: newtabid});
        selected_tab = 'TAB-'+newtabid;
        tabs = tabs;
    }
    /**
     * @param {number} index
     */
    function changeTab(index) {
        selected_tab = 'TAB-' + index;
    }
    /**
     * @param {number} index
     */
    function removeTab(index) {
        var newindex = index-1;
        var newarray = tabs.filter(tab => tab.id !== index);
        for(var i = 0; i < newarray.length; i++) {
            newarray[i].id = i;
        }
        selected_tab = selected_tab == 'TAB-' + index ? 'TAB-' + newindex : selected_tab;
        tabs = newarray;
    }
</script>

<div class="flex flex-col w-full h-full">
    <div class="browser-tabs">
        <div class="browser-tab-cont flex">
            {#each tabs as tab, index (tab.id)}
                <button id={'TAB-' + index}
                        class="browser-tab"
                        class:active="{'TAB-' + index === selected_tab}"
                        on:click={() => changeTab(index)}
                    >
                    <span>{tab.name}</span>
                    <button class="closetabbtn jam jam-close" on:click={() => removeTab(index)} disabled="{tabs.length <= 1}"></button>
                </button>
            {/each}
        </div>
        <button class="newtabbtn jam jam-plus" on:click={newTab}></button>
    </div>
    {#each tabs as tab, index (tab)}
        <BrowserTabContainer active={'TAB-' + index === selected_tab} bind:title={tab.name}/>
    {/each}
</div>

<style lang="postcss">
    .browser-tabs {
        @apply flex bg-slate-900 rounded-t border-b-[1px] border-gray-700 px-1;
    }
    .browser-tab {
        @apply py-0.5 px-1 bg-transparent rounded-t-sm border-x-[1px] border-t-[1px] border-transparent mt-0.5 translate-y-[1px];
        will-change: transform;
    }
    .browser-tab:not(.active) {
        @apply transition-all;
    }
    .browser-tab:not(.active):hover {
        @apply before:hidden transition-all bg-gray-800 bg-opacity-50;
    }
    .browser-tab:not(.active):hover + .browser-tab {
        @apply before:hidden transition-all;
    }
    .browser-tab::before {
        @apply absolute top-[50%] translate-x-0 translate-y-[-50%] left-0 content-[''] block bg-gray-700 w-[1px] h-4;
        @apply translate-x-[-2px];
    }
    .browser-tab#TAB-0::before {
        @apply hidden;
    }
    .browser-tab> span {
        @apply my-auto text-sm p-0;
        line-height: 100%;
    }
    .browser-tab.active::before {
        @apply hidden;
    }
    .browser-tab.active {
        @apply bg-gray-800 border-gray-700;
    }
    .newtabbtn {
        @apply text-[20px] transition-transform;
    }
    .closetabbtn {
        @apply my-auto text-[16px];
    }
</style>