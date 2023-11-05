<script>
	import { Canvas } from '@threlte/core';
	import Scene from './MainScene.svelte';
	import OrbGlow from '../lib/components/OrbGlow.svelte';
</script>

<OrbGlow />
<div class="h-screen w-auto">
	<Canvas>
		<Scene />
	</Canvas>
</div>