<script>
	export let artist;
</script>

<div class="relative flex h-screen">
	<img src={artist?.pic[0]} alt={artist?.title} class="h-full w-full object-cover object-center" />
	<div class="absolute top-1/2 left-10 max-w-full md:left-20">
		<div class=" text-white md:text-5xl py-4">{artist?.title}</div>
		<div class="bg-white text-7xl font-bold text-black mix-blend-screen px-10 py-5">
			{artist?.desc}
		</div>
	</div>
</div>
