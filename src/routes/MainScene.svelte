<script>
	import { T, useThrelte } from '@threlte/core';
	import { interactivity, OrbitControls, Environment, HTML, Float, Align } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import PlanetLogo from '../lib/components/planetlogo.svelte';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';

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

	const size = 10000;
	const count = size;
	const positions = new Float32Array(count * 3);
	for (let i = 0; i < count; i++) {
		positions[i * 3 + 0] = (Math.random() - 0.5) * 2000; // x
		positions[i * 3 + 1] = (Math.random() - 0.5) * 2000; // y
		positions[i * 3 + 2] = (Math.random() - 0.5) * 2000; // z
	}

	const scale = spring(4);

	function navigationToPage(route) {
		goto(route);
	}
</script>

<T.FogExp2 color={'#dddddd'} density={0.002} />,
<T.DirectionalLight position={[-20, -2, -1400]} />
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
<T.DirectionalLight intensity={5} color position={[1,0,0]} />
<PlanetLogo
	scale={$scale}
	on:click={() => navigationToPage('/home')}
	on:pointerenter={() => scale.set(4.5)}
	on:pointerleave={() => scale.set(4)}
/>

<!-- <HTML position.x={-3} position.y={-1} occlude on:visibilitychange={onVisibilityChange}>
	<a href="/home">
		<Button
			variant="ghost"
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
			class="text-5xl py-12 hover:opacity-90 active:opacity-70 text-white"
		>
			Blast Off
		</Button>
	</a>
</HTML> -->

<Align>
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
</Align>
