<script lang="ts">
	export const binx = {
		title: `"<i>BINX</i>"a.k.a"<b>THE BAND MOM</b>"`,
		paragraph: `<p>Born directly into a family full of artists and musicians. Her mother was an Earnie award winning fashion designer in Manhattan, among other highly respected artists in her family including a Grammy award winning guitar hero!</p><br><p>She began working for the NYC night clubs in the late 90's, moved to the Rock, Hardcore, Punk scene where she helped local music newspapers and fell in love being on the road on tour.</p><br><p>She then worked her way to a world music record label where she catered to music genres from world music, folk, alternative to electronic.</p><br><p>After taking a break from the industry and moving on to event design, she stayed up to date with new technology.</p><br><p>Her goal is to help artists learn how to carry on their legacy through a decentralized network. She believes that we should all thrive at helping each other and do what each of us love!</p>`,
	}
</script>
<div class="card shadow-xl overflow-hidden max-w-[800px] text-token">
	<header>
		<!-- <img src={getImageLink({ id: 'vjUokUWbFOs', w: 400, h: 175 })} class="bg-black/50 w-full aspect-[21/9]" alt="Post" /> -->
	</header>
	<div class="p-4 space-y-4">
		<h6 class="h6">3PS FOUNDER</h6>
		<h3 class="h3">{@html binx.title}</h3>
		<article>
			<p class="opacity-75">{@html binx.paragraph}</p>
		</article>
	</div>
	<hr class="opacity-50" />
</div>