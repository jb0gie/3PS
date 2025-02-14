<script>
	import { Canvas } from '@threlte/core';
	import LogoPlanet from './LogoPlanet.svelte';
	import * as HoverCard from '$lib/components/ui/hover-card';
</script>

<HoverCard.Root>
	<HoverCard.Trigger>
		<Canvas>
			<LogoPlanet />
		</Canvas>
	</HoverCard.Trigger>
	<HoverCard.Content>Follow ThirdPlanet Studio on X</HoverCard.Content>
</HoverCard.Root>
