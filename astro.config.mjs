import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://msnai.netlify.app',
  output: 'static',
  adapter: netlify(),
  build: {
    assets: 'assets'
  }
});
