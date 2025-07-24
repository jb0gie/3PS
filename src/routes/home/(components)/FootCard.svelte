<script>
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import OrbGlow from '$lib/components/orb-glow.svelte';
	import passAnim from '$lib/components/videos/pass.webm';
</script>

<div class="relative">
	<div class="anim-float-avatar relative z-[1]">
		<AspectRatio ratio={16 / 9}>
			<video autoplay loop muted playsinline class="w-full rounded-t-lg">
				<source src={passAnim} type="video/webm" />
				<track kind="captions" />
				Your browser does not support the video tag.
			</video>
		</AspectRatio>
	</div>
	<div class="absolute left-[50%] top-[50%] z-0 -translate-x-[50%] -translate-y-[50%]">
		<div
			class="flex aspect-square w-96 items-center justify-center rounded-full border-2 border-black/5 dark:border-white/5"
		>
			<OrbGlow />
			<div
				class="flex aspect-square w-[240px] items-center justify-center rounded-full border-2 border-black/5 dark:border-white/5"
			></div>
		</div>
	</div>
</div>

<style lang="postcss">
	.anim-float-avatar {
		animation: float-up 13s ease-in-out infinite;
	}
	/* prettier-ignore */
	@keyframes float-up {
		0% { transform: translateY(0px); }
		50% { transform: translateY(-20px); }
		100% { transform: translateY(0px); }
	}
	/* prettier-ignore */
	@keyframes float-down {
		0% { transform: translateY(0px); }
		50% { transform: translateY(20px); }
		100% { transform: translateY(0px); }
	}
</style>
