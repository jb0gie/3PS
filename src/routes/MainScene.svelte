<script>
	import { T, useThrelte } from '@threlte/core';
	import {
		interactivity,
		OrbitControls,
		Environment,
		Text,
		HTML,
		Float,
		Align,
		Suspense,
		Stars,
		FakeGlowMaterial,
		RoundedBoxGeometry
	} from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import PlanetLogo from '../lib/components/new3PSlogo.svelte';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';
	import { IcosahedronGeometry } from 'three';

	interactivity();

	const onVisibilityChange = (isVisible) => {
		console.log(isVisible);
	};

	let exposure = 0.1618;
	const { renderer, invalidate } = useThrelte();
	$: {
		renderer.toneMappingExposure = exposure;
		invalidate();
	}

	let isHovering = false;
	let isPointerDown = false;

	let htmlPosZ = spring(0);
	$: htmlPosZ.set(isPointerDown ? -0.25 : isHovering ? -0.075 : 0, {
		hard: isPointerDown
	});

	// const size = 10000;
	// const count = size;
	// const positions = new Float32Array(count * 3);
	// for (let i = 0; i < count; i++) {
	// 	positions[i * 3 + 0] = (Math.random() - 0.5) * 2000; // x
	// 	positions[i * 3 + 1] = (Math.random() - 0.5) * 2000; // y
	// 	positions[i * 3 + 2] = (Math.random() - 0.5) * 2000; // z
	// }

	const planetScale = spring(2);
	const textScale = spring(0);
	const textPos = spring(0);
	const fontSize = spring(-1);
	function navigationToPage(route) {
		goto(route);
	}
</script>

<T.FogExp2 color={'#dddddd'} density={0.002} />,
<T.DirectionalLight intensity={1} position={[-20, -2, -1400]} />
<T.AmbientLight />

<Environment path="hdr/" files="Studio_01.hdr" />

<Float rotationIntensity={0.15} rotationSpeed={2}>
	<T.PerspectiveCamera
		position={[0, 0, 18]}
		rotation.y="Math.PI"
		makeDefault
		fov={60}
		on:create={({ ref }) => {
			ref.lookAt(0, 0, 0);
		}}
	>
		<!-- <OrbitControls maxPolarAngle={1.56} autoRotate autoRotateSpeed={0.1} enableZoom={false} /> -->
	</T.PerspectiveCamera>
</Float>

<T.DirectionalLight intensity={10} position={[1, 0, 0]} />

<Suspense final>
	<svelte:fragment slot="fallback">Loading...</svelte:fragment>
</Suspense>

<Stars />

<T.Group>
	<PlanetLogo
		on:click={() => navigationToPage('/home')}
		scale={$planetScale}
		on:pointerenter={() => {
			planetScale.set(4.2);
			textScale.set(1);
			textPos.set(-6);
			fontSize.set(1);
		}}
		on:pointerleave={() => {
			planetScale.set(2);
			textScale.set(0);
			textPos.set(0);
			fontSize.set(-1);
		}}
	/>
	<T.Group position.y={$textPos} scale={$textScale}>
		<Text
			text="Click to go home"
			color="green"
			fontSize={$fontSize}
			anchorX="center"
			anchorY="middle"
		/>
		<T.Mesh>
			<FakeGlowMaterial glowColor="grey" />
			<T.IcosahedronGeometry args={[7, 1, 1]} />
		</T.Mesh>
	</T.Group>
</T.Group>

<!-- <Align>
	<T.Points>
		<T.BufferGeometry>
			<T.BufferAttribute
				args={[positions, 4]}
				attach={(parent, self) => {
					parent.setAttribute('position', self);
					return () => {
						// cleanup function called when ref changes or the component unmounts
						// https://threlte.xyz/docs/reference/core/t#attach
					};
				}}
			/>
		</T.BufferGeometry>
		<T.PointsMaterial color={0x888888} />
	</T.Points>
</Align> -->
