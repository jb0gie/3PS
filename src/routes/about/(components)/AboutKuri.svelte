<script>
	import OrbGlow from '$lib/components/orb-glow.svelte';
	import pfp from '$lib/images/kuri.jpg';
	const kuri = {
		title: `<b>KURI</b><br /><i>"THE VTUBER"</i>`,
		paragraph: `<p>Visual Artist / Designer / VTuber! Kuri specializes in 3D and VFX. Their styles include “Y2K” or Depthcore. They are deeply influenced by postmodernism, often incorporating its principles into his work.</p><br /><p>Being proficient in Photoshop, Blender, Cinema4D, After Effects, and more. Having passion for abstract art is evident in his designs, where they plays with form, color, and space to create unique visuals.	</p>`,
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
						{@html kuri.title}
					</h2>
					<div class="flex justify-center">
						<img src={kuri.pic} alt="" class="h-48 w-48 rounded-full" />
					</div>
					<blockquote class="mt-10">
						<p class="text-base leading-loose">
							{@html kuri.paragraph}
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
