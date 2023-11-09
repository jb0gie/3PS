<script>
	import { T, useThrelte } from '@threlte/core';
	import { interactivity, OrbitControls, Environment, HTML, Float, Align } from '@threlte/extras';
	import { Project, Sheet, SheetObject } from '@threlte/theatre';
	import { getProject } from '@theatre/core';
	import projectState from '../lib/splash.json';
	const project = getProject('Splash', { state: projectState })
	project.ready.then(() => console.log('Project loaded!'))
	import { spring } from 'svelte/motion';
	import Planets from '../lib/components/planets-hi.svelte';
	import { Button } from '$lib/components/ui/button';

	interactivity();

	const onVisibilityChange = (isVisible) => {
		// console.log(isVisible);
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
</script>

<Project name={"SplashScreen"}>
	<Sheet name="Lights & Cam">
		<SheetObject key="Directional Light" let:Sync let:Transform>
			<Transform>
				<T.DirectionalLight>
					<Sync intensity color />
				</T.DirectionalLight>
			</Transform>
		</SheetObject>
		<SheetObject key="Ambient Light" let:Sync>
			<T.AmbientLight>
				<Sync intensity color />
			</T.AmbientLight>
		</SheetObject>
	</Sheet>
	<Sheet name="Objects">
		<SheetObject key="WelcomeButton" let:Transform>
			<Transform>
				<HTML
					position.y={2.6}
					position.z={$htmlPosZ}
					rotation.y={0.75}
					occlude
					on:visibilitychange={onVisibilityChange}
				>
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
							class="text-5xl py-12 hover:opacity-90 active:opacity-70"
						>
							Blast Off
						</Button>
					</a>
				</HTML>
			</Transform>
		</SheetObject>
		<SheetObject key="SolarSystem" let:Transform>
			<Transform>
				<Planets />
			</Transform>
		</SheetObject>
	</Sheet>
</Project>

<T.FogExp2 color={'0xcccccc'} density={0.002} />,
<Environment path="hdr/" files="Studio_01.hdr" />

<Float rotationIntensity={0.15} rotationSpeed={2}>
	<T.PerspectiveCamera
		position={[0, 7, 18]}
		rotation.y="Math.PI"
		makeDefault
		fov={60}
		on:create={({ ref }) => {
			ref.lookAt(0, 0, 0);
		}}
	>
		<OrbitControls maxPolarAngle={1.56} autoRotate autoRotateSpeed={0.1} enableZoom={false} />
	</T.PerspectiveCamera>
</Float>

<Align>
	<T.Points>
		<T.BufferGeometry>
			<T.BufferAttribute
				args={[positions, 3]}
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
