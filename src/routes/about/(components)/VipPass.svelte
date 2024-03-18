<script>
	import { T } from '@threlte/core';
	import { Suspense, OrbitControls, interactivity } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import { DEG2RAD } from 'three/src/math/MathUtils.js';
	import Pass from '$lib/components/pass.svelte';

	interactivity();
	const planetScale = spring(3);
</script>

<T.PerspectiveCamera position={[0, 1, 10]} makeDefault fov={40}>
	<OrbitControls
		maxPolarAngle={85 * DEG2RAD}
		minPolarAngle={20 * DEG2RAD}
		maxAzimuthAngle={45 * DEG2RAD}
		minAzimuthAngle={-45 * DEG2RAD}
		enableZoom={false}
		autoRotate
	/>
</T.PerspectiveCamera>

<T.DirectionalLight position={[0, 10, 10]} />

<T.AmbientLight intensity={0.5} />

<Suspense final>
	<Pass
		position.y={-1}
		scale={$planetScale}
		on:pointerenter={() => planetScale.set(2.2)}
		on:pointerleave={() => planetScale.set(2)}
	/>

	<svelte:fragment slot="fallback">Loading...</svelte:fragment>
</Suspense>
