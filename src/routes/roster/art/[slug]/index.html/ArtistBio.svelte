<script>
	import { buttonVariants } from '$lib/components/ui/button';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as Dialog from '$lib/components/ui/dialog';
	import ArtistGallery from './ArtistGallery.svelte';
	export let artist;
</script>

<div
	class="xs:w-[92%] relative mx-auto flex flex-col items-center justify-center gap-3 p-3 sm:w-[96%] md:w-[94%] lg:w-[90%] xl:w-[80%]"
>
	<!-- FullName -->
	<h1 class="pt-8 text-5xl font-bold lg:pt-0">{artist?.title}</h1>
	<!-- About -->
	<p class="text-md w-auto text-pretty">
		{@html artist?.exp}
	</p>
	<p class="text-md w-auto text-pretty">
		{@html artist?.bio}
	</p>
	{#if artist?.works !== ''}
		<div class="mb-8 mt-16 flex flex-1 flex-col gap-3.5 p-4 md:mb-auto">
			<h2 class="m-auto flex items-center gap-3 text-lg font-bold md:flex-col md:gap-2">
				Portfolio
			</h2>
			<p class="text-md w-auto text-pretty">
				{@html artist?.works}
			</p>
		</div>
	{/if}
	<!-- 🔗s -->
	<Separator orientation="vertical" />
	<ArtistGallery {artist} />
</div>
