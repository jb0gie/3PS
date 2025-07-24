<script>
	import { Canvas } from '@threlte/core';
	import LogoPlanet from './LogoPlanet.svelte';
</script>

<a
	class="group relative p-2"
	href="https://twitter.com/3PlanetStudio"
	target="_blank"
	rel="noreferrer"
	title="Follow ThirdPlanet Studio on X"
>
	<Canvas>
		<LogoPlanet />
	</Canvas>
	<!-- Simple tooltip -->
	<div
		class="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100"
	>
		Follow ThirdPlanet Studio on X
	</div>
</a>
