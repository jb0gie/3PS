<script>
	import { Canvas } from '@threlte/core';
	import PageTitle from '$lib/components/page-title.svelte';
	import LogoPlanet from './(components)/LogoPlanet.svelte';
	import third_planet from '$lib/images/logo-s.png';
	import * as Tabs from '$lib/components/ui/tabs';
	import OrbGlow from '$lib/components/orb-glow.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
</script>

<div class="flex justify-between">
	<OrbGlow />
</div>

<div class="h-5 md:h-16"></div>

<PageTitle>
	<svelte:fragment slot="pageName">Contact</svelte:fragment>
</PageTitle>

<div class="h-5 md:h-8"></div>

<div class="mx-auto grid gap-8 sm:pt-3 md:grid-cols-2">
	<div class="flex flex-col justify-center">
		<div class="h-[520px] w-full">
			<Canvas>
				<LogoPlanet />
			</Canvas>
		</div>
	</div>

	<div class="flex flex-col items-center justify-center space-y-10 text-center">
		<Tabs.Root value="inquiry" class="w-auto">
			<Tabs.List>
				<Tabs.Trigger value="inquiry">Contact</Tabs.Trigger>
				<Tabs.Trigger value="art">Art Submission</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="inquiry">
				<iframe
					class="hide-scrollbar h-[520px] w-full min-w-[420px] overflow-hidden rounded-lg"
					title="ThirdPlanetEvents"
					src="https://docs.google.com/forms/d/e/1FAIpQLSeaSCKel9E5UR3Caf4cuiehgmyCPelFPNK9pB_L0f23y-G63A/viewform?embedded=true"
					style="border-width:0 scrollbar-color: hsl(215.4 16.3% 46.9% / 0.3); "
					frameborder="0"
					scrolling="yes"
				/>
			</Tabs.Content>
			<Tabs.Content value="art">
				<iframe
					class="hide-scrollbar h-[520px] w-full min-w-[420px] overflow-hidden rounded-lg"
					title="ThirdPlanetEvents"
					src="https://docs.google.com/forms/d/e/1FAIpQLSe4bJpmLCWR3sQSFDAn5Ky9Hy7TlObfJOM2hApNODFwS5HBZA/viewform?embedded=true"
					style="border-width:0 scrollbar-color: hsl(215.4 16.3% 46.9% / 0.3); "
					frameborder="0"
					scrolling="yes"
				/>
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
</style>
