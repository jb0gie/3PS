<script>
	import OrbGlow from '$lib/components/orb-glow.svelte';
	import ProfileOrbGlow from '$lib/components/profile-orb-glow.svelte';
	import * as Alert from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import BackToTop from '$lib/components/back-to-top.svelte';
	import MusicianHero from './MusicianHero.svelte';
	import MusicianBio from './MusicianBio.svelte';
	import MusicianSocial from './MusicianSocial.svelte';
	import MusicianVideos from './MusicianVideos.svelte';

	export let data;
	$: ({ musician } = data);
</script>

<div class="container mx-auto overflow-hidden p-4 md:rounded-lg md:p-10 lg:p-12">
	{#if musician}
		<ProfileOrbGlow />

		<!-- Back to Roster Button -->
		<div class="mb-6">
			<Button variant="outline" href="/roster" class="flex items-center gap-2">
				← Back to Roster
			</Button>
		</div>

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
	{:else}
		<!-- Fallback when no musician is found -->
		<div class="flex min-h-[60vh] flex-col items-center justify-center text-center">
			<OrbGlow />

			<!-- Back to Roster Button -->
			<div class="mb-6">
				<Button variant="outline" href="/roster" class="flex items-center gap-2">
					← Back to Roster
				</Button>
			</div>

			<div class="space-y-4">
				<h1 class="text-4xl font-bold tracking-tight">Musician Not Found</h1>
				<p class="text-lg text-muted-foreground">
					The musician you're looking for could not be found.
				</p>
				<p class="text-sm text-muted-foreground">Please check the URL or return to the roster.</p>
			</div>
		</div>
	{/if}
</div>

<BackToTop />
