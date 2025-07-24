<script>
	import { Canvas } from '@threlte/core';
	import PageTitle from '$lib/components/page-title.svelte';
	import LogoPlanet from './(components)/LogoPlanet.svelte';
	const third_planet = '/images/logo-s.png';
	import * as Tabs from '$lib/components/ui/tabs';
	import OrbGlow from '$lib/components/orb-glow.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
	import { onMount } from 'svelte';

	const artForm =
		'https://docs.google.com/forms/d/e/1FAIpQLSe4bJpmLCWR3sQSFDAn5Ky9Hy7TlObfJOM2hApNODFwS5HBZA/viewform?embedded=true';

	const inquiryForm =
		'https://docs.google.com/forms/d/e/1FAIpQLSeaSCKel9E5UR3Caf4cuiehgmyCPelFPNK9pB_L0f23y-G63A/viewform?embedded=true';

	let mounted = false;
	let inquiryLoaded = false;
	let artLoaded = false;

	onMount(() => {
		mounted = true;
	});
</script>

<PageTitle>
	<svelte:fragment slot="pageName">Contact</svelte:fragment>
</PageTitle>

<div class="h-5 md:h-8"></div>

<!-- Debug: Always-visible iframe for testing -->
<div style="margin: 2rem 0;">
	<!-- Debug iframe removed -->
</div>

<div class="mx-auto grid gap-8 sm:pt-3 md:grid-cols-2">
	<div class="flex flex-col justify-center">
		<div class="h-40 w-full md:h-[520px]">
			{#if mounted}
				<Canvas>
					<LogoPlanet />
				</Canvas>
			{/if}
		</div>
	</div>

	<div class="flex flex-col items-center justify-center space-y-10 text-center">
		<Tabs.Root value="inquiry" class="w-full">
			<Tabs.List>
				<Tabs.Trigger value="inquiry">Contact</Tabs.Trigger>
				<Tabs.Trigger value="art">Art Submission</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="inquiry">
				<div class="relative h-[520px] w-full min-w-0 md:min-w-[420px]">
					<iframe
						class="hide-scrollbar h-full w-full overflow-hidden rounded-lg"
						title="Contact Form"
						src={inquiryForm}
						loading="lazy"
						on:load={() => {
							inquiryLoaded = true;
						}}
					></iframe>
					{#if !inquiryLoaded}
						<div class="absolute inset-0 z-10">
							<Skeleton class="h-full w-full rounded-lg" />
						</div>
					{/if}
				</div>
			</Tabs.Content>
			<Tabs.Content value="art">
				<div class="relative h-[520px] w-full min-w-0 md:min-w-[420px]">
					<iframe
						class="hide-scrollbar h-full w-full overflow-hidden rounded-lg"
						title="Art Submission Form"
						src={artForm}
						loading="lazy"
						on:load={() => {
							artLoaded = true;
						}}
					></iframe>
					{#if !artLoaded}
						<div class="absolute inset-0 z-10">
							<Skeleton class="h-full w-full rounded-lg" />
						</div>
					{/if}
				</div>
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>

<style lang="postcss">
	img {
		@apply relative flex flex-col;
	}
	.img-bg {
		@apply h-64 w-64 md:h-80 md:w-80;
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation:
			pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-red-500/50;
		}
		33% {
			@apply bg-lime-500/50;
		}
		66% {
			@apply bg-pink-500/50;
		}
		100% {
			@apply bg-yellow-500/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
	:global(canvas) {
		touch-action: none;
	}

	:global(.hide-scrollbar) {
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	:global(.hide-scrollbar::-webkit-scrollbar) {
		display: none;
	}

	.hidden {
		display: none;
	}
</style>
