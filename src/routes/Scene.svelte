<script>
	import { T } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import { degToRad } from 'three/src/math/MathUtils';
  interactivity()
	const scale = spring(1);
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	on:create={({ ref }) => {
		ref.lookAt(0, 0.5, 0);
	}}
/>

<T.Mesh
	position.y={1}
	scale={$scale}
	on:pointerenter={() => scale.set(1.5)}
	on:pointerleave={() => scale.set(1)}
>
	<T.BoxGeometry args={[1, 2, 1]} />
	<T.MeshBasicMaterial color="coral" />
</T.Mesh>
