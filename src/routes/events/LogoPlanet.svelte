	<script>
		import { onDestroy } from 'svelte';
		import { T } from '@threlte/core';
		import { HTML, OrbitControls, interactivity } from '@threlte/extras';
		import { spring } from 'svelte/motion';
		import { Color, MeshStandardMaterial } from 'three';
		import { DEG2RAD } from 'three/src/math/MathUtils.js';
		import Planetlogo from '../../lib/components/planetlogo.svelte';

		interactivity()
		const planetScale = spring(3);
	</script>

	<T.PerspectiveCamera position={[0, 1, 10]} makeDefault fov={50}>
		<!-- <OrbitControls
			target.y={0.75}
			maxPolarAngle={85 * DEG2RAD}
			minPolarAngle={20 * DEG2RAD}
			maxAzimuthAngle={45 * DEG2RAD}
			minAzimuthAngle={-45 * DEG2RAD}
			enableZoom={false}
		/> -->
	</T.PerspectiveCamera>

	<T.DirectionalLight position={[0, 10, 10]} />

	<T.AmbientLight intensity={0.5} />

	<Planetlogo 
		position={[0,1,0]}
		scale={$planetScale}
		on:pointerenter={() => planetScale.set(3.5)}
		on:pointerleave={() => planetScale.set(3)}
	/>