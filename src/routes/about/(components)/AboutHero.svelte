<script>
	import { Canvas } from '@threlte/core';
	import LogoPlanet from '$lib/components/planets.svelte';

	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
</script>

<div class="mx-auto px-4">
	<div class="mx-auto grid max-w-7xl gap-8 sm:pt-3 md:grid-cols-2">
		<div class="flex flex-col justify-center">
			<div class="h-[320px] w-auto md:h-[400px]">
				<Canvas>
					<LogoPlanet />
				</Canvas>
			</div>
		</div>
		<div class="flex flex-col justify-center">
			<div class="text">
				<h2 class="my-4 text-3xl font-bold sm:text-4xl md:text-5xl">
					What is <span class={grad2}>Third<span class={grad1}>Planet</span></span>?
				</h2>
				<div class="mx-auto max-w-3xl space-y-4 text-xl md:text-2xl">
					<p>
						As a family-based operation, we offer the trust that is critical when entering into ​new
						territory.
					</p>
					<p>
						We share your passion and understand that there is no one way to express yourself and
						everyone should have the freedom to create and write their own future and legacy.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="mx-auto max-w-7xl py-8">
		<div class="space-y-8">
			<h2 class="my-4 text-3xl font-bold sm:text-4xl md:text-5xl">
				<span class={grad2}>Our <span class={grad1}>Mission</span></span>
			</h2>
			<div class="mx-auto max-w-5xl space-y-4 text-xl md:text-2xl">
				<p>To celebrate, cultivate, and nourish creativity in all its forms.</p>
				<p>
					We are on a mission to redefine the narrative surrounding artists and musicians, rejecting
					the outdated notion of the "starving artist."
				</p>
				<p>
					Instead, they champion a new paradigm where creatives are valued, respected, and provided
					with the resources they need to thrive.
				</p>
			</div>
			<h2 class="my-4 text-right text-3xl font-bold sm:text-4xl md:text-5xl">
				<span class={grad2}>Our <span class={grad1}>Beliefs</span></span>
			</h2>
			<div class="mx-auto max-w-5xl space-y-4 text-right text-xl md:text-2xl">
				<p>
					Supporting artists and musicians goes beyond altruism; it's an investment in the cultural,
					social, and economic vitality of society.
				</p>
				<p>
					By championing their contributions, we our communities, foster innovation, for a more
					inclusive socioeconomic society.
				</p>
			</div>
		</div>
	</div>
</div>
