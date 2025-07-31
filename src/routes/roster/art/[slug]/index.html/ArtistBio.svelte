<script>
	import { buttonVariants } from '$lib/components/ui/button';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as Dialog from '$lib/components/ui/dialog';
	import ArtistGallery from './ArtistGallery.svelte';
	export let artist;
</script>

<div
	class="xs:w-[92%] relative mx-auto flex flex-col items-center justify-center gap-6 p-6 sm:w-[96%] md:w-[94%] lg:w-[90%] xl:w-[80%]"
>
	<!-- FullName -->
	<h1
		class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text pt-8 text-6xl font-black tracking-tight text-transparent lg:pt-0"
	>
		{artist?.title}
	</h1>

	<!-- About -->
	<div class="max-w-4xl space-y-6 text-center">
		{#if artist?.exp}
			<div class="prose prose-invert prose-lg max-w-none">
				<div class="text-lg font-light leading-relaxed text-gray-200">
					{@html artist?.exp}
				</div>
			</div>
		{/if}

		{#if artist?.bio}
			<div class="prose prose-invert prose-lg max-w-none">
				<div class="text-lg font-light leading-relaxed text-gray-200">
					{@html artist?.bio}
				</div>
			</div>
		{/if}
	</div>

	{#if artist?.works !== ''}
		<div
			class="mb-8 mt-16 flex flex-1 flex-col gap-6 rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm md:mb-auto"
		>
			<h2
				class="flex items-center gap-3 text-2xl font-bold tracking-wide text-white md:flex-col md:gap-2"
			>
				<span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
					Portfolio
				</span>
			</h2>
			<div class="prose prose-invert prose-lg max-w-none">
				<div class="text-lg font-light leading-relaxed text-gray-200">
					{@html artist?.works}
				</div>
			</div>
		</div>
	{/if}

	<!-- 🔗s -->
	<Separator orientation="vertical" />
	<ArtistGallery {artist} />
</div>
