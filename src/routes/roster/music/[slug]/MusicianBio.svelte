<script>
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import MusicianGallery from './MusicianGallery.svelte';
	export let musician;

	const headStyle =
		'supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-75 mx-6 lg:mx-0 border-b bg-background/95 shadow-sm backdrop-blur';
</script>

<div class="max-w-4xl flex items-center lg:h-[500px] flex-wrap mx-auto my-32 lg:my-2">
	<!--Main Col-->
	<div class={headStyle}>
		<div class="p-4 md:p-6 text-center lg:text-left">
			<!-- Image for mobile view-->
			<div
				class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
				style="background-image: url({musician?.pic[0]})"
			/>
			<h1 class="text-3xl font-bold pt-8 lg:pt-0">About {musician.name}</h1>
			<p class="pt-4 text-base items-center">
				{@html musician?.exp}
			</p>
			<div class="pt-6 pb-4">
				<Dialog.Root>
					<Dialog.Trigger class={buttonVariants({ variant: 'link' })}>
						<h1 class="text-xl pt-8 lg:pt-0">
							Read more about {musician?.name}
						</h1>
					</Dialog.Trigger>
					<Dialog.Content class="sm:max-w-[425px]">
						<Dialog.Header>
							<Dialog.Title>
								<h1 class="text-4xl">{musician?.name}</h1>
							</Dialog.Title>
							<Dialog.Description>
								<h4 class="text-lg">{@html musician?.bio}</h4>
							</Dialog.Description>
						</Dialog.Header>
					</Dialog.Content>
				</Dialog.Root>
			</div>
		</div>
	</div>
	<!--Img Col-->
	<div class="lg:relative w-full lg:w-2/5">
		<MusicianGallery {musician} />
	</div>
</div>
