	<script>
		import OrbGlow from '../../lib/components/OrbGlow.svelte';
		import { onDestroy } from 'svelte';
		import { T } from '@threlte/core';
		import { HTML, OrbitControls } from '@threlte/extras';
		import { spring } from 'svelte/motion';
		import { Color, MeshStandardMaterial } from 'three';
		import { DEG2RAD } from 'three/src/math/MathUtils.js';
		import Planetlogo from '../../lib/components/planetlogo.svelte';

		const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
		let material = new MeshStandardMaterial({
			color: new Color(getRandomColor())
		});
		const onClick = () => {
			material.color.set(getRandomColor());
			material = material;
		};
		let isHovering = false;
		let isPointerDown = false;
		let htmlPosZ = spring(0);
		$: htmlPosZ.set(isPointerDown ? -0.15 : isHovering ? -0.075 : 0, {
			hard: isPointerDown
		});
		let target;
	</script>

	<T.PerspectiveCamera position={[0, 3, 5]} makeDefault fov={50}>
		<OrbitControls
			target.y={0.75}
			maxPolarAngle={85 * DEG2RAD}
			minPolarAngle={20 * DEG2RAD}
			maxAzimuthAngle={45 * DEG2RAD}
			minAzimuthAngle={-45 * DEG2RAD}
			enableZoom={true}
		/>
	</T.PerspectiveCamera>

	<T.DirectionalLight position={[0, 10, 10]} />

	<T.AmbientLight intensity={0.5} />

	<Planetlogo position={[0,1,0]}/>