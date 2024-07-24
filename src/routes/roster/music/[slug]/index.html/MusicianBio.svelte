<script>
	import { buttonVariants } from '$lib/components/ui/button';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as Dialog from '$lib/components/ui/dialog';
	import MusicianSocial from './MusicianSocial.svelte';
	import MusicianVideos from './MusicianVideos.svelte';
	import MusicianGallery from './MusicianGallery.svelte';
	export let musician;
	let randomIndex = Math.floor(Math.random() * musician?.pic.length);
</script>

<div
	class="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-3 p-3 justify-center items-center relative"
>
	<!-- FullName -->
	<h1 class="text-5xl font-bold pt-8 lg:pt-0">{musician.name}</h1>
	<!-- About -->
	<p class="w-auto text-md text-pretty">
		{@html musician?.exp}
	</p>
	<p class="w-auto text-md text-pretty">
		{@html musician?.bio}
	</p>
	{#if musician?.works !== ''}
		<div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1 p-4 mt-16">
			<h2 class="flex gap-3 items-center m-auto text-lg font-bold md:flex-col md:gap-2">
				Portfolio
			</h2>
			<p class="w-auto text-pretty">
				{@html musician?.works}
			</p>
		</div>
	{/if}
	<!-- 🔗s -->
	<MusicianSocial {musician} />
	<Separator orientation="vertical" />
	<MusicianGallery {musician} />
</div>
