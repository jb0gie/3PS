<script>
	import OrbGlow from '$lib/components/orb-glow.svelte';
	import * as Alert from '$lib/components/ui/alert';
	import MusicianHero from './MusicianHero.svelte';
	import MusicianBio from './MusicianBio.svelte';
	import MusicianSocial from './MusicianSocial.svelte';
	import MusicianVideos from './MusicianVideos.svelte';

	export let data;
	$: ({ musician } = data);
</script>

<div class="container mx-auto overflow-hidden p-4 md:rounded-lg md:p-10 lg:p-12">
	{#if musician}
		<OrbGlow />
		<MusicianHero {musician} />
		<MusicianSocial {musician} />
		<MusicianBio {musician} />

		{#if musician?.vids.length > 0}
			<div class="mt-12">
				<h2 class="mb-6 text-2xl font-semibold tracking-tight">Videos</h2>
				<Alert.Root>
					<Alert.Title>Heads up!</Alert.Title>
					<Alert.Description>
						<span class="hidden sm:inline">Double click</span>
						<span class="sm:hidden">Double tap</span>
						{' '}any video to view in fullscreen
					</Alert.Description>
				</Alert.Root>
				<MusicianVideos {musician} />
			</div>
		{/if}
	{/if}
</div>
