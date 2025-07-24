import { browser } from '$app/environment'
import { createAppKit } from '@reown/appkit'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { polygon } from '@reown/appkit/networks'

// Only initialize in browser environment
let appKit: ReturnType<typeof createAppKit> | undefined = undefined

if (browser) {
	const projectId = import.meta.env.VITE_REOWN_PROJECT_ID;
	if (!projectId) {
		throw new Error('VITE_REOWN_PROJECT_ID is not set in environment variables')
	}

	const networks = [polygon]

	// Create adapter
	const wagmiAdapter = new WagmiAdapter({
		networks,
		projectId
	})

	// Initialize AppKit
	appKit = createAppKit({
		adapters: [wagmiAdapter],
		networks: [polygon],
		defaultNetwork: polygon,
		projectId,
		metadata: {
			name: 'Third Planet Studio',
			description: 'All Access Pass Minting',
			url: browser ? window.location.origin : 'https://thirdplanetstudio.com', // Dynamic URL for localhost
			icons: ['https://i.imgur.com/TQKSRsd.png']
		}
	})
}

export { appKit } 