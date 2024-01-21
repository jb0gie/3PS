<script>
	export let musician;
</script>

<div class="relative flex h-screen">
	<img src={musician?.pic[0]} alt={musician?.name} class="h-full w-full object-cover object-center rounded-2xl" />
	<div class="absolute top-1/2 left-10 max-w-full md:left-20">
		<div class=" text-white md:text-5xl py-4">{musician?.name}</div>
		<div class="bg-white text-7xl font-bold text-black mix-blend-screen px-10 py-5">
			{musician?.genre}
		</div>
	</div>
</div>
