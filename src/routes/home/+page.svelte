<script>
	import { Button } from '$lib/components/ui/button';
	import OrbGlow from '$lib/components/orb-glow.svelte';
	import HeroCard from './(components)/HeroCard.svelte';
	import LogoPlanet from './(components)/LogoPlanet.svelte';
	import FootCard from './(components)/FootCard.svelte';
	import Partners from './(components)/Partners.svelte';
	import World from './(components)/World.svelte';
	// import Mints from './(components)/Mints.svelte';
	// import Stats from './(components)/Stats.svelte';

	let { data } = $props();
	let partners = $derived(data.partners);

	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone font-bold';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone font-bold';

	const gif0 = 'https://i.giphy.com/media/jtvB77L0afuXGlO5Uh/giphy-downsized-large.gif';
	const gif1 =
		'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjFrd3N1cng5Ymc3bWw2ODZxbmFydGtnOGpnYW5nb2h4cmo5anhwdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlBaC5Kp9cXZDTa/giphy.gif';
	const gif2 =
		'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjIzOHgwd3BlMmR2NjFuYTF2OW15cWZ1d2ZpOTJubG5idzg2djExMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ZsXDnFsBnFWoiIg/giphy.gif';
	const gif3 =
		'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG9hcTg2ZXJuMTU0cW5neWNiYjNmMm40bnhmY2ppd3J4MTA3Y3FzZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oriO773ExvGHlXtmw/giphy.gif';
	const gif4 =
		'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExejZmMmJ5cWtxZGZkb3NwanJubmI0MGVuand5dW1qcDJ4MjdmY3FybSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JpScsr53qh6sR6dSeJ/giphy.gif';
	const gif5 =
		'https://64.media.tumblr.com/fb17c027e55aee792198f10bd2ae87b3/tumblr_padcn35FIB1qby9yzo1_540.gif';
	const gif6 = 'https://i.giphy.com/l0HlBaC5Kp9cXZDTa.webp';
	const world1 = 'https://hyperfy.io/3ps';
	const world2 =
		'https://www.spatial.io/s/Third-Planet-Studio-Artist-Showcase-62a490b9a214750001dc4957?share=7798857155842536753';
</script>

<div class="flex justify-between">
	<OrbGlow />
	<div class="hidden md:block">
		<World>
			<svelte:fragment slot="title">Heads up!</svelte:fragment>
			<svelte:fragment slot="description">
				<code>ctrl+b or cmd+b to open the sidebar</code>
				<!-- <a class="btn" href={world1} target="_blank"> Visit us in hyperfy.io</a> -->
			</svelte:fragment>
		</World>
	</div>
	<!-- <World>
		<svelte:fragment slot="title">Heads up!</svelte:fragment>
		<svelte:fragment slot="description">
			<a
				class="btn"
				href={world2}
				target="_blank">Visit 3PS on spatial.io</a
			>
		</svelte:fragment>
	</World> -->
</div>

<div class="h-5 md:h-16"></div>

<p class="max-w-5xl text-4xl font-bold md:text-6xl lg:pr-24 lg:text-7xl">
	Where <span class={grad1}>Art</span> &amp; <span class={grad2}>Music</span>
	Unite in the Boundless Realm of creativity
</p>

<div class="h-5 md:h-8"></div>

<p class="max-w-7xl text-3xl md:text-3xl">
	This is <span class={grad1}>Third</span><span class={grad2}>Planet</span> Studio
</p>

<div class="h-6 md:h-2"></div>

<div class="mx-auto grid max-w-7xl gap-8 sm:pt-3 md:grid-cols-2">
	<div class="flex flex-col justify-center">
		<h2 class="inline self-start text-6xl font-bold">
			What <span
				style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url({gif0});"
			>
				We Are</span
			>
		</h2>
		<div class="h-6"></div>
		<div class="max-w-md sm:max-w-lg md:max-w-md lg:max-w-sm xl:max-w-xl">
			<p class="text-2xl md:pr-20 lg:pr-10">
				<span class={grad1}>Third</span><span class={grad2}>Planet</span> Studio is your portal to a
				new dimension of creativity.
			</p>
			<br />
			<p class="text-2xl md:pr-20 lg:pr-10">
				We're not your typical virtual music and art group. We believe in empowering artists with
				100% ownership of their work and absolute creative freedom.
			</p>
		</div>
	</div>
	<div>
		<div class="relative">
			<div class="anim-float-avatar relative z-[1]">				
					<HeroCard />
			</div>
			<div class="absolute left-[50%] top-[50%] z-0 -translate-x-[50%] -translate-y-[50%]">
				<div
					class="flex aspect-square w-96 items-center justify-center rounded-full border-2 border-black/5 dark:border-white/5"
				>
					<OrbGlow />
				</div>
			</div>
		</div>
	</div>
</div>
<div class="h-12 md:h-24"></div>
<br />
<p class="text-4xl">
	<span class=""> In the boundless realm, where technology and creativity converge, </span>
	<span class="">
		<span
			class="bg-gradient-to-r from-yellow-400 to-pink-600 bg-clip-text font-extrabold text-transparent"
		>
			ThirdPlanet Studio
		</span> stands as the epicenter where art and music find their harmonious union.
	</span>
</p>

<div class="h-12 md:h-10"></div>
<!-- <Stats />
<div class="h-20" />
<Mints />
<div class="h-20" /> -->

<div class="mx-auto grid max-w-7xl gap-8 sm:pt-24 md:grid-cols-2">
	<div>
		<FootCard />
	</div>
	<div class="relative">
		<div class="flex flex-col justify-center">
			<h2 class="inline self-start text-6xl font-bold">
				What <span
					style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url({gif1});"
					>We Do</span
				>
			</h2>
			<div class="h-6"></div>
			<p class="text-xl md:pr-10">
				At <span class={grad1}>Third</span><span class={grad2}>Planet</span>, we're all about
				rewriting the rules. We specialize in crafting onchain tailored to your unique vision. No
				more worrying about the industry's "<span
					style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url({gif6});"
					>old ways.</span
				>"
			</p>
			<div class="h-8"></div>
			<div class="grid grid-cols-2 gap-4 border-t border-gray-800 pt-8">
				<div>
					<p class="text-center font-semibold sm:text-2xl md:text-3xl">
						Made with <span
							style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url({gif3});"
							>love</span
						>
					</p>
					<div class="h-4"></div>
					<p class="text-md text-center md:text-left">
						We're not a record label or gallery, We're your advocates for full ownership and dignity
						in your art.
					</p>
				</div>
				<div>
					<p class="text-center font-semibold sm:text-2xl md:text-3xl">
						Build with <span
							style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url({gif5});"
							>ease</span
						>
					</p>
					<div class="h-4"></div>
					<p class="text-md text-center md:text-left">
						Join us on this journey to redefine the creative onchain landscape in the digital age.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="h-5 md:h-20"></div>

<!-- Add this new Events CTA section -->
<div class="h-5"></div>
<div class="mx-auto max-w-7xl">
	<div
		class="relative overflow-hidden rounded-3xl p-8 md:p-12"
	>
		<OrbGlow />
		<div class="relative z-10">
			<h2 class="text-4xl font-bold tracking-tight text-white md:text-5xl">
				Join Our Next <span
					style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url({gif2});"
					>Event</span
				>
			</h2>
			<p class="mt-4 max-w-2xl text-lg text-white/80">
				Experience music and art in a whole new dimension. Our events bring together creators and
				fans in immersive virtual spaces.
			</p>
			<div class="mt-8 flex flex-wrap gap-4">
				<Button
					variant="secondary"
					size="lg"
					class="bg-white/10 backdrop-blur hover:bg-white/20"
				>
					<a href="/events">View Upcoming Events</a>
				</Button>
				<Button
					variant="outline"
					size="lg"
					class="border-white/10 bg-white/5 text-white hover:bg-white/10"
				>
					<a href="/contact">Host an Event</a>
				</Button>
			</div>
		</div>
		<div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
	</div>
</div>

<div class="h-5 md:h-20"></div>
<Partners {data} />

<style lang="postcss">
	.section-container {
		@apply mx-auto w-full max-w-7xl p-4 py-16;
		md: py-24;
	}
	.anim-float-avatar {
		animation: float-up 13s ease-in-out infinite;
	}

	.anim-float-search {
		animation: float-up 14s ease-in-out infinite;
		animation-delay: 3s;
	}
	.anim-float-radio {
		animation: float-down 17s ease-in-out infinite;
	}

	.anim-float-button {
		animation: float-up 15s ease-in-out infinite;
	}
	/* prettier-ignore */
	@keyframes float-up {
		0% { transform: translateY(0px); }
		50% { transform: translateY(-20px); }
		100% { transform: translateY(0px); }
	}
	/* prettier-ignore */
	@keyframes float-down {
		0% { transform: translateY(0px); }
		50% { transform: translateY(20px); }
		100% { transform: translateY(0px); }
	}
</style>
