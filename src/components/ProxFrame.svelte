<script>
    import { page } from '$app/stores';
    import { onMount, onDestroy } from 'svelte';
    /**
    * @type {String}
    */
    export let url;
    /**
     * @type {any}
     */
     export let icon;
    export let search = "https://google.com/search?q=";
    /**
     * @type {string}
     */
     export let proxurl;
    //export let title;
    /**
     * @type {HTMLIFrameElement}
     */
    export let title;
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
        title = proxframe.contentDocument?.title || proxurl;
        if (proxframe.contentDocument?.head) {
      const icons =
        proxframe.contentDocument?.head.querySelectorAll(
          "link[rel='favicon'], link[rel='shortcut icon'], link[rel='icon']"
        );
      let ico;
      try {
        ico = new URL("/favicon.ico", proxurl).toString();
      } catch {}
      for (let i = icons.length - 1; i >= 0; i--) {
        if (Array.from(icons)?.at(i)?.href) {
          ico = Array.from(icons).at(i)?.href;
          break;
        }
      }

      if (ico && /^data:/.test(ico)) {
        icon = ico;
      } else if (ico) {
        icon = ico;
      }
    }
    }
    /**
     * @type {string | number | NodeJS.Timer | undefined}
     */
    let interval;
    onMount(() => {
        interval = setInterval(function() {
            setInfo();
        }, 100);
	  });
    onDestroy(() => {
		  clearInterval(interval);
	  });
</script>

<iframe bind:this={proxframe} src="{$page.url.origin}/~uv/{xor.encode(url)}" title="PiklProxy"></iframe>

<style lang="postcss">
    iframe {
        @apply w-full flex-1;
    }
</style>
