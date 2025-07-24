<script>
	import OrbGlow from '$lib/components/orb-glow.svelte';
	import * as Alert from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import ArtistHero from './ArtistHero.svelte';
	import ArtistBio from './ArtistBio.svelte';
	import ArtistSocial from './ArtistSocial.svelte';
	import ArtistGallery from './ArtistGallery.svelte';
	export let data;
	$: ({ artist } = data);
</script>

<div class="container mx-auto overflow-hidden p-4 md:rounded-lg md:p-10 lg:p-12">
	{#if artist}
		<OrbGlow />

		<!-- Back to Roster Button -->
		<div class="mb-6">
			<Button variant="outline" href="/roster" class="flex items-center gap-2">
				← Back to Roster
			</Button>
		</div>

		<ArtistHero {artist} />
		<ArtistSocial {artist} />
		<ArtistBio {artist} />
		<ArtistGallery {artist} />

		{#if artist?.vids && artist.vids.length > 0}
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
				<!-- Add video component here when available -->
			</div>
		{/if}
	{/if}
</div>
