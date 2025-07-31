<script>
	import OrbGlow from './orb-glow.svelte';
	const third_planet = '/images/logo-s.png';
	const style =
		'flex flex-col justify-between text-3xl font-bold p-2';
	const stlye2 = 'text-lg';
	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
	const grad3 =
		'bg-gradient-to-br from-violet-500 to-blue-500 bg-clip-text text-transparent box-decoration-clone';
</script>

<img src={third_planet} class="h-32 sm:h-32" alt="" />
<div class={style}>
	<OrbGlow />
	<!-- <span class={grad2}>Third<span class={grad1}>Planet<spam class={grad3}>Studio</spam></span></span> -->
	<p class={stlye2}><slot name="pageName" /></p>
</div>


