<script>
	import { buttonVariants } from '$lib/components/ui/button';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as Dialog from '$lib/components/ui/dialog';
	import MusicianSocial from './MusicianSocial.svelte';
	import MusicianVideos from './MusicianVideos.svelte';
	import MusicianGallery from './MusicianGallery.svelte';
	import { onMount } from 'svelte';
	export let musician;

	let randomIndex = 0;

	onMount(() => {
		// Set random index only on client side to avoid hydration mismatch
		randomIndex = Math.floor(Math.random() * (musician?.pic?.length || 1));
	});
</script>

<div
	class="xs:w-[92%] relative mx-auto flex flex-col items-center justify-center gap-6 p-6 sm:w-[96%] md:w-[94%] lg:w-[90%] xl:w-[80%]"
>
	<!-- FullName -->
	<h1
		class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text pt-8 text-6xl font-black tracking-tight text-transparent lg:pt-0"
	>
		{musician.name}
	</h1>

	<!-- About -->
	<div class="max-w-4xl space-y-6 text-center">
		{#if musician?.exp}
			<div class="prose prose-invert prose-lg max-w-none">
				<div class="text-lg font-light leading-relaxed text-gray-200">
					{@html musician?.exp}
				</div>
			</div>
		{/if}

		{#if musician?.bio}
			<div class="prose prose-invert prose-lg max-w-none">
				<div class="text-lg font-light leading-relaxed text-gray-200">
					{@html musician?.bio}
				</div>
			</div>
		{/if}
	</div>

	{#if musician?.works !== ''}
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
					{@html musician?.works}
				</div>
			</div>
		</div>
	{/if}

	<!-- 🔗s -->
	<Separator orientation="vertical" />
	<MusicianGallery {musician} />
</div>
