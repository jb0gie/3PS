import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three', '@threlte/core', '@threlte/extras', 'radix-icons-svelte']
	},
	optimizeDeps: {
		exclude: ['@threlte/core', '@threlte/extras'],
		include: ['three', '@theatre/core']
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
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		},
		rollupOptions: {
			output: {
				manualChunks: {
					three: ['three'],
					threlte: ['@threlte/core', '@threlte/extras'],
					theatre: ['@theatre/core', '@theatre/studio'],
					physics: ['@threlte/rapier', '@dimforge/rapier3d-compat'],
					xr: ['@threlte/xr'],
					flex: ['@threlte/flex'],
					vendor: ['pocketbase', 'embla-carousel-svelte', 'embla-carousel-autoplay']
				},
				assetFileNames: 'assets/[name]-[hash][extname]',
				chunkFileNames: 'chunks/[name]-[hash].js',
				entryFileNames: 'entries/[name]-[hash].js'
			}
		},
		cssCodeSplit: true,
		cssMinify: true,
		reportCompressedSize: false
	},
	publicDir: 'static'
});
