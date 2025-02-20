import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three', '@threlte/core', '@threlte/extras']
	},
	optimizeDeps: {
		exclude: ['@threlte/core', '@threlte/extras']
	},
	assetsInclude: ['**/*.glb', '**/*.jpg', '**/*.png', '**/*.gif'],
	server: {
		fs: {
			strict: false
		}
	},
	build: {
		rollupOptions: {
			output: {
				assetFileNames: 'assets/[name][extname]'
			}
		}
	},
	publicDir: 'static'
});
