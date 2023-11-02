<script>
	import World from './(components)/World.svelte';
	import Hero from './(components)/Hero.svelte';
	import { PlusCircled } from 'radix-icons-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as Tabs from '$lib/components/ui/tabs';
	import { AlbumArtwork, Sidebar, Menu, PodcastEmptyPlaceholder } from './(components)';
	import { playlists } from './(data)/playlists';
	import { listenNowAlbums, madeForYouAlbums } from './(data)/albums';
	// import Partners from './(components)/Partners.svelte';
	// import Showcase from './(components)/Showcase.svelte';
	// import CallToAction from './(components)/CallToAction.svelte';
	// import Mints from './(components)/Mints.svelte';
</script>

<!-- <div class="md:hidden">
	<img
		src=""
		width={1280}
		height={1114}
		alt="Music"
		class="block dark:hidden"
	/>
	<img
		src=""
		width={1280}
		height={1114}
		alt="Music"
		class="hidden dark:block"
	/>
</div> -->
<div class="hidden md:block">
	<Menu />
	<!-- top- -->
	<div class="flex flex-auto gap-6 w-auto mx-auto p-4">
		<World>
			<svelte:fragment slot="title">Heads up!</svelte:fragment>
			<svelte:fragment slot="description">
				<a class="btn" href="https://hyperfy.io/3ps" target="_blank">Visit 3PS on hyperfy.io</a>
			</svelte:fragment>
		</World>
		<!-- <World>
			<svelte:fragment slot="title">Heads up!</svelte:fragment>
			<svelte:fragment slot="description">
				<a class="btn" href="https://hyperfy.io/3ps" target="_blank">Visit 3PS on hyperfy.io</a>
			</svelte:fragment>
		</World> -->
	</div>
	<div class="border-t">
		<div class="bg-background">
			<div class="grid lg:grid-cols-5">
				<Sidebar {playlists} class="hidden lg:block" />
				<div class="col-span-3 lg:col-span-4 lg:border-l">
					<div class="h-full px-4 py-6 lg:px-8">
						<Tabs.Root value="music" class="h-full space-y-6">
							<div class="space-between flex items-center">
								<Tabs.List>
									<Tabs.Trigger value="music" class="relative">Music</Tabs.Trigger>
									<Tabs.Trigger value="podcasts">Podcasts</Tabs.Trigger>
									<Tabs.Trigger value="live" disabled>Live</Tabs.Trigger>
								</Tabs.List>
								<div class="ml-auto mr-4">
									<Button>
										<PlusCircled class="mr-2 h-4 w-4" />
										Add music
									</Button>
								</div>
							</div>
							<Tabs.Content value="music" class="border-none p-0 outline-none">
								<div class="flex items-center justify-between">
									<div class="space-y-1">
										<h2 class="text-2xl font-semibold tracking-tight">Listen Now</h2>
										<p class="text-sm text-muted-foreground">Top picks for you. Updated daily.</p>
									</div>
								</div>
								<Separator class="my-4" />
								<div class="relative">
									<div class="overflow-x-auto">
										<div class="flex space-x-4 pb-4">
											{#each listenNowAlbums as album}
												<AlbumArtwork
													{album}
													class="w-[250px]"
													aspectRatio="portrait"
													width={250}
													height={330}
												/>
											{/each}
										</div>
									</div>
								</div>
								<div class="mt-6 space-y-1">
									<h2 class="text-2xl font-semibold tracking-tight">Made for You</h2>
									<p class="text-sm text-muted-foreground">
										Your personal playlists. Updated daily.
									</p>
								</div>
								<Separator class="my-4" />
								<div class="relative">
									<div class="overflow-x-auto">
										<div class="flex space-x-4 pb-4">
											{#each madeForYouAlbums as album}
												<AlbumArtwork
													{album}
													class="w-[150px]"
													aspectRatio="square"
													width={150}
													height={150}
												/>
											{/each}
										</div>
									</div>
								</div>
							</Tabs.Content>
							<Tabs.Content
								value="podcasts"
								class="h-full flex-col border-none p-0 data-[state=active]:flex"
							>
								<div class="flex items-center justify-between">
									<div class="space-y-1">
										<h2 class="text-2xl font-semibold tracking-tight">New Episodes</h2>
										<p class="text-sm text-muted-foreground">
											Your favorite podcasts. Updated daily.
										</p>
									</div>
								</div>
								<Separator class="my-4" />
								<PodcastEmptyPlaceholder />
							</Tabs.Content>
						</Tabs.Root>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div>
	

	<!-- <header>
		<div class="section-container"><Hero /></div>
	</header>

	<section>
		<div class="section-container"><Showcase /></div>
	</section>

	<section>
		<div class="section-container"><Mints /></div>
	</section>

	<section>
	</section>

	<section>
		<div class="section-container"><CallToAction /></div>
	</section> -->
</div>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-24;
	}
</style>
