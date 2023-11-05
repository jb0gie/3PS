<script>
	import OrbGlow from '../../lib/components/OrbGlow.svelte';
	export const binx = {
		title: `"<i>BINX</i>"a.k.a"<b>THE BAND MOM</b>"`,
		paragraph: `<p>Born directly into a family full of artists and musicians. Her mother was an Earnie award winning fashion designer in Manhattan, among other highly respected artists in her family including a Grammy award winning guitar hero!</p><br><p>She began working for the NYC night clubs in the late 90's, moved to the Rock, Hardcore, Punk scene where she helped local music newspapers and fell in love being on the road on tour.</p><br><p>She then worked her way to a world music record label where she catered to music genres from world music, folk, alternative to electronic.</p><br><p>After taking a break from the industry and moving on to event design, she stayed up to date with new technology.</p><br><p>Her goal is to help artists learn how to carry on their legacy through a decentralized network. She believes that we should all thrive at helping each other and do what each of us love!</p>`
	};
</script>

<div class="relative rounded-xl overflow-hidden mt-16">
		<OrbGlow />
	<div class="max-w-7xl mx-auto">
		<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
		<img
			class="h-56 w-full object-cover rounded-lg object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
			src="https://pbs.twimg.com/profile_images/1577684445833953281/SGrq5Coy_400x400.jpg"
			alt=""
		/>
	</div>
		<div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
			<div class="pt-1" />
			<main
				class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
			>
				<div class="sm:text-center lg:text-left">
					<h2 class="my-6 text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl">
						{@html binx.title}
					</h2>
					<p class="p-2 text-xl">{@html binx.paragraph}</p>
					<div class="p-4 space-y-4">
						<h6 class="h6">3PS FOUNDER</h6>
					</div>
					<hr class="opacity-50" />
				</div>
			</main>
		</div>
	</div>
</div>