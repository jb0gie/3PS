<script>
	import * as Tooltip from '$lib/components/ui/tooltip';
	import WebBg from './(components)/WebBg.svelte';
	import ClaimHero from './(components)/ClaimHero.svelte';
	import ClaimInfo from './(components)/ClaimInfo.svelte';
	const name = 'Migtrix';
	const pic1 = 'https://i.imgur.com/F90cAmF.jpeg';
	const glass =
		'container supports-[backdrop-filter]:bg-background/60 space-y-2 z-10 rounded-lg shadow-2xl opacity-75 mx-6 lg:mx-0 border-b bg-background/95 shadow-sm backdrop-blur';
	const cImg = 'w-24';
	export let data;
</script>

<section
	class="relative min-h-screen flex flex-col sm:flex-col items-center justify-center text-center text-white p-8"
>
	<!-- WebBg.svelte -->
	<WebBg />
	<div class={glass}>
		<div class="flex flex-wrap">
			<div class="sm:w-full md:w-8/12 mb-10">
				<div class="mx-auto sm:p-4">
					<nav class="items-center">
						<img src={data.migs.pic} alt="" class="w-64" />
						<br />
					</nav>
					<ClaimHero />
				</div>
			</div>
			<img src={pic1} alt={name} class="p-8 w-96 sm:w-1/3 md:w-1/3 object-cover" />
		</div>
		<ClaimInfo />
		<div class="h-4" />
		<header class="px-4 lg:flex mt-10 items-center h-full lg:mt-0">
			<div class="w-full">
				<h1 class="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold">
					<span class="text-green-700">Mastered</span> Version
				</h1>
				<p class="text-sm sm:text-base md:text-lg mb-10">
					<code>
						Launch Set for 2025, with an airdrop to all NFT holders upon release.<br />
						Don't miss your chance to be part of this groundbreaking experience.<br />
						Secure your NFT now and join us in the Migtrix, where digital exclusivity meets live concert
						vibes.
					</code>
				</p>
			</div>
		</header>
		<div class="h-4" />
		<header class="px-4 lg:flex mt-10 items-center h-full lg:mt-0">
			<div class="w-full">
				<h1 class="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold">
					Access <span class="text-green-700">Unlockable Content</span>
				</h1>
				<p class="text-sm sm:text-base md:text-lg mb-10">
					<code>
						Launch Set for 2025, with an airdrop to all NFT holders upon release.<br />
						Don't miss your chance to be part of this groundbreaking experience.<br />
						Secure your NFT now and join us in the Migtrix, where digital exclusivity meets live concert
						vibes.
					</code>
				</p>
			</div>
		</header>
		<div class="h-4" />
		<ul class="flex justify-center mt-5 space-x-6 mx-auto items-center p-8">
			<Tooltip.Root>
				<Tooltip.Trigger>
					<li>
						<a href={data.migs.site}>
							<img class={cImg} src={data.migs.pic} alt={data.migs.name} />
						</a>
					</li>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>{data.migs.name}'s website</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger>
					<li>
						<a href={data.loco.site}>
							<img class={cImg} src={data.loco.pic} alt={data.loco.name} />
						</a>
					</li>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>{data.loco.name} on Instagram</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger>
					<li>
						<a href={data.tp.site}>
							<img class={cImg} src={data.tp.pic} alt={data.tp.name} />
						</a>
					</li>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>{data.tp.name}</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger>
					<li>
						<a href={data.darkblck.site}>
							<img class={cImg} src={data.darkblck.pic} alt={data.darkblck.name} />
						</a>
					</li>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>{data.darkblck.name}</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</ul>
	</div>
</section>

<!-- <div class="relative flex h-screen items-center">
	<img
		src={pic1}
		alt={name}
		class="w-auto h-[512px] object-contain object-center rounded-2xl"
	/>
	<div class={headStyle + '  ' + 'max-w-full md:left-20'}>
		<code class="text-white text-center text-5xl p-8">{@html name}</code>
		<div
			class="mix-blend-screen px-10 py-5 rounded-xl sm:text-xl sm:rounded-l-xl xl:text-2xl xl:rounded-l-2xl"
		>
			<code
				>Dive deep into the exclusive pre-release of "What Do I Know" by Migs718.<br /><br />
				Available only through this unique NFT or at select live performances.<br /><br
				/>Experience this special edition of the song in a way that's reserved for the true fans
				before anyone else.</code
			>
		</div>
		<br />
		<Button variant="link" class="text-4xl" href="">MINT ME</Button> 
		<ClaimLink />
	</div>
	<img
		src={pic1}
		alt={name}
		class="w-auto h-[512px] object-contain object-center rounded-2xl"
	/>
</div> -->
