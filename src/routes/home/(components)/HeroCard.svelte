<script>
	import { Canvas } from '@threlte/core';
	import LogoPlanet from './LogoPlanet.svelte';
	import * as HoverCard from '$lib/components/ui/hover-card';
</script>

<a class="p-2" href="https://twitter.com/3PlanetStudio" target="_blank" rel="noreferrer">
<HoverCard.Root>
	<HoverCard.Trigger>
		<Canvas>
			<LogoPlanet />
		</Canvas>
	</HoverCard.Trigger>
	<HoverCard.Content>Follow ThirdPlanet Studio on X</HoverCard.Content>
</HoverCard.Root>
</a>
