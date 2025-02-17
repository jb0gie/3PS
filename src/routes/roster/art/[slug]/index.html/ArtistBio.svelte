<script>
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import ArtistGallery from './ArtistGallery.svelte';
	export let artist;

	const headStyle =
		'supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-75 mx-6 lg:mx-0 border-b bg-background/95 shadow-sm backdrop-blur';
</script>

<div class="max-w-4xl flex items-center lg:h-[500px] flex-wrap mx-auto my-32 lg:my-2">
	<!--Main Col-->
	<div class={headStyle}>
		<div class="md:p-4 text-center lg:text-left">
			<!-- Image for mobile view-->
			<div
				class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
				style="background-image: url({artist?.pic[0]})"
			></div>
			<h1 class="text-3xl font-bold pt-8 lg:pt-0">About {artist?.title}</h1>
			<p class="pt-4 text-base items-center">
				{@html artist?.exp}
			</p>
			<div class="pt-6 pb-4">
				<Dialog.Root>
					<Dialog.Trigger class={buttonVariants({ variant: 'link' })}>
						<h1 class="text-xl pt-8 lg:pt-0">
							Read more about {artist?.title}
						</h1>
					</Dialog.Trigger>
					<Dialog.Content class="sm:max-w-[425px]">
						<Dialog.Header>
							<Dialog.Title>
								<h1 class="text-4xl">{artist?.title}</h1>
							</Dialog.Title>
							<Dialog.Description>
								<h4 class="text-lg">{@html artist?.bio}</h4>
							</Dialog.Description>
						</Dialog.Header>
					</Dialog.Content>
				</Dialog.Root>
			</div>
		</div>
	</div>
	<!--Img Col-->
	<div class="lg:relative w-full lg:w-2/5">
		<ArtistGallery {artist} />
	</div>
</div>
<!-- <div class="relative overflow-hidden mt-16">
	<div class="max-w-7xl mx-auto">
		<div class="relative z-10 pb-8sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
			<div class="pt-1" />
			<main
				class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
			>
				<div class="sm:text-center lg:text-left">
					<h2 class="my-6 text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl">
						About {artist.title}
					</h2>
					<p class="text-xl md:pr-10">{@html artist?.bio}</p>
				</div>
			</main>
		</div>
	</div>
	<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
		<img
			class="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
			src={artist?.pic[0]}
			alt={artist?.desc}
		/>
	</div>
</div> -->
