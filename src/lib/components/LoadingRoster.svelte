<script lang="ts">
	let animate = true;
	const profileBox =
		'max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0';
	const profile =
		'w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl variant-glass-surface mx-6 lg:mx-0';
	const bigProfile = 'rounded-none lg:rounded-lg shadow-2xl hidden lg:block';
	const profileDesc = 'pt-4 text-base font-bold flex items-center justify-center lg:justify-start';
</script>

<section
	class="card w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl variant-glass-surface mx-6 lg:mx-0"
>
	<div class="card-header flex justify-between items-center">
		<div class="flex justify-center items-center space-x-4" class:animate-pulse={animate}>
			<div class="placeholder-circle w-16" />
			<div class="placeholder-circle w-14" />
			<div class="placeholder-circle w-10" />
			<div class="placehodler h1">LOADING</div>
		</div>
	</div>
	<div class="p-4 space-y-4" class:animate-pulse={animate}>
		<div class="placeholder" />
		<div class="grid grid-cols-4 gap-4">
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
		</div>
		<div class="placeholder" />
		<div class="placeholder" />
	</div>
</section>

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
