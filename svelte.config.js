import adapter from '@sveltejs/adapter-auto';
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