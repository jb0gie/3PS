<script>
	import { Button } from '$lib/components/ui/button';
	import Mints from './(components)/Mints.svelte';
	import Stats from './(components)/Stats.svelte';
	import World from './(components)/World.svelte';
	import HeroCard from './(components)/HeroCard.svelte';
	import OrbGlow from '../../lib/components/OrbGlow.svelte';
	import FootCard from './(components)/FootCard.svelte';
	import Partners from './(components)/Partners.svelte';

	export let data;
	$: ({ partners } = data);

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

<div class="container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
	<div class="flex justify-between">
		<OrbGlow />
		<World>
			<svelte:fragment slot="title">Heads up!</svelte:fragment>
			<svelte:fragment slot="description">
				<a class="btn" href={world1} target="_blank"> Visit us in hyperfy.io</a>
			</svelte:fragment>
		</World>
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

	<div class="h-5 md:h-16" />

	<p class="text-4xl font-bold max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
		Where <span class={grad1}>Art</span> &amp; <span class={grad2}>Music</span>
		Unite in the Boundless Realm of creativity
	</p>

	<div class="h-5 md:h-8" />

	<p class="max-w-7xl text-3xl md:text-3xl">
		This is <span class={grad1}>Third</span><span class={grad2}>Planet</span> Studio
	</p>

	<div class="h-6 md:h-2" />

	<div class="mx-auto max-w-7xl sm:pt-3 grid gap-8 md:grid-cols-2">
		<div class="flex flex-col justify-center">
			<h2 class="self-start inline text-6xl font-bold">
				What <span
					style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url({gif0});"
				>
					We Are</span
				>
			</h2>
			<div class="h-6" />
			<div class="max-w-md xl:max-w-xl sm:max-w-lg lg:max-w-sm md:max-w-md">
				<p class="text-2xl md:pr-30 lg:pr-20">
					<span class={grad1}>Third</span><span class={grad2}>Planet</span> Studio is your portal to
					a new dimension of creativity.
				</p>
				<br />
				<p class="text-2xl md:pr-30 lg:pr-20">
					We're not your typical virtual music and art group. We believe in empowering artists with
					100% ownership of their work and absolute creative freedom.
				</p>
			</div>
		</div>
		<div>
			<div class="relative">
				<div class="anim-float-avatar relative z-[1]">
					<a class="p-2" href="https://twitter.com/3PlanetStudio" target="_blank" rel="noreferrer">
						<HeroCard />
					</a>
				</div>
				<div class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0">
					<div
						class="w-96 aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center"
					>
						<OrbGlow />
						<div
							class="w-[240px] aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="h-12 md:h-24" />
	<br />
	<p class="text-4xl">
		<span class=""> In the boundless realm, where technology and creativity converge, </span>
		<span class="">
			<span
				class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600"
			>
				ThirdPlanet Studio
			</span> stands as the epicenter where art and music find their harmonious union.
		</span>
	</p>

	<div class="h-12 md:h-10" />
	<!-- <Stats />
	<div class="h-20" />
	<Mints />
	<div class="h-20" /> -->

	<div class="mx-auto max-w-7xl sm:pt-24 grid gap-8 md:grid-cols-2">
		<div>
			<FootCard />
		</div>
		<div class="flex flex-col justify-center">
			<h2 class="self-start inline text-6xl font-bold">
				What <span
					style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url({gif1});"
					>We Do</span
				>
			</h2>
			<div class="h-6" />
			<p class="text-xl md:pr-10">
				At <span class={grad1}>Third</span><span class={grad2}>Planet</span>, we're all about
				rewriting the rules. We specialize in crafting onchain tailored to your unique vision. No
				more worrying about the industry's "<span
					style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url({gif6});"
					>old ways.</span
				>"
			</p>
			<div class="h-8" />
			<div class="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
				<div>
					<p class="font-semibold text-center md:text-3xl sm:text-2xl">
						Made with <span
							style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url({gif3});"
							>love</span
						>
					</p>
					<div class="h-4" />
					<p class="text-md text-center">
						We're not a record label or gallery<br /> We're your advocates for full ownership and dignity
						in your art.
					</p>
				</div>
				<div>
					<p class="font-semibold text-center md:text-3xl sm:text-2xl">
						Build with <span
							style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url({gif5});"
							>ease</span
						>
					</p>
					<div class="h-4" />
					<p class="text-md text-center">
						Join us on this journey to redefine the creative onchain landscape in the digital age.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="h-5 md:h-40" />
	<Partners {data} />
</div>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16;
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
