<script>
    import { page } from '$app/stores';
    /**
    * @type {String}
    */
    export let url;
    export let search = "https://google.com/search?q=";
    export let proxurl;
    //export let title;
    /**
     * @type {HTMLIFrameElement}
     */
    let proxframe;
    const xor = {
        /**
         * @param {string} str
         */
        encode(str) {
            if (!str) return str;
            return encodeURIComponent(
                str
                    .toString()
                    .split('')
                    .map((char, ind) =>
                        ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char
                    )
                    .join('')
            );
        },
        /**
         * @param {{ split: (arg0: string) => [any, ...any[]]; }} str
         */
        decode(str) {
            if (!str) return str;
            let [input, ...search] = str.split('?');

            return (
                decodeURIComponent(input)
                    .split('')
                    .map((char, ind) =>
                        ind % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char
                    )
                    .join('') + (search.length ? '?' + search.join('?') : '')
            );
        },
    };
    function isUrl(val = '') {
            if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
            return false;
    }
    if (url) {
        if (!isUrl(url)) url = search + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) { url = 'http://' + url; };
    } else { url = new URL(search).origin }
    proxurl = url;
    function setInfo() {
        let contwin = proxframe.contentWindow;
        proxurl = xor.decode(contwin?.location.href.split('/~uv/').slice(1).join('/~uv/'));
        //if (contwin?.document.getElementsByTagName('title')[0].firstChild.textContent) {
        //    title = contwin?.document.getElementsByTagName('title')[0].firstChild.textContent;
        //}
    }
    /*function startInfoLoop() {
        (function(history){
            var pushState = history.pushState;
            history.pushState = function(state) {
            // YOUR CUSTOM HOOK / FUNCTION
            console.log('I am called from pushStateHook');
            return pushState.apply(history, arguments);
            };
        })(proxframe.contentWindow);
        console.log('INFO LOOP STARTED');
    }*/
</script>

<iframe bind:this={proxframe} src="{$page.url.origin}/~uv/{xor.encode(url)}" title="PiklProxy" on:load={setInfo}></iframe>

<style lang="postcss">
    iframe {
        @apply w-full flex-1;
    }
</style>
