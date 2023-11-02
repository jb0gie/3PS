<script>
	import third_planet from '$lib/images/logo-s.png';
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="h-screen w-auto">
	<div class="container mx-auto flex justify-center items-center">
		<div class="space-y-10 text-center flex flex-col items-center">
			<figure>
				<section class="img-bg" />
				<br />
				<!-- <section class="img-bg" /> -->
			</figure>
			<!-- <figure>
				<section class="img-bg" />
				<img src={third_planet} alt="logo" />
			</figure>
			<div class="flex justify-center space-x-2">
				<a href="/home" target="_self" rel="noreferrer">
					<Button variant="outline"><h1>Blast off</h1></Button>
				</a>
			</div> -->
		</div>
	</div>
	<Canvas>
		<Scene />
	</Canvas>
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
