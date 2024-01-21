<script>
	import { page } from '$app/stores';
	import db from '$lib/db';
	import OrbGlow from '../../../../lib/components/OrbGlow.svelte';
	import MusicianHero from './MusicianHero.svelte';
	import MusicianBio from './MusicianBio.svelte';
	import MusicianGallery from './MusicianGallery.svelte';
	import MusicianSocial from './MusicianSocial.svelte';
	let musician;
	let { slug } = $page.params;
	console.log(slug);
	db.musician.subscribe((m) => {
		// console.log('Received Musician data:', m);
		const filterfunc = (item) => item.route.includes(`/roster/music/${slug}`);
		musician = m.filter(filterfunc)[0];
		// console.log('Filtered Musician:', musician);
	});
</script>

<div class="container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
	{#if musician}
		<MusicianHero {musician} />
		<OrbGlow />
		<MusicianSocial {musician} />
		<MusicianBio {musician} />
	{/if}
</div>
