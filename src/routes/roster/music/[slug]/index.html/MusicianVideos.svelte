<script lang="ts">
	export let musician;

	const section = `
		w-full mx-auto 
		grid grid-cols-1 
		sm:grid-cols-2 
		lg:grid-cols-3
		gap-4 sm:gap-6 lg:gap-8
		mt-6 sm:mt-8 mb-4 sm:mb-5
		px-2 sm:px-4
	`;

	const tabsContent = `
		border-none p-0 
		outline-none
		overflow-x-hidden
		overflow-y-auto
		max-w-full
	`;

	const videoWrapper = `
		relative
		w-full
		aspect-video
		rounded-lg
		overflow-hidden
		shadow-md
		hover:shadow-lg
		transition-shadow
	`;
</script>

<div class={tabsContent}>
	<section class={section}>
		{#if musician?.vids}
			{#each musician.vids.split('</iframe>') as video}
				{#if video.trim()}
					<div class={videoWrapper}>
						{@html video + '</iframe>'}
					</div>
				{/if}
			{/each}
		{/if}
	</section>
</div>
