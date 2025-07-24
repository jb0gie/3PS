import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three', '@threlte/core', '@threlte/extras', 'radix-icons-svelte']
	},
	optimizeDeps: {
		exclude: [
			'pocketbase',
			'svelte-tweakpane-ui',
			'camera-controls',
			'three-viewport-gizmo',
			'three-mesh-bvh',
			'troika-three-text',
			'@threejs-kit/instanced-sprite-mesh',
			'mitt'
		]
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
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				manualChunks: {
					three: ['three'],
					threlte: ['@threlte/core', '@threlte/extras']
				},
				assetFileNames: 'assets/[name]-[hash][extname]'
			}
		}
	}
});
