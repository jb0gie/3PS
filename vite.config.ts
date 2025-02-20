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
		target: 'esnext',
		sourcemap: true,
		rollupOptions: {
			output: {
				manualChunks: {
					three: ['three'],
					threlte: ['@threlte/core', '@threlte/extras']
				},
				assetFileNames: 'assets/[name][extname]'
			}
		}
	},
	publicDir: 'static'
});
