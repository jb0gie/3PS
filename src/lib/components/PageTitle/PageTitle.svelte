<script>
	import OrbGlow from "../OrbGlow.svelte";
	const style = 'flex justify-between text-2xl font-bold max-w-3xl lg:text-5xl lg:pr-24 md:text-6xl'
	const stlye2= 'text-4xl font-bold max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl'
	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
</script>

<div class={style}>
	<OrbGlow />
	<span class={grad2}>3rd<span class={grad1}>Planet</span></span>
</div>
<p class={stlye2}><slot name="pageName"/></p>