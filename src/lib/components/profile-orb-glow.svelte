<section class="img-bg"></section>
<section class="img-bg-secondary"></section>
<section class="img-bg-accent"></section>

<style lang="postcss">
	.img-bg {
		@apply h-[60vh] w-[60vh] md:h-[70vh] md:w-[70vh] lg:h-[80vh] lg:w-[80vh];
		@apply absolute z-[-1] rounded-full blur-[100px] transition-all;
		@apply right-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2;
		animation:
			pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite,
			glow 12s linear infinite,
			float 6s ease-in-out infinite;
	}

	.img-bg-secondary {
		@apply h-[40vh] w-[40vh] md:h-[50vh] md:w-[50vh] lg:h-[60vh] lg:w-[60vh];
		@apply absolute z-[-2] rounded-full blur-[120px] transition-all;
		@apply right-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2;
		animation:
			pulse-secondary 10s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse,
			glow-secondary 15s linear infinite,
			float-secondary 8s ease-in-out infinite reverse;
	}

	.img-bg-accent {
		@apply h-[30vh] w-[30vh] md:h-[40vh] md:w-[40vh] lg:h-[50vh] lg:w-[50vh];
		@apply absolute z-[-3] rounded-full blur-[140px] transition-all;
		@apply right-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2;
		animation:
			pulse-accent 12s cubic-bezier(0.4, 0, 0.6, 1) infinite,
			glow-accent 18s linear infinite,
			float-accent 10s ease-in-out infinite;
	}

	@keyframes glow {
		0% {
			@apply bg-purple-500/40;
		}
		20% {
			@apply bg-pink-500/40;
		}
		40% {
			@apply bg-orange-500/40;
		}
		60% {
			@apply bg-yellow-500/40;
		}
		80% {
			@apply bg-green-500/40;
		}
		100% {
			@apply bg-blue-500/40;
		}
	}

	@keyframes glow-secondary {
		0% {
			@apply bg-cyan-500/30;
		}
		25% {
			@apply bg-indigo-500/30;
		}
		50% {
			@apply bg-violet-500/30;
		}
		75% {
			@apply bg-fuchsia-500/30;
		}
		100% {
			@apply bg-cyan-500/30;
		}
	}

	@keyframes glow-accent {
		0% {
			@apply bg-emerald-500/25;
		}
		33% {
			@apply bg-teal-500/25;
		}
		66% {
			@apply bg-sky-500/25;
		}
		100% {
			@apply bg-emerald-500/25;
		}
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1) translateX(-50%) translateY(-50%);
		}
		50% {
			transform: scale(1.3) translateX(-50%) translateY(-50%);
		}
	}

	@keyframes pulse-secondary {
		0%,
		100% {
			transform: scale(1) translateX(-50%) translateY(-50%);
		}
		50% {
			transform: scale(1.4) translateX(-50%) translateY(-50%);
		}
	}

	@keyframes pulse-accent {
		0%,
		100% {
			transform: scale(1) translateX(-50%) translateY(-50%);
		}
		50% {
			transform: scale(1.5) translateX(-50%) translateY(-50%);
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translateX(-50%) translateY(-50%) rotate(0deg);
		}
		33% {
			transform: translateX(-55%) translateY(-45%) rotate(120deg);
		}
		66% {
			transform: translateX(-45%) translateY(-55%) rotate(240deg);
		}
	}

	@keyframes float-secondary {
		0%,
		100% {
			transform: translateX(-50%) translateY(-50%) rotate(0deg);
		}
		33% {
			transform: translateX(-55%) translateY(-45%) rotate(-120deg);
		}
		66% {
			transform: translateX(-45%) translateY(-55%) rotate(-240deg);
		}
	}

	@keyframes float-accent {
		0%,
		100% {
			transform: translateX(-50%) translateY(-50%) rotate(0deg);
		}
		33% {
			transform: translateX(-55%) translateY(-45%) rotate(60deg);
		}
		66% {
			transform: translateX(-45%) translateY(-55%) rotate(120deg);
		}
	}
</style>
