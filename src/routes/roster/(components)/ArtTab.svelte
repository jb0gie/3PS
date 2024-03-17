<script>
	import Artist from './Artist.svelte';
	export let data;
</script>

<section
	class="w-fit mx-auto flex grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
>
	{#each data.artists as artist}
		<Artist {artist} />
	{/each}
</section>
