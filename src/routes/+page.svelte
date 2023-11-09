<script>
	import { Canvas } from '@threlte/core';
	import { Studio } from '@threlte/theatre';
	import { Sky } from '@threlte/extras';
	import { dev } from '$app/environment';

	import Scene from './MainScene.svelte';
	import OrbGlow from '../lib/components/OrbGlow.svelte';

	
</script>

<OrbGlow />
<div class="h-screen w-auto">
	<Studio enabled={dev} />
	<Canvas>
		<Sky
			setEnvironment={false}
			turbidity="10"
			rayleigh="0.02"
			azimuth="180"
			elevation="-1"
			mieCoefficient=".004"
			mieDirectionalG="0.99"
		/>
		<Scene exposure="0.1" />
	</Canvas>
</div>
