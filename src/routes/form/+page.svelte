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
			<section class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl variant-glass-surface mx-6 lg:mx-0">
			<iframe
						class="w-full aspect-video overflow-hidden "
						title="3rdPlanetEvents" 
						src="https://docs.google.com/forms/d/e/1FAIpQLSeaSCKel9E5UR3Caf4cuiehgmyCPelFPNK9pB_L0f23y-G63A/viewform?embedded=true" style="border-width:0" width="1000" height="1000" frameborder="0" scrolling="yes" 
					/>
			</section>
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
