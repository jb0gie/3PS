<script>
	import PageTitle from '$lib/components/page-title.svelte';
</script>

<div>
	<div class="container mx-auto overflow-hidden p-4 md:rounded-lg md:p-10 lg:p-12">
		<PageTitle>
			<svelte:fragment slot="pageName">Claims</svelte:fragment>
		</PageTitle>
		<div class="mx-auto mb-12 max-w-3xl">
			<p class="text-4xl font-bold">
				<span class=""
					>Welcome to our Claims portal - your gateway to exclusive digital experiences and unique
					content.</span
				>
				<span class=""
					>Here, you'll find a curated collection of NFTs that unlock special access, pre-release
					music, and premium features.</span
				>
			</p>
			<div class="h-12 md:h-10"></div>
			<p class="text-2xl font-semibold md:pr-20 lg:pr-10">
				Whether you're interested in our All-Access Pass for exclusive events, early music releases
				from our artists, or exploring secure content delivery through Darkblock, each token opens
				doors to extraordinary experiences in the Third Planet Studio ecosystem.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<a href="/allaccess" class="group">
				<div
					class="relative overflow-hidden rounded-lg border bg-background p-2 transition-colors hover:border-primary"
				>
					<div class="flex flex-col items-center gap-4 p-6">
						<img
							src="https://i.imgur.com/TQKSRsd.png"
							alt="Third Planet Studio"
							class="h-40 w-40 object-contain transition-transform group-hover:scale-105"
						/>
						<div class="text-center">
							<h3 class="font-semibold">All Access Pass</h3>
							<p class="text-sm text-muted-foreground">
								Exclusive access to events, merchandise & more
							</p>
						</div>
					</div>
				</div>
			</a>

			<a
				href="https://thirdweb.com/polygon/0x30d3A5FBbd459825ab4C56F8db6d5C90f8c3C411/nfts/0"
				target="_blank"
				rel="noopener noreferrer"
				class="group"
			>
				<div
					class="relative overflow-hidden rounded-lg border bg-background p-2 transition-colors hover:border-primary"
				>
					<div class="flex flex-col items-center gap-4 p-6">
						<div class="flex h-40 w-40 items-center justify-center">
							<svg class="h-32 w-32 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
							</svg>
						</div>
						<div class="text-center">
							<h3 class="font-semibold">NFT Collection</h3>
							<p class="text-sm text-muted-foreground">
								View our complete Third Planet Studio Pass Collection V2
							</p>
						</div>
					</div>
				</div>
			</a>

			<!-- <a href="/migtrix" class="group">
				<div class="relative overflow-hidden rounded-lg border bg-background p-2 hover:border-primary transition-colors">
					<div class="flex flex-col items-center gap-4 p-6">
						<img 
							src="https://images.squarespace-cdn.com/content/v1/6468515f1bef743846cb10e5/e50447b6-5c47-4b78-86ed-ff5db24bb5d2/Migs718+Green+and+Black.png"
							alt="Migs718"
							class="h-40 w-40 object-contain transition-transform group-hover:scale-105"
						/>
						<div class="text-center">
							<h3 class="font-semibold">Migtrix</h3>
							<p class="text-sm text-muted-foreground">Pre-release exclusive "What Do I Know" by Migs718</p>
						</div>
					</div>
				</div>
			</a>

			<a href="/claim/darkblock" class="group">
				<div class="relative overflow-hidden rounded-lg border bg-background p-2 hover:border-primary transition-colors">
					<div class="flex flex-col items-center gap-4 p-6">
						<img 
							src="https://i.imgur.com/sx3OKdz.png"
							alt="Darkblock"
							class="h-40 w-40 object-contain transition-transform group-hover:scale-105"
						/>
						<div class="text-center">
							<h3 class="font-semibold">Darkblock Integration</h3>
							<p class="text-sm text-muted-foreground">Secure content delivery platform</p>
						</div>
					</div>
				</div>
			</a> -->
		</div>
	</div>
</div>
