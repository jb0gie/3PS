<script>
	import OrbGlow from '$lib/components/OrbGlow.svelte';
	import MusicianHero from './MusicianHero.svelte';
	import MusicianBio from './MusicianBio.svelte';
	import MusicianSocial from './MusicianSocial.svelte';
	import MusicianGallery from './MusicianGallery.svelte';
	export let data
	$: ({ musician } = data)
</script>

<div class="container mx-auto p-4 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
	{#if musician}
		<MusicianHero {musician} />
		<OrbGlow />
		<MusicianSocial {musician} />
		<MusicianBio {musician} />
		<!-- <MusicianGallery {musician}/> -->
	{/if}
</div>
