<script>
	import World from './(components)/World.svelte';
	import HeroCard from './(components)/HeroCard.svelte';
	import Mints from './(components)/Mints.svelte';
	import OrbGlow from '../../lib/components/OrbGlow.svelte';
	import FootCard from './(components)/FootCard.svelte';
	import Partners from './(components)/Partners.svelte';
	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
</script>

<div>
	<!-- <Menu /> -->
	<OrbGlow />
	<div class="container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
		<div class="flex justify-between">
			<World>
				<svelte:fragment slot="title">Heads up!</svelte:fragment>
				<svelte:fragment slot="description">
					<a class="btn" href="https://hyperfy.io/3ps" target="_blank">Visit 3PS on hyperfy.io</a>
				</svelte:fragment>
			</World>
			<World>
				<svelte:fragment slot="title">Heads up!</svelte:fragment>
				<svelte:fragment slot="description">
					<a class="btn" href="https://www.spatial.io/s/Third-Planet-Studio-Artist-Showcase-62a490b9a214750001dc4957?share=7798857155842536753" target="_blank">Visit 3PS on spatial.io</a>
				</svelte:fragment>
			</World>
		</div>

		<div class="h-24 md:h-20" />

		<p class="text-4xl font-bold max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
			Where <span class={grad1}>Art</span> &amp; <span class={grad2}>Music</span>
			Unite in the Boundless Realm of Web3
		</p>

		<div class="h-10" />

		<p class="max-w-2xl text-xl md:text-2xl">Welcome to Third Planet Studio</p>

		<div class="h-24 md:h-20" />

		<div class="grid gap-8 md:grid-cols-2">
			<div class="flex flex-col justify-center">
				<h2 class="self-start inline text-4xl font-bold">What we are</h2>
				<div class="h-6" />
				<p class="text-xl md:pr-10">
					Third Planet Studio is your portal to a new dimension of creativity. We're not your
					typical virtual music and art group. We believe in empowering artists with 100% ownership
					of their work and absolute creative freedom.
				</p>
			</div>
			<div>
				<HeroCard />
			</div>
		</div>

		<div class="h-64 md:h-20" />
		<br />
		<p class="text-4xl">
			<span class="text-gray-400">
				In the boundless realm of Web3, where technology and creativity converge,
			</span>
			<span class="text-gray-600">
				Third Planet Studio stands as the epicenter where art and music find their harmonious union.
			</span>
		</p>

		<div class="h-24 md:h-20" />

		<Mints />

		<div class="h-20" />

		<div class="grid gap-8 md:grid-cols-2">
			<div>
				<FootCard />
			</div>
			<div class="flex flex-col justify-center">
				<h2 class="self-start inline text-4xl font-bold">What We Do</h2>
				<div class="h-6" />
				<p class="text-xl md:pr-10">
					At 3PS, we're all about rewriting the rules. We specialize in crafting NFT smart contracts
					tailored to your unique vision. No more worrying about the industry's "<span
						style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url('https://i.giphy.com/media/jtvB77L0afuXGlO5Uh/giphy-downsized-large.gif');"
						>old ways.</span
					>"
				</p>
				<div class="h-8" />
				<div class="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
					<div>
						<p class="font-semibold">Made with love</p>
						<div class="h-4" />
						<p class="">
							We're not a record label or gallery; we're your advocates for full ownership and
							dignity in your art.
						</p>
					</div>
					<div>
						<p class="font-semibold">It's easy to build</p>
						<div class="h-4" />
						<p class="">
							Join us on this journey to redefine the artistic landscape in the digital age. Let's
							make Web3 work for you.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="h-5 md:h-40" />
		<Partners />
	</div>
</div>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-24;
	}
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-red-500/50;
		}
		33% {
			@apply bg-lime-500/50;
		}
		66% {
			@apply bg-pink-500/50;
		}
		100% {
			@apply bg-yellow-500/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
