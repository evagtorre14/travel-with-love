// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://evagtorre14.io',
	base: '/travel-with-love',
	integrations: [mdx(), sitemap(), tailwind()],
});
