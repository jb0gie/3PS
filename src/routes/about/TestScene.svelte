	<script>
		import { T } from '@threlte/core';
		import { OrbitControls } from '@threlte/extras';
		import { DEG2RAD } from 'three/src/math/MathUtils.js';
		import Pass from '../../lib/components/pass.svelte';
	</script>

	<T.PerspectiveCamera position={[0, 3, 5]} makeDefault fov={30}>
		<OrbitControls
			maxPolarAngle={85 * DEG2RAD}
			minPolarAngle={20 * DEG2RAD}
			maxAzimuthAngle={45 * DEG2RAD}
			minAzimuthAngle={-45 * DEG2RAD}
			enableZoom={false}
		/>
	</T.PerspectiveCamera>

	<T.DirectionalLight position={[0, 10, 10]} />

	<T.AmbientLight intensity={0.5} />

	<Pass scale={0.8}/>