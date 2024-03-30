<script>
	import { Canvas } from '@threlte/core';
	import LogoPlanet from './LogoPlanet.svelte';

	const text = {
		p1: `<p>As a family-based operation, we offer the trust that is critical when entering into ​new territory.</p><br><p>We share your passion and understand that there is no one way to express yourself and everyone should have the freedom to create and write their own future and legacy.</p>`,
		p2: `<p>To celebrate, cultivate, and nourish creativity in all its forms.</p><br><p>We are on a mission to redefine the narrative surrounding artists and musicians, rejecting the outdated notion of the "starving artist."</p><br><p>Instead, they champion a new paradigm where creatives are valued, respected, and provided with the resources they need to thrive.</p>`,
		p3: `<p>Supporting artists and musicians goes beyond altruism; it's an investment in the cultural, social, and economic vitality of society.</p><br><p>By championing their contributions, we enriche our communities, foster innovation, for a more inclusive socioeconomic society.</p>`
	};
	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
</script>

<div class="sm:flex items-center max-w-screen-xl">
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
				What is <span class={grad2}>Third<span class={grad1}>Planet</span></span>?
			</h2>
			<p class="mx-auto text-2xl">
				{@html text.p1}
			</p>
		</div>
	</div>
</div>
<div class="h-4">
	<div class="sm:w-auto p-4">
		<h2 class="my-4 font-bold text-4xl sm:text-5xl">
			<span class={grad2}>Our <span class={grad1}>Mission</span></span>
		</h2>
		<p class="mx-auto text-2xl">
			{@html text.p2}
		</p>
		<h2 class="my-4 font-bold text-4xl text-right sm:text-5xl">
			<span class={grad2}>Our <span class={grad1}>Beliefs</span></span>
		</h2>
		<p class="mx-auto text-2xl text-right">
			{@html text.p3}
		</p>
	</div>
</div>
