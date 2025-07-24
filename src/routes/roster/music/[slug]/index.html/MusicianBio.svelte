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
	class="xs:w-[92%] relative mx-auto flex flex-col items-center justify-center gap-3 p-3 sm:w-[96%] md:w-[94%] lg:w-[90%] xl:w-[80%]"
>
	<!-- FullName -->
	<h1 class="pt-8 text-5xl font-bold lg:pt-0">{musician.name}</h1>
	<!-- About -->
	<p class="text-md w-auto text-pretty">
		{@html musician?.exp}
	</p>
	<p class="text-md w-auto text-pretty">
		{@html musician?.bio}
	</p>
	{#if musician?.works !== ''}
		<div class="mb-8 mt-16 flex flex-1 flex-col gap-3.5 p-4 md:mb-auto">
			<h2 class="m-auto flex items-center gap-3 text-lg font-bold md:flex-col md:gap-2">
				Portfolio
			</h2>
			<p class="w-auto text-pretty">
				{@html musician?.works}
			</p>
		</div>
	{/if}
	<!-- 🔗s -->
	<Separator orientation="vertical" />
	<MusicianGallery {musician} />
</div>
