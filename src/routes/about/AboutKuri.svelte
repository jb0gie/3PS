<script lang="ts">
	const kuri = {
		title: `"<i>KURI</i>"a.k.a"<b>THE VTUBER </b>"`,
		paragraph: `<p>Visual Artist / Designer / VTuber! Gulian specializes in 3D and VFX. His styles include "Y2K" or Depthcore. He is proficient in Photoshop, Blender, Cinema4D, After Effects, and more. He strives for perfection in his work.</p>`,
	}
</script>
<div class="card shadow-xl overflow-hidden max-w-[800px] text-token">
	<header>
		<!-- <img src={getImageLink({ id: 'vjUokUWbFOs', w: 400, h: 175 })} class="bg-black/50 w-full aspect-[21/9]" alt="Post" /> -->
	</header>
	<div class="p-4 space-y-4">
		<h6 class="h6">3PS FOUNDER</h6>
		<h3 class="h3">{@html kuri.title}</h3>
		<article>
			<p class="opacity-75">{@html kuri.paragraph}</p>
		</article>
	</div>
	<hr class="opacity-50" />
</div>