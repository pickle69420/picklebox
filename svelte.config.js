import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
	serviceWorker: {
		register: false
	}
  },
  preprocess: vitePreprocess()
};
export default config;