<script>
	import NativeMinting from '$lib/components/NativeMinting.svelte';

	const text = {
		p1: `<p>Experience entertainment like never before with the Third Planet Studio All-Access Pass!</p><br><p>Get exclusive access to virtual token-gated concerts, skip lines at live performances, and enjoy merchandise discounts.</p>`,
		p2: `<p>Meet select performers up close for selfies and autographs at exclusive meet & greets.</p>`,
		p3: `<p>Don't miss out – get your All-Access Pass today and unlock a world of excitement!</p>`
	};
	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
</script>

<div class="mx-auto max-w-screen-xl">
	<div class="grid items-center gap-8 lg:grid-cols-2">
		<!-- Minting Section -->
		<div class="flex justify-center">
			<NativeMinting />
		</div>

		<!-- Content Section -->
		<div class="space-y-6">
			<h2 class="text-2xl font-bold sm:text-3xl lg:text-4xl">
				<span class={grad2}>Exclusive <span class={grad1}>Access</span></span>
			</h2>
			<div class="space-y-3 text-base sm:text-lg">
				{@html text.p1}
			</div>

			<h2 class="text-2xl font-bold sm:text-3xl lg:text-4xl">
				<span class={grad2}>Unlockable <span class={grad1}>Content</span></span>
			</h2>
			<div class="space-y-3 text-base sm:text-lg">
				{@html text.p2}
			</div>

			<div class="space-y-3 text-base sm:text-lg">
				{@html text.p3}
			</div>
		</div>
	</div>
</div>
