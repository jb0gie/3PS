<script>
	import OrbGlow from '$lib/components/orb-glow.svelte';
	import pfp from '/images/kuri.jpg';

	const kuri = {
		title: `<b>KURI</b>`,
		tag: `<b>"<i>THE VTUBER</i>"</b>`,
		paragraph: `<p>Visual Artist / Designer / VTuber! Kuri specializes in 3D and VFX. Their styles include "Y2K" or Depthcore. They are deeply influenced by postmodernism, often incorporating its principles into his work.</p><br /><p>Being proficient in Photoshop, Blender, Cinema4D, After Effects, and more. Having passion for abstract art is evident in his designs, where they plays with form, color, and space to create unique visuals.	</p>`,
		pic: pfp
	};
	const gif0 = 'https://i.giphy.com/media/jtvB77L0afuXGlO5Uh/giphy-downsized-large.gif';
</script>


<div class="relative overflow-hidden rounded-xl">
	<div class="mx-auto max-w-7xl">
		<div class="relative z-10 pb-4">
			<div class="pt-1"></div>
			<OrbGlow />
			<main
				class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
			>
				<div class="sm:text-center lg:text-left">
					<h2
						class="my-2 text-2xl tracking-tight sm:text-6xl md:text-7xl"
						style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url({gif0});"
					>
						{@html kuri.title}
					</h2>
					<h2 class="my-2 text-2xl tracking-tight sm:text-6xl md:text-4xl">
						{@html kuri.tag}
					</h2>
					<div class="flex justify-center">
						<img src={kuri.pic} alt="" class="h-48 w-48 rounded-full" />
					</div>
					<blockquote class="mt-10">
						<p class="text-xl leading-loose">
							{@html kuri.paragraph}
						</p>
					</blockquote>
					<div class="space-y-4 p-4">
						<h6 class="h6">FOUNDER</h6>
					</div>
					<hr class="opacity-50" />
				</div>
			</main>
		</div>
	</div>
</div>



