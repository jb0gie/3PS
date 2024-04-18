<script>
	import OrbGlow from '$lib/components/OrbGlow.svelte';
	import MusicianHero from './MusicianHero.svelte';
	import MusicianBio from './MusicianBio.svelte';
	import MusicianSocial from './MusicianSocial.svelte';
	import MusicianGallery from './MusicianGallery.svelte';
	import MusicianVideos from './MusicianVideos.svelte';
	export let data;
	$: ({ musician } = data);
	const cGlass =
		'supports-[backdrop-filter]:bg-background/60 border-b bg-background/95 shadow-sm backdrop-blur rounded-lg p-2';
</script>

<!-- {#if musician}
		
		<MusicianHero {musician} />
		<div class="h-20" />
		<MusicianBio {musician} /> 
		<div class="h-20" />
		<MusicianGallery {musician} />
	{/if} -->
<div class="container mx-auto p-4 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
	<OrbGlow />
	<section class={cGlass + '' + 'w-full overflow-hidden'}>
		{#if musician}
			<div class="w-full mx-auto">
				<MusicianHero {musician}/>
				<div class="h-4"/>
				<MusicianBio {musician}/>
				<div class="p-4">
					<MusicianVideos {musician}/>
				</div>
			</div>
		{/if}
		<OrbGlow />
	</section>
</div>
