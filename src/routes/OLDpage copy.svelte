<script lang="ts">	
	import third_planet from '$lib/images/3PSFINALLOGO.png'
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		
		<figure>
			<section class="img-bg" />
			<img src={third_planet} alt="logo"/>
		</figure>
		
		<div class="flex justify-center space-x-2">
			<a
				class="btn variant-ghost-error"
				href="/home"
				target="_self"
				rel="noreferrer"
			>
				Blast off
			</a>
		</div>
	</div>
</div>


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
