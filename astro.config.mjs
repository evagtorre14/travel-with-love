// @ts-check
import { defineConfig, sharpImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
	site: 'https://evagtorre14.io',
	base: '/travel-with-love',
	integrations: [mdx(), sitemap(), tailwind(), icon(), compressor()],
	image: {
		service: sharpImageService(),
	},
});
