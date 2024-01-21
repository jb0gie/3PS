<script>
	import OrbGlow from '../../lib/components/OrbGlow.svelte';

	const kuri = {
		title: `<b>KURI</b><br /><i>a.k.a</i><br />"<b>THE VTUBER</b>"`,
		paragraph: `<p>Visual Artist / Designer / VTuber! Gulian specializes in 3D and VFX. His styles include “Y2K” or Depthcore. He is deeply influenced by postmodernism, often incorporating its principles into his work. His art often challenges traditional boundaries, reflecting the abstract and unconventional nature of postmodern art.</p><br /><p>He is proficient in Photoshop, Blender, Cinema4D, After Effects, and more. He strives for perfection in his work. His passion for abstract art is evident in his designs, where he plays with form, color, and space to create unique visuals. This abstract influence, combined with his technical skills, results in a distinctive style that sets his work apart.</p>`
	};
</script>

<div class="relative rounded-xl overflow-hidden mt-16">
	
	<div class="max-w-7xl mx-auto">
		<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			<img
				class="h-56 w-full object-cover rounded-full object-top sm:h-72 sm:rounded-lg md:h-96 lg:w-full lg:h-full"
				src="https://pbs.twimg.com/profile_images/1712861383597912065/T59n0VJE.jpg"
				alt=""
			/>
		</div>
		<div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
			<div class="pt-1" />
			<OrbGlow />
			<main
				class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
			>
				<div class="sm:text-center lg:text-left">
					<h2 class="my-6 text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl">
						{@html kuri.title}
					</h2>
					<p class="p-2 text-xl">{@html kuri.paragraph}</p>
					<div class="p-4 space-y-4">
						<h6 class="h6">FOUNDER</h6>
					</div>
					<hr class="opacity-50" />
				</div>
			</main>
		</div>
	</div>
</div>