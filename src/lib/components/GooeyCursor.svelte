<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let cursor: HTMLDivElement;
	let blobs: HTMLDivElement[] = [];
	const blobCount = 6; // Fewer blobs for better blending
	const positions = Array(blobCount).fill({ x: 0, y: 0 });
	let mouse = { x: 0, y: 0 };
	let raf: number;
	let isPulsing = false;
	let pulseTime = 0;
	let rotation = 0;
	let colorHue = 0;
	let time = 0;
	let particles: any[] = [];

	function lerp(a: number, b: number, n: number) {
		return (1 - n) * a + n * b;
	}

	function animate() {
		// Update fun variables
		time += 0.016;
		rotation += 1.5;
		colorHue = (colorHue + 0.3) % 360;

		// Move the first blob towards the mouse
		positions[0] = {
			x: lerp(positions[0].x, mouse.x, 0.15), // Slower movement
			y: lerp(positions[0].y, mouse.y, 0.15)
		};
		// Move the rest towards the previous
		for (let i = 1; i < blobCount; i++) {
			positions[i] = {
				x: lerp(positions[i].x, positions[i - 1].x, 0.25), // More gooey
				y: lerp(positions[i].y, positions[i - 1].y, 0.25)
			};
		}

		// Handle pulse effect
		if (isPulsing) {
			pulseTime += 0.05;
			if (pulseTime >= 1) {
				isPulsing = false;
				pulseTime = 0;
			}
		}

		// Update particles
		particles = particles.filter((particle) => {
			particle.x += particle.vx;
			particle.y += particle.vy;
			particle.life -= 0.02;
			particle.vy += 0.1; // Gravity
			return particle.life > 0;
		});

		// Update DOM with fun effects
		blobs.forEach((b, i) => {
			let scale = 1;
			if (isPulsing) {
				const pulseScale = 1 + Math.sin(pulseTime * Math.PI) * 0.6; // Bigger pulse
				scale = pulseScale;
			}

			// Add rotation and fun movement
			const wobble = Math.sin(time * 0.01 + i) * 2; // Smaller wobble
			const rotationOffset = (rotation + i * 60) % 360; // More spread

			b.style.transform = `translate(${positions[i].x + wobble}px, ${positions[i].y + wobble}px) scale(${scale}) rotate(${rotationOffset}deg)`;

			// Dynamic colors with better blending
			const hue = (colorHue + i * 40) % 360; // Closer colors for better blending
			b.style.background = `linear-gradient(135deg, hsl(${hue}, 80%, 65%) 0%, hsl(${hue + 20}, 80%, 55%) 100%)`;
		});
		raf = requestAnimationFrame(animate);
	}

	onMount(() => {
		// Center blobs initially
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;
		for (let i = 0; i < blobCount; i++) {
			positions[i] = { x: centerX, y: centerY };
		}
		mouse = { x: centerX, y: centerY };

		const move = (e: MouseEvent) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};

		const click = () => {
			isPulsing = true;
			pulseTime = 0;

			// Create particle burst
			for (let i = 0; i < 12; i++) {
				const angle = (Math.PI * 2 * i) / 12;
				const speed = Math.random() * 3 + 2;
				particles.push({
					x: mouse.x,
					y: mouse.y,
					vx: Math.cos(angle) * speed,
					vy: Math.sin(angle) * speed,
					life: 1,
					maxLife: Math.random() * 0.5 + 0.5,
					size: Math.random() * 4 + 2,
					hue: colorHue + Math.random() * 60
				});
			}
		};

		window.addEventListener('mousemove', move);
		window.addEventListener('click', click);
		window.addEventListener('touchstart', click);
		raf = requestAnimationFrame(animate);

		return () => {
			window.removeEventListener('mousemove', move);
			window.removeEventListener('click', click);
			window.removeEventListener('touchstart', click);
			cancelAnimationFrame(raf);
		};
	});
</script>

<div class="gooey-cursor-container">
	<svg width="0" height="0">
		<filter id="gooey-cursor-filter">
			<feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
			<feColorMatrix
				in="blur"
				mode="matrix"
				values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -10"
				result="goo"
			/>
			<feBlend in="SourceGraphic" in2="goo" />
		</filter>
	</svg>
	<div class="gooey-cursor-blobs">
		{#each Array(blobCount) as _, i}
			<div bind:this={blobs[i]} class="gooey-cursor-blob"></div>
		{/each}
	</div>

	<!-- Particles -->
	{#each particles as particle}
		<div
			class="particle"
			style="
				left: {particle.x}px; 
				top: {particle.y}px; 
				width: {particle.size}px; 
				height: {particle.size}px;
				background: hsl({particle.hue}, 80%, 60%);
				opacity: {particle.life / particle.maxLife};
			"
		></div>
	{/each}
</div>

<style>
	.gooey-cursor-container {
		pointer-events: none;
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		z-index: 9999;
		mix-blend-mode: screen;
	}
	.gooey-cursor-blobs {
		filter: url(#gooey-cursor-filter);
	}
	.gooey-cursor-blob {
		position: absolute;
		left: 0;
		top: 0;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		opacity: 0.9;
		will-change: transform;
		transition: background 0.1s;
		box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
	}
	.gooey-cursor-blob:first-child {
		opacity: 1;
		width: 35px;
		height: 35px;
		box-shadow: 0 0 25px rgba(255, 255, 255, 0.7);
	}

	.particle {
		position: absolute;
		border-radius: 50%;
		pointer-events: none;
		transform: translate(-50%, -50%);
		box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
		will-change: transform, opacity;
	}
</style>
