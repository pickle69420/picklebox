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

<div>
    <div class="browser-tabs">
        <div class="browser-tab-cont flex">
            {#each tabs as tab, index (tab.id)}
                <button id={'TAB-' + index}
                        class="browser-tab"
                        class:active="{'TAB-' + index === selected_tab}"
                        on:click={() => changeTab(index)}
                    >
                    {tab.name}
                    <button class="newtabbtn jam jam-close" on:click={() => removeTab(index)} disabled="{tabs.length <= 1}"></button>
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
        @apply py-0.5 px-1 bg-transparent rounded-t border-x-[1px] border-t-[1px] border-transparent mx-1 mt-0.5 translate-y-[0.5px];
    }
    .browser-tab.active {
        @apply bg-gray-800 border-gray-700;
    }
</style>