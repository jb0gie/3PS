<script>
	export let musician;
	const base = 'container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0';
	const c1 =
		'p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ';
	const c2 = 'p-5 py-10 text-center transform duration-500 hover:-translate-y-2 cursor-pointer';

    console.log({musician})
</script>

{#each musician as roster}
	<section class={base}>
		<section class={c1}>
			<section class={c2}>
				<img src={roster?.pic[0]} alt="" />
				<h1 class="text-3xl my-5">{roster?.name}</h1>
				<h2 class="font-semibold mb-5">{roster.genre}</h2>
				<a href={roster.route}>
					<button class="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
						See Profile
					</button>
				</a>
			</section>
		</section>
	</section>
{/each}
