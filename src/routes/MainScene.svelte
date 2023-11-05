<script>
	import { T } from '@threlte/core';
	import { interactivity, HTML, OrbitControls } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import Planets from '../lib/components/planets.svelte';
	import { Button } from '$lib/components/ui/button';

	interactivity();

	const onVisibilityChange = (isVisible) => {
		console.log(isVisible);
	};

	let isHovering = false;
	let isPointerDown = false;
	let htmlPosZ = spring(0);
	$: htmlPosZ.set(isPointerDown ? -0.25 : isHovering ? -0.075 : 0, {
		hard: isPointerDown
	});
</script>

<T.PerspectiveCamera position={[10, 5, 10]} makeDefault fov={30}>
	<OrbitControls
		target.y={0.75}
		maxPolarAngle={85 * DEG2RAD}
		minPolarAngle={20 * DEG2RAD}
		maxAzimuthAngle={45 * DEG2RAD}
		minAzimuthAngle={-45 * DEG2RAD}
		enableZoom={false}
	/>
</T.PerspectiveCamera>

<HTML
	position.y={2.6}
	position.z={$htmlPosZ}
	rotation.y={0.75}
	occlude
	on:visibilitychange={onVisibilityChange}
>
	<a href="/home">
		<Button
			variant = "ghost"
			on:pointerenter={() => (isHovering = true)}
			on:pointerleave={() => {
				isPointerDown = false;
				isHovering = false;
			}}
			on:pointerdown={() => (isPointerDown = true)}
			on:pointerup={() => (isPointerDown = false)}
			on:pointercancel={() => {
				isPointerDown = false;
				isHovering = false;
			}}
			class="text-5xl py-6 hover:opacity-90 active:opacity-70">Blast Off</Button
		>
	</a>
</HTML>

<Planets scale={0.1} />

<!-- 
<T.Mesh
	position.y={1}
	scale={$scale}
	on:pointerenter={() => scale.set(1.5)}
	on:pointerleave={() => scale.set(1)}
>
	<T.BoxGeometry args={[1, 2, 1]} />
	<T.MeshBasicMaterial color="coral" />
</T.Mesh> -->
