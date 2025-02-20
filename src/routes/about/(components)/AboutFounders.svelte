<script lang="ts">
	import type { RecordModel } from 'pocketbase';
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel';
	import OrbGlow from '$lib/components/orb-glow.svelte';

	const headStyle =
		'supports-[backdrop-filter]:bg-background/60 w-full bg-background/95 shadow-lg backdrop-blur transition-all duration-300 hover:shadow-xl rounded-2xl border border-gray-200/20';

	export let data: { team: RecordModel[] };
	const gif0 = 'https://i.giphy.com/media/jtvB77L0afuXGlO5Uh/giphy-downsized-large.gif';

</script>

<div class="container mx-auto px-4">
	<div class="items-center text-center">
		<h1
			class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text pb-2 text-4xl font-black tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
		>
			Meet Our Team
		</h1>

		<p class="mx-auto text-xl text-gray-400 md:text-2xl">
			The creative minds behind Third Planet,<br /> bringing together art, music, community and technology
		</p>

		<div class="mx-auto max-w-screen-xl py-8">
			<Carousel.Root
				opts={{
					align: 'start',
					loop: true
				}}
			>
				<Carousel.Content class="px-2 md:px-4">
					{#each data.team as member}
						<Carousel.Item class="w-full md:w-1/2 lg:w-1/3">
							<Card.Root class={headStyle}>
								<Card.Content class="relative overflow-hidden rounded-xl">
									<div class="mx-auto max-w-7xl">
										<div class="relative z-10 pb-4">
											<div class="pt-1"></div>
											<OrbGlow />
											<main
												class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
											>
												<div class="sm:text-center">
													<div class="flex justify-center">
														{#if member.pic?.[0]}
															<img
																src={member.pic[0]}
																alt={member.name}
																class="h-48 w-48 rounded-full object-cover"
															/>
														{:else}
															<div
																class="flex h-48 w-48 items-center justify-center rounded-full bg-gray-700"
															>
																<span class="text-5xl font-bold text-gray-400">
																	{member.name?.[0]?.toUpperCase() || '?'}
																</span>
															</div>
														{/if}
													</div>
													<h2
														class="my-2 text-2xl tracking-tight sm:text-6xl md:text-7xl"
														style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url({gif0});"
													>
														<b>{@html member.name .toUpperCase()}</b>
													</h2>
													<h2 class="my-2 text-2xl tracking-tight sm:text-6xl md:text-4xl">
														<b>"<i>{@html member.nickname}</i>"</b>
													</h2>
													
													<blockquote class="mt-10">
														<p class="text-xl leading-loose">
															{@html member.bio}
														</p>
													</blockquote>
													<div class="space-y-4 p-4">
														<h6 class="h6">{member.role}</h6>
													</div>
													<hr class="opacity-50" />
												</div>
											</main>
										</div>
									</div>
								</Card.Content>
							</Card.Root>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Previous class="hidden md:flex" />
				<Carousel.Next class="hidden md:flex" />
			</Carousel.Root>
		</div>
	</div>
</div>
