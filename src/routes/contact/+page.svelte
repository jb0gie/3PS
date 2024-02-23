<script>
	import { Canvas } from '@threlte/core';
	import PageTitle from '../../lib/components/PageTitle/PageTitle.svelte';
	import LogoPlanet from './(components)/LogoPlanet.svelte';
	import third_planet from '$lib/images/logo-s.png';
</script>

<div>
	<div class="container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
		<PageTitle>
			<svelte:fragment slot="pageName">Contact</svelte:fragment>
		</PageTitle>
		<div class="h-[320px] w-auto">
			<Canvas>
				<LogoPlanet />
			</Canvas>
		</div>
		<div class="space-y-10 text-center flex flex-col items-center">
			<iframe
				class="hide-scrollbar rounded-lg h-[420px] overflow-hidden"
				title="3rdPlanetEvents"
				src="https://docs.google.com/forms/d/e/1FAIpQLSe4bJpmLCWR3sQSFDAn5Ky9Hy7TlObfJOM2hApNODFwS5HBZA/viewform?embedded=true"
				style="border-width:0 scrollbar-color: hsl(215.4 16.3% 46.9% / 0.3); "
				width="420px"
				height="100%"
				frameborder="0"
				scrolling="yes"
			/>
		</div>
	</div>
</div>

<style lang="postcss">
	img {
		@apply flex relative flex-col;
	}
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
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
