<script>
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import MusicianSocial from './MusicianSocial.svelte';
	import third_planet from '$lib/images/logo-b.png';
	export let musician;
	let randomIndex = Math.floor(Math.random() * musician?.pic.length);
	const cGlass =
		'supports-[backdrop-filter]:bg-background/60 border-b bg-background/95 shadow-sm backdrop-blur rounded-lg p-2';
	const cText =
		'font-semibold text-white mix-blend-screen rounded-xl p-2 sm:text-3xl sm:rounded-l-xl xl:text-4xl xl:rounded-l-2xl p-4';
	const pic = 'rounded-t-xl lg:rounded-full md:rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[13rem] lg:h-[13rem] md:w-[12rem] md:h-[12rem] relative'
</script>

<div class="h-0 sm:h-0 md:h-24 xl:h-32" ></div>
<!-- User Profile Image -->
<div class="w-full sm:w-auto mx-auto flex justify-center">
	<img
		src={musician?.pic[randomIndex]}
		alt="User Profile"
		class={pic}
	/>
</div>
