<script>
	// import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// import { Accordion, AccordionItem, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	// import { artRoster, musicRoster, partnerRoster } from '$lib/roster';
	import HomePlaceholder from './HomePlaceholder.svelte';

	let artLoaded 
	let musicLoaded 
	let genreFilter 
	
	a = []
	b = []
	async function loadRosters() {
		a = await artRoster()
		artLoaded = a
		b = await musicRoster()
		musicLoaded = b
	}
	
	let showcase = '3rdPlanetMusic';
	let genres = [
		'Jazz | Fusion',
		'Singer | Songwriter',
		'Electronic',
		'Hip Hop',
		'Island | Roots',
		'Rock | Alternative'
	];
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10 items-start">
	<!-- Info -->
	<div class="space-y-4">
		<h2 class="h2">Music, Art, Events ✨⭐🎼🎨🎛️</h2>
		<!-- prettier-ignore -->
		<p>We are a non traditional virtual music and art group built by creatives for creatives! Our main goal is to help artists maintain full creative freedom to express themselves without limitations.</p>
		<!-- Options -->
		<ListBox
			active="variant-filled"
			hover="hover:variant-soft"
			rounded="rounded-container-token"
			padding="!p-4"
		>
			<ListBoxItem bind:group={showcase} name="showcase" value="3rdPlanetMusic">
				<div class="space-y-2">
					<h3 class="h3">Musicians</h3>
					<!-- <p class="!text-sm">we work with.</p> -->
				</div>
			</ListBoxItem>
			<ListBoxItem bind:group={showcase} name="showcase" value="3rdPlanetArt">
				<div class="space-y-2">
					<h3 class="h3">Artist</h3>
				</div>
			</ListBoxItem>
			<ListBoxItem bind:group={showcase} name="showcase" value="3rdPlanetEvents">
				<div class="space-y-2">
					<h3 class="h3">Events</h3>
				</div>
			</ListBoxItem>
		</ListBox>
	</div>
	<!-- Preview -->
	<div class="col-span-2">
		<DocsPreview label={showcase} regionPreview="min-h-[320px]">
			<svelte:fragment slot="preview">
				{#if showcase === '3rdPlanetMusic'}
					<Accordion autocollapse class="card p-4 text-token">
						{#each genres as genre}
							<AccordionItem open>
								<svelte:fragment slot="lead">
									<i class="fa-solid fa-music text-xl w-6 text-center" />
								</svelte:fragment>
								<svelte:fragment slot="summary">
									<p class="font-bold text-2xl">{genre}</p>
								</svelte:fragment>
								<svelte:fragment slot="content">
									<section class="p-4 grid grid-cols-2 md:grid-cols-4 gap-4" use:loadRosters>
										{#each b as musician}	
											<a href={musician.route}>
												<div class="flex flex-col items-center space-y-4 overflow-hidden">
													<img class="aspect-square w-full rounded-container-token" src={musician.pic[0]} alt="example" />
													<span class="badge variant-soft">{musician.name}</span>
												</div>
											</a>
										{/each}
									</section>
								</svelte:fragment>
							</AccordionItem>
						{/each}
					</Accordion>
				{:else if showcase === '3rdPlanetArt'}
					{#if !artLoaded}
						<HomePlaceholder />
					{/if}
					<section class="p-4 grid grid-cols-2 md:grid-cols-4 gap-4" use:loadRosters>
						{#each a as artist}
								<a href={artist?.route}>
									<div class="flex flex-col items-center space-y-4 overflow-hidden">
										<img class="aspect-square w-full rounded-container-token" src={artist?.pic[0]} alt="example" />
										<span class="badge variant-soft">{artist?.title}</span>
									</div>
								</a>
							{/each}	
					</section>
				{:else if showcase === '3rdPlanetEvents'}
					<!-- <button class="btn variant-filled" on:click={modalEvents}>Open Calander</button> -->
					<iframe
						class="bg-black w-full aspect-video overflow-hidden"
						title="3rdPlanetEvents"
						src="https://calendar.google.com/calendar/embed?height=720&wkst=2&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=1&showPrint=0&mode=AGENDA&src=M3BsYW5ldHN0dWRpb0BnbWFpbC5jb20&color=%23D50000"
						style="border-width:0"
						width="1280"
						height="720"
						frameborder="0"
						scrolling="no"
					/>
				{/if}
			</svelte:fragment>
		</DocsPreview>
	</div>
</div>
