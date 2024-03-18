<script>
	import { Canvas } from '@threlte/core';
	import LogoPlanet from './LogoPlanet.svelte';

	const p1 = {
		paragraph: `<p>As a family-based operation, we offer the trust that is critical when entering into ​new territory.</p><br><p>We share your passion and understand that there is no one way to express yourself and everyone should have the freedom to create and write their own future and legacy.</p>`
	};
	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
</script>

<div class="sm:flex items-center max-w-screen-xl ">
	<div class="sm:w-1/2 p-4">
		<div class="h-[320px] w-auto">
			<Canvas>
				<LogoPlanet />
			</Canvas>
		</div>
	</div>
	<div class="sm:w-1/2 p-5">
		<div class="text">
			<h2 class="my-4 font-bold text-3xl sm:text-4xl">
				What is <span class={grad2}>3rd<span class={grad1}>Planet</span></span>?
			</h2>
			<p class="mx-auto text-2xl">
				{@html p1.paragraph}
			</p>
		</div>
	</div>
</div>
