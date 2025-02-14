	<script>
		import { T } from '@threlte/core';
		import { interactivity } from '@threlte/extras';

		import Planetlogo from '$lib/components/planet-logo.svelte';
	</script>

	<T.PerspectiveCamera position={[0, 1, 10]} makeDefault fov={50} />

	<T.DirectionalLight position={[0, 10, 10]} />

	<T.AmbientLight intensity={0.5} />

	<Planetlogo 
		position={[0,1,0]}
		scale={3}
	/>