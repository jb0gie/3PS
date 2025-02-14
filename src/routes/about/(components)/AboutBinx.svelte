<script>
	import OrbGlow from '$lib/components/orb-glow.svelte';
	import pfp from '$lib/images/binx.jpg';
	export const binx = {
		title: `<b>BINX</b><br />"<i>THE BAND MOM</i>"`,
		paragraph: `<p>Born into a family of artists and musicians, she started her career in NYC night clubs in the late 90s, and moved to the Rock, Hardcore, Punk scene. She then transitioned to a world music record label, catering to various music genres.</p><br /><p>After a break from the industry and a stint in event design, she kept up with new technology. Her current goal is to help artists carry on their legacy through a decentralized network, fostering a community of mutual support and passion for their craft.</p>`,
		pic: pfp
	};
</script>

<div class="relative rounded-xl overflow-hidden mt-16">
	<div class="max-w-7xl mx-auto">
		<div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
			<div class="pt-1"></div>
			<OrbGlow />
			<main
				class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
			>
				<div class="sm:text-center lg:text-left">
					<h2 class="my-6 text-2xl tracking-tight sm:text-3xl md:text-4xl">
						{@html binx.title}
					</h2>
					<div class="flex justify-center">
						<img src={binx.pic} alt="" class="h-48 w-48 rounded-full" />
					</div>
					<blockquote class="mt-10">
						<p class="text-base leading-loose">
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
