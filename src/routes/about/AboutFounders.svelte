<script>
	import AboutBinx from './AboutBinx.svelte';
	import AboutKuri from './AboutKuri.svelte';
	import AboutAckapella from './AboutAckapella.svelte';

	const cHead =
		'h2 hover:text-indigo-500 font-extrabold transition duration-500 ease-in-out';
	const founder = `<p>Third Planet Studio was founded by Binx, Ackapella and Kuri.</p>`;
</script>

<div class="py-8 max-w-screen-xl mx-auto">
	<div class="grid grid-cols-3 col-gap-10">
		<div class="text-center">
			<div class="p-4">
				<img
					class="rounded-xl"
					src="https://pbs.twimg.com/profile_images/1518727186294976514/o5YsjZ0W.jpg"
					alt="a"
				/>
				<!-- <div class="text-2xl">
					<a href="#" class={cHead}>ACKAPELLA</a>
					<p class="text-xl uppercase">crypt master</p>
				</div> -->
			</div>
		</div>
		<div class="card-hover text-center">
			<div class="p-4">
				<img
					class="w-full rounded-xl"
					src="https://pbs.twimg.com/profile_images/1577684445833953281/SGrq5Coy_400x400.jpg"
					alt="a"
				/>
				<!-- <div class="text-2xl">
					<a href="#top" class={cHead}> BINX </a>
					<p class="uppercase text-lg">band mom</p>
				</div> -->
			</div>
		</div>
		<div class="card-hover text-center">
			<div class="p-4">
				<img
					class="w-100 rounded-xl"
					src="https://pbs.twimg.com/profile_images/1712861383597912065/T59n0VJE.jpg"
					alt="a"
				/>
				<!-- <div class="text-md">
					<a href="#" class={cHead}> KURI </a>
					<p class="text-2xl uppercase">vtuber</p>
				</div> -->
			</div>
		</div>
	</div>
    <AboutAckapella />
    <AboutBinx />
    <AboutKuri/>
</div>
