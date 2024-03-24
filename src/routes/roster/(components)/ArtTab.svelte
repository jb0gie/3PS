<script>
	import Artist from './Artist.svelte';
	export let data;

	const desktopText = 'hold SHIFT and mouse scroll';

	const container =
		'flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center text-center items-center';
	const section =
		'w-fit mx-auto flex lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5';
	const tabsContent = 'border-none p-0 outline-non overflow-auto hover:overflow-auto';
</script>

<div class={container}>
	<div class="overflow-x-auto">
		<code class=" font-bold">{desktopText}</code>
	</div>
</div>

<div class={tabsContent}>
	<section class={section}>
		{#each data.artists as artist (artist.id)}
			<Artist {artist} />
		{/each}
	</section>
</div>
