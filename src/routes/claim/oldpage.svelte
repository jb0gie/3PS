<script>
	import { Button, buttonVariants } from '$lib/components/ui/button';
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
									<h2 class="text-base"><code>you're part of the music's journey.</code></h2>
								</Dialog.Title>
								<Dialog.Description>
									<div class="">
										<div>
											<a href="https://www.migs718.com/">
												<Button>migs718.com</Button>
											</a>
											<a href="https://www.instagram.com/mikeloco">
												<Button>@mikeloco on Instagram</Button>
											</a>
											<a href="https://thirdplanet.studio/">
												<Button>ThirdPlanetStudio</Button>
											</a>
										</div>

										<h4 class="text-lg">To access the unlockable content:</h4>
										<br />

										<ul class="text-lg">
											<li>1. Go to <a href="https://app.darkblock.io">darkblock</a></li>
											<br />
											<li>2. Click `Connect Wallet` make sure your on `Polygon` network</li>
											<br />
											<li>3. Select "What DoI Know" NFT</li>
											<br />
											<li>
												4. Click `Authenticate to access` Pop Up and Sign Transaction to view
												unlockable content.
											</li>
										</ul>
										<br />
										<h1 class="text-base">
											#EnterTheMigtrix #ExclusiveTrack #NFTAccess #LiveMusicExperience #Migs718
										</h1>
									</div></Dialog.Description
								>
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

<style>
	.video-docker {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
