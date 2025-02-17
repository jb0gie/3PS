<script>
	import OrbGlow from '$lib/components/orb-glow.svelte';
	import pfp from '$lib/images/binx.jpg';
	export const binx = {
		title: `<b>BINX</b>`,
		tag: `<b>"<i>THE BAND MOM</i>"</b>`,
		paragraph: `<p>Born into a family of artists and musicians, she started her career in NYC night clubs in the late 90s, and moved to the Rock, Hardcore, Punk scene. She then transitioned to a world music record label, catering to various music genres.</p><br /><p>After a break from the industry and a stint in event design, she kept up with new technology. Her current goal is to help artists carry on their legacy through a decentralized network, fostering a community of mutual support and passion for their craft.</p>`,
		pic: pfp
	};
	const gif0 = 'https://i.giphy.com/media/jtvB77L0afuXGlO5Uh/giphy-downsized-large.gif';
</script>

<div class="relative rounded-xl overflow-hidden">
	<div class="max-w-7xl mx-auto">
		<div class="relative z-10 pb-4 ">
			<div class="pt-1"></div>
			<OrbGlow />
			<main
				class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
			>
				<div class="sm:text-center lg:text-left">
					<h2 
						class="my-2 text-2xl tracking-tight sm:text-6xl md:text-7xl" 
						style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url({gif0});">
						{@html binx.title}
					</h2>
					<h2 class="my-2 text-2xl tracking-tight sm:text-6xl md:text-4xl">
						{@html binx.tag}
					</h2>
					<div class="flex justify-center">
						<img src={binx.pic} alt="" class="h-48 w-48 rounded-full" />
					</div>
					<blockquote class="mt-10">
						<p class="text-xl leading-loose">
							{@html binx.paragraph}
						</p>
					</blockquote>
					<div class="p-4 space-y-4">
						<h6 class="h6">FOUNDER</h6>
					</div>
					<hr class="opacity-50" />
				</div>
			</main>
		</div>
	</div>
</div>
