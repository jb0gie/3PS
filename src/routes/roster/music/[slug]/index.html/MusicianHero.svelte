<script>
	import { Button } from '$lib/components/ui/button';
	export let musician;
	const cGlass =
		'supports-[backdrop-filter]:bg-background/60 border-b bg-background/95 shadow-sm backdrop-blur rounded-lg p-2';
	const cText =
		'font-semibold text-white mix-blend-screen rounded-xl p-2 sm:text-3xl sm:rounded-l-xl xl:text-4xl xl:rounded-l-2xl p-4';
</script>

<div class="relative flex xl:h-screen lg:h-screen md:h-96 sm:h-96">
	<img
		src={musician?.pic[1]}
		alt={musician?.name}
		class="h-full w-full object-cover object-center rounded-2xl"
	/>
	<div class="absolute bottom-0 left-0 sm:top-1/2 p-6 max-w-full md:left-20">
		<div class={cGlass}>
			<div class="text-white font-extrabold text-xl sm:text-3xl py-4 p-6">{musician?.name}</div>
			<div class={cText}>
				{musician?.genre}
				<br />
				{musician?.subgenre}
			</div>
			{#if musician?.mint !== ''}
				<Button variant="ghost" class="text-2xl mx-auto" href={musician?.mint}>MINT ME</Button>
			{/if}
		</div>
	</div>
</div>
