<script>
	import { Button } from '$lib/components/ui/button';
	export let musician;
</script>

<div class="relative flex h-screen">
	<img
		src={musician?.pic[1]}
		alt={musician?.name}
		class="h-full w-full object-cover object-center rounded-2xl"
	/>
	<div class="absolute top-1/2 left-10 max-w-full md:left-20">
		<div class=" text-white text-5xl py-4">{musician?.name}</div>
		<div
			class="bg-white font-bold text-black mix-blend-screen px-10 py-5 rounded-xl sm:text-3xl sm:rounded-l-xl xl:text-4xl xl:rounded-l-2xl"
		>
			{musician?.genre}
		</div>
		<br />
		{#if musician?.mint !== ''}
			<Button variant="link" class="text-4xl" href={musician.mint}>MINT ME</Button>
		{/if}
	</div>
</div>
