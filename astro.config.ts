import {defineConfig} from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	output: 'hybrid',
	experimental: {
		actions: true,
	},
	integrations: [tailwind()],
});
