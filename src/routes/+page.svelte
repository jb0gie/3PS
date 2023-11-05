<script>
	import { Canvas } from '@threlte/core';
	import Scene from './MainScene.svelte';
	import OrbGlow from '../lib/components/OrbGlow.svelte';
</script>

<div class="h-screen w-auto">
	<OrbGlow />
	<Canvas>
		<Scene />
		
	</Canvas>
</div>