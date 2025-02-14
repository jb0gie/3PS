<style lang="postcss">
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-red-500/50;
		}
		33% {
			@apply bg-lime-500/50;
		}
		66% {
			@apply bg-pink-500/50;
		}
		100% {
			@apply bg-yellow-500/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>