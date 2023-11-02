<script lang="ts">
    import { onDestroy } from 'svelte'
    import { T } from '@threlte/core';
    import { HTML, OrbitControls } from '@threlte/extras'
    import { spring } from 'svelte/motion'
    import { Color, MeshStandardMaterial } from 'three'
    import { DEG2RAD } from 'three/src/math/MathUtils.js'

    const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
    let material = new MeshStandardMaterial({
    color: new Color(getRandomColor())
    })
    const onClick = () => {
    material.color.set(getRandomColor())
    material = material
    }
    let isHovering = false
    let isPointerDown = false
    let htmlPosZ = spring(0)
    $: htmlPosZ.set(isPointerDown ? -0.15 : isHovering ? -0.075 : 0, {
    hard: isPointerDown
    })

    let target: any
</script>

<T.PerspectiveCamera
    position={[0, 0, 20]}
    makeDefault
    fov={50}
>
    <!-- <OrbitControls
    maxPolarAngle={85 * DEG2RAD}
    minPolarAngle={20 * DEG2RAD}
    maxAzimuthAngle={45 * DEG2RAD}
    minAzimuthAngle={-45 * DEG2RAD}
    /> -->
</T.PerspectiveCamera>

<T.DirectionalLight position={[0, 10, 10]} />

<T.AmbientLight intensity={0.1} />

<!-- <Planets scale={[0.1,0.1,0.1]}/> -->

<HTML
    position.y={1}
    position.z={$htmlPosZ}
    transform
>
    <section class="img-bg" />
    <a  href="/home"
        target="_self"
        rel="noreferrer">
        <button
            on:pointerenter={() => (isHovering = true)}
            on:pointerleave={() => {
            isPointerDown = false
            isHovering = false
            }}
            on:pointerup={() => (isPointerDown = false)}
            on:pointerdown={() => (isPointerDown = true)}
            on:pointercancel={() => {
            isPointerDown = false
            isHovering = false
            }}
            on:click={onClick}
            class="bg-orange-500 rounded-full px-3 text-white hover:opacity-90 active:opacity-70">
            BLAST OFF
        </button>
    </a>
</HTML>


<style lang="postcss">
	img {
		@apply flex relative flex-col;
	}
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>