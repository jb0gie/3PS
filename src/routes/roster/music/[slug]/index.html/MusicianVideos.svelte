<script>
	export let musician;

	const section =
		'w-fit mx-auto flex lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 mt-10 mb-5';
	const tabsContent = 'border-none p-0 outline-non overflow-auto hover:overflow-auto';
</script>

<div class={tabsContent}>
	<section class={section}>
		{@html musician?.vids}
	</section>
</div>
