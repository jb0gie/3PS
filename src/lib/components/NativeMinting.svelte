<script lang="ts">
	import { appKit } from '$lib/appkit';
	import { mintAllAccessPass } from '$lib/minting';
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { onMount } from 'svelte';

	let isConnected = $state(false);
	let isMinting = $state(false);
	let mintingStatus = $state('');
	let walletAddress = $state('');
	let account = $state<any>(null);

	// Check connection status periodically
	$effect(() => {
		if (appKit) {
			checkConnection();
			// Check connection every 2 seconds
			const interval = setInterval(checkConnection, 2000);
			return () => clearInterval(interval);
		}
	});

	async function checkConnection() {
		if (appKit) {
			try {
				const connectedAccount = await appKit.getAccount();
				if (connectedAccount && connectedAccount.address) {
					account = connectedAccount;
					walletAddress = connectedAccount.address;
					isConnected = true;
				} else {
					isConnected = false;
					walletAddress = '';
				}
			} catch (error) {
				console.error('Error checking connection:', error);
				isConnected = false;
			}
		}
	}

	async function connectWallet() {
		try {
			await appKit?.open({ view: 'Connect' });
		} catch (error) {
			console.error('Failed to connect wallet:', error);
		}
	}

	async function openSwap() {
		try {
			await appKit?.open({ view: 'Swap' });
		} catch (error) {
			console.error('Failed to open swap:', error);
		}
	}

	async function mintPass() {
		if (!walletAddress) {
			mintingStatus = 'Please connect your wallet first';
			return;
		}

		isMinting = true;
		mintingStatus = 'Preparing transaction...';

		try {
			const result = await mintAllAccessPass({
				from: walletAddress,
				to: walletAddress,
				quantity: 1
			});

			if (result.success) {
				mintingStatus = 'Minting successful! Check your wallet.';
			} else {
				mintingStatus = `Minting failed: ${result.error}`;
			}
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : 'Unknown error';
			mintingStatus = `Error: ${errorMessage}`;
		} finally {
			isMinting = false;
		}
	}

	async function disconnectWallet() {
		try {
			// Disconnect from AppKit
			await appKit?.disconnect();

			// Clear local state immediately
			isConnected = false;
			walletAddress = '';
			account = null;

			// Clear all possible storage locations
			if (typeof window !== 'undefined') {
				// Clear localStorage
				Object.keys(localStorage).forEach((key) => {
					if (
						key.includes('wagmi') ||
						key.includes('appkit') ||
						key.includes('wallet') ||
						key.includes('connect')
					) {
						localStorage.removeItem(key);
					}
				});

				// Clear sessionStorage
				Object.keys(sessionStorage).forEach((key) => {
					if (
						key.includes('wagmi') ||
						key.includes('appkit') ||
						key.includes('wallet') ||
						key.includes('connect')
					) {
						sessionStorage.removeItem(key);
					}
				});

				// Clear IndexedDB if possible
				if ('indexedDB' in window) {
					try {
						indexedDB.deleteDatabase('wagmi');
						indexedDB.deleteDatabase('appkit');
					} catch (e) {
						console.log('Could not clear IndexedDB:', e);
					}
				}

				// Clear cookies
				document.cookie.split(';').forEach((cookie) => {
					const eqPos = cookie.indexOf('=');
					const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
					if (
						name.includes('wagmi') ||
						name.includes('appkit') ||
						name.includes('wallet') ||
						name.includes('connect') ||
						name.includes('auth')
					) {
						document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
						document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
					}
				});
			}

			// Force a connection check after a longer delay
			setTimeout(() => {
				checkConnection();
			}, 500);
		} catch (error) {
			console.error('Failed to disconnect wallet:', error);
			// Even if disconnect fails, clear local state
			isConnected = false;
			walletAddress = '';
			account = null;
		}
	}
</script>

<Card class="mx-auto w-full max-w-md">
	<CardHeader>
		<CardTitle class="text-center text-2xl font-bold">All Access Pass V2</CardTitle>
		<CardDescription class="text-center">
			Mint your exclusive Third Planet Studio All Access Pass
		</CardDescription>
	</CardHeader>
	<CardContent class="space-y-4">
		<!-- NFT Preview -->
		<div class="relative overflow-hidden rounded-lg border">
			<img
				src="/nft.webp"
				alt="Third Planet Studio All Access Pass V2"
				class="h-auto w-full object-cover"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
		</div>

		<!-- Wallet Connection Status -->
		<div class="text-center">
			{#if !isConnected}
				<Button
					onclick={connectWallet}
					class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
				>
					Connect Wallet
				</Button>
			{:else}
				<div class="space-y-3">
					<div class="text-sm text-muted-foreground">
						Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
					</div>
					<div class="flex justify-center gap-2">
						<Button onclick={disconnectWallet} variant="outline" size="sm" class="text-xs">
							Disconnect
						</Button>
						<Button onclick={checkConnection} variant="ghost" size="sm" class="text-xs">
							Refresh
						</Button>
					</div>
				</div>
			{/if}
		</div>

		<!-- Minting Section - Show when connected -->
		{#if isConnected}
			<div class="space-y-4 border-t pt-4">
				<div class="text-center">
					<h3 class="mb-2 font-semibold">Pass Details</h3>
					<div class="space-y-1 text-sm text-muted-foreground">
						<div>Token ID: 1</div>
						<div>Network: Polygon</div>
						<div>Contract: 0x30d3...C411</div>
						<div>Quantity: 1</div>
						<div class="mt-2 font-medium text-green-500">Price: 0.05 WETH</div>
						<div class="text-xs text-muted-foreground">Supply: Unlimited</div>
					</div>
				</div>

				<!-- Swap to WETH Section -->
				<div
					class="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-950"
				>
					<div class="space-y-2 text-center">
						<div class="text-sm font-medium text-amber-800 dark:text-amber-200">
							Need WETH to mint?
						</div>
						<div class="text-xs text-amber-700 dark:text-amber-300">
							Convert your MATIC to WETH using our built-in swap
						</div>
						<Button
							onclick={openSwap}
							variant="outline"
							size="sm"
							class="border-amber-300 text-amber-700 hover:bg-amber-100 dark:border-amber-700 dark:text-amber-300 dark:hover:bg-amber-900"
						>
							Swap MATIC → WETH
						</Button>
					</div>
				</div>

				<Button
					onclick={mintPass}
					disabled={isMinting}
					class="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
				>
					{#if isMinting}
						<div class="flex items-center gap-2">
							<div class="h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
							Minting...
						</div>
					{:else}
						Mint All Access Pass V2 (0.05 WETH)
					{/if}
				</Button>

				{#if mintingStatus}
					<div class="rounded bg-muted p-2 text-center text-sm">
						{mintingStatus}
					</div>
				{/if}
			</div>
		{/if}
	</CardContent>
</Card>
