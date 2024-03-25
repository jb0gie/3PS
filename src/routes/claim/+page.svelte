<script>
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	const pic1 = 'https://i.imgur.com/F90cAmF.jpeg';
	const headStyle =
		'supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-75 mx-6 lg:mx-0 border-b bg-background/95 shadow-sm backdrop-blur';
</script>

<section class="container mx-auto p-4 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
	<div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
		<iframe
			src="https://rezmason.github.io/matrix/?version=resurrections"
			frameborder="0"
			style="overflow:hidden;height:100%;width:100%"
			height="100%"
			width="100%"
		/>
	</div>

	<div class="max-w-4xl flex items-center lg:h-[500px] flex-wrap mx-auto my-32 lg:my-2">
		<!--Main Col-->
		<div class={headStyle}>
			<div class="md:p-4 text-center lg:text-left">
				<!-- Image for mobile view-->
				<div
					class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
					style="background-image: url({pic1})"
				/>
				<h1 class="text-2xl"><code>Enter the Migtrix</code>❗</h1>
				<p class="pt-4 text-xl items-center">
					<code class="justify-center">
						Dive deep into the exclusive pre-release of "What Do I Know" by Migs718.<br /><br />
						Available only through this unique NFT or at select live performances.<br /><br
						/>Experience this special edition of the song in a way that's reserved for the true fans
						before anyone else.
					</code>
				</p>
				<div class="pt-6 pb-4">
					<Dialog.Root>
						<Dialog.Trigger class={buttonVariants({ variant: 'link' })}>
							<h1 class="text-lg pt-8 lg:pt-0"><code>Why should I mint</code> ❓</h1>
						</Dialog.Trigger>
						<Dialog.Content class="sm:max-w-[425px]">
							<Dialog.Header>
								<Dialog.Title>
									<h1 class="text-2xl">Minting gets you 🎁</h1>
								</Dialog.Title>
								<div class="h-3" />
								<Dialog.Description>
									<h4 class="text-xl">
										Exclusive Access : This version is accessible ONLY with this NFT and at
										exclusive live events.<br /><br />Unlock the Music : Be part of a select
										audience that gets to witness this rare musical fusion.<br /><br /> Special Airdrop
										: The special version will be airdropped to NFT holders, distinct from the version
										released on Digital Service Providers (DSPs).
									</h4>
								</Dialog.Description>
							</Dialog.Header>
						</Dialog.Content>
					</Dialog.Root>
					<Dialog.Root>
						<Dialog.Trigger class={buttonVariants({ variant: 'link' })}>
							<h1 class="text-lg pt-8 lg:pt-0"><code>Coming soon</code> ❓</h1>
						</Dialog.Trigger>
						<Dialog.Content class="sm:max-w-[425px]">
							<Dialog.Header>
								<Dialog.Title>
									<h1 class="text-2xl"><code>Mastered Version</code> 👀</h1>
								</Dialog.Title>
								<div class="h-3" />
								<Dialog.Description>
									<h4 class="text-xl">
										Launch Set for 2025, with an airdrop to all NFT holders upon release.<br /><br
										/>Don't miss your chance to be part of this groundbreaking experience.<br /><br
										/>Secure your NFT now and join us in the Migtrix, where digital exclusivity
										meets live concert vibes.
									</h4>
								</Dialog.Description>
							</Dialog.Header>
						</Dialog.Content>
					</Dialog.Root>
					<Dialog.Root>
						<Dialog.Trigger class={buttonVariants({ variant: 'link' })}>
							<h1 class="text-lg pt-8 lg:pt-0"><code>More Links</code> 🔗</h1>
						</Dialog.Trigger>
						<Dialog.Content class="sm:max-w-[425px]">
							<Dialog.Header>
								<Dialog.Title>
									<h1 class="text-2xl">
										<code>Enter a realm where you're not just listening to music</code>
									</h1>
									<h2 class="text-lg"><code>you're part of the music's journey.</code></h2>
								</Dialog.Title>
								<Dialog.Description>
									<h4 class="text-lg">
										https://www.migs718.com/ https://www.instagram.com/mikeloco
										https://thirdplanet.studio/ To access the unlockable content:
									</h4>
									<ul class="text-xl">
										<li>
											1. Go to <a href="https://app.darkblock.io">darkblock</a>
										</li>
										<li>2. Click `Connect Wallet` make sure your on `Polygon` network</li>
										<li>3. Select "What DoI Know" NFT</li>
										<li>
											4. Click `Authenticate to access` Pop Up and Sign Transaction to view
											unlockable content.
										</li>
									</ul>

									<h1 class="text-base">
										#EnterTheMigtrix #ExclusiveTrack #NFTAccess #LiveMusicExperience #Migs718
									</h1>
								</Dialog.Description>
							</Dialog.Header>
						</Dialog.Content>
					</Dialog.Root>
				</div>
				<div />
			</div>
		</div>
		<!--Img Col-->
		<div class="lg:relative w-full lg:w-2/5">
			<img class="rounded-lg" src={pic1} alt="CLAIM NOW" />
		</div>
	</div>
</section>

<!-- <section class="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
	<section
		class="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1"
	>
		<img class="xl:max-w-6xl rounded-lg" src={pic1} alt="CLAIM NOW" />
		<div
			class="content supports-[backdrop-filter]:bg-background/60 bg-background/95 shadow-sm backdrop-blur p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5 rounded-xl"
		>
			<h1 class="text-3xl font-semibold mt-4 md:mt-10">Enter the Migtrix!</h1>
			<p class="my-3 text-justify font-medium leading-relaxed">
				Dive deep into the exclusive pre-release of "What Do I Know" by Migs718, available only
				through this unique NFT or at select live performances. Experience this special edition of
				the song in a way that's reserved for the true fans before anyone else.
			</p>
			<ul class="my-3 text-justify">
				<li>
					Exclusive Access:This version is accessible ONLY with this NFT and at exclusive live
					events. Unlock the Music: Be part of a select audience that gets to witness this rare
					musical fusion. Special Airdrop: The special version will be airdropped to NFT holders,
					distinct from the version released on Digital Service Providers (DSPs).
				</li>
				<li />
				<li />
			</ul>
			<p class="my-3 text-justify font-medium leading-relaxed">
				Mastered Version Launch: Set for 2025, with an airdrop to all NFT holders upon release.
				Don't miss your chance to be part of this groundbreaking experience. Secure your NFT now
				and join us in the Migtrix, where digital exclusivity meets live concert vibes.
			</p>
			<p class="my-3 text-justify font-medium leading-relaxed">
				Enter a realm where you're not just listening to music; you're part of the music's
				journey. https://www.migs718.com/ https://www.instagram.com/mikeloco
				https://thirdplanet.studio/ To access the unlockable content: 1. Go to app.DarkBlock.io 2.
				Click `Connect Wallet`, Select `Polygon` 3. Select "What Do I Know" NFT 4. Click
				`Authenticate to access` Pop Up and Sign Transaction to view unlockable content. You can
				view Darkblocks using the Darkblock web-app at app.darkblock.io, or the Darkblock TV App
				on Google or Amazon:
				https://play.google.com/store/apps/details?id=io.darkblock.darkblock&hl=en_US&gl=US
				https://www.amazon.com/Darkblock-NFT-Display/dp/B09B4FLQZ6/Amazon #EnterTheMigtrix
				#ExclusiveTrack #NFTAccess #LiveMusicExperience #Migs718
			</p>
			<button
				class="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800"
				>Read More</button
			>
		</div>
	</section>
</section> -->

<style>
	.video-docker {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
