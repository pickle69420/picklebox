<script>
    import '../../cdn/jam/jam.min.css';
    import ProxFrame from '../../../components/ProxFrame.svelte';
    
    /**
     * @type {HTMLInputElement}
     */
    let inputvalue;
    let submittedvalue;
    function handleSubmit(e) {
        if (e.keyCode == 13) { 
          submittedvalue = inputvalue;
        } 
    }
</script>

<h1 class="pikl-apptitle"><span class="jam jam-search"></span>Search</h1>

<input on:keyup={handleSubmit} bind:value={inputvalue}/>

{#if submittedvalue != null}
	<ProxFrame url={submittedvalue}/>
{/if}