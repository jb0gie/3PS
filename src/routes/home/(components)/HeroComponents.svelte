<script>
	import * as Avatar from '$lib/components/ui/avatar';
	import third_planet from '$lib/images/3PSFINALLOGO.png';
	import BlueCheck from './BlueCheck.svelte';
</script>

<div class="aspect-video relative">
	<!-- Avatar -->
	<div class="anim-float-avatar absolute z-[1] top-[32%] left-[40%]">
		<Avatar.Root>
			<Avatar.Image src={third_planet} alt="3PS Logo" />
			<Avatar.Fallback>3PS</Avatar.Fallback>
		</Avatar.Root>
	</div>
	<!-- Progress Radial -->
	<div class="anim-float-progress anim-delay-200 absolute z-[1] top-[0%] left-[10%]">
		<span class="badge-icon variant-filled">
			<i class="fa-regular fa-calendar-days" />
		</span>
	</div>
	<!-- Music -->
	<div class="anim-float-search anim-delay-200 absolute z-[1] top-[-12%] left-[35%]">
		<a class="block card card-hover variant-glass-error p-4" href="/roster/music">
			<span>Music</span>
			<i class="fa-solid fa-music" />
		</a>
	</div>
	<!-- Art -->
	<div class="anim-float-radio absolute z-[1] top-[20%] left-[70%]">
		<a class="block card card-hover variant-glass-warning p-4" href="/roster/art">
			<span>Art</span>
			<i class="fa-solid fa-palette" />
		</a>
	</div>
	<!-- Card -->
	<div class="anim-float-card absolute z-[1] top-[60%] left-[65%]">
		<a
			class="block card card-hover p-4 space-y-2"
			href="https://twitter.com/3PlanetStudio"
			target="_blank"
			rel="noreferrer"
		>
			<div class="flex items-center gap-3">
				<Avatar.Root>
					<Avatar.Image
						src="https://pbs.twimg.com/profile_images/1572768523012775937/gtfx0V0x_400x400.jpg"
						alt="3PS Logo"
					/>
					<Avatar.Fallback>3PS on X</Avatar.Fallback>
				</Avatar.Root>
				<div>
					<p class="font-bold">Third Planet Studio LLC .ETH .X <BlueCheck /></p>
					<small class="opacity-50">@3PlanetStudio</small>
				</div>
			</div>
			<p class="whitespace-nowrap">Web3 Concierge/DAO</p>
			<div class="flex just gap-4">
				<small><strong>1586</strong> <span class="opacity-50">Following</span></small>
				<small><strong>1685</strong> <span class="opacity-50">Followers</span></small>
			</div>
		</a>
	</div>
	<div class="anim-float-light-switch anim-delay-200 absolute z-[1] top-[98%] left-[45%]">
		<span class="badge-icon variant-filled">
			<i class="fa-solid fa-palette" />
		</span>
	</div>
	<!-- Events -->
	<div class="anim-float-button absolute z-[1] top-[78%] left-[15%]">
		<a class="block card card-hover variant-glass-primary p-4" href="/events">
			<span>Events</span>
			<i class="fa-regular fa-calendar-days" />
		</a>
	</div>
	<div class="anim-float-badge absolute z-[1] top-[45%] left-[25%]">
		<span class="badge-icon variant-filled">
			<i class="fa-solid fa-music" />
		</span>
	</div>
	<!-- BG Circles -->
	<div class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0">
		<div
			class="w-96 aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center"
		>
			<div
				class="w-[240px] aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center"
			/>
		</div>
	</div>
</div>

<style lang="postcss">
	.anim-float-avatar {
		animation: float-up 13s ease-in-out infinite;
	}
	.anim-float-progress {
		animation: float-down 15s ease-in-out infinite;
	}
	.anim-float-search {
		animation: float-up 14s ease-in-out infinite;
		animation-delay: 3s;
	}
	.anim-float-radio {
		animation: float-down 17s ease-in-out infinite;
	}
	.anim-float-card {
		animation: float-up 12s ease-in-out infinite;
	}
	.anim-float-light-switch {
		animation: float-down 18s ease-in-out infinite;
		animation-delay: 2s;
	}
	.anim-float-button {
		animation: float-up 15s ease-in-out infinite;
	}
	.anim-float-toggle {
		animation: float-down 13s ease-in-out infinite;
		animation-delay: 5s;
	}
	.anim-float-badge {
		animation: float-up 15s ease-in-out infinite;
	}
	/* prettier-ignore */
	@keyframes float-up {
		0% { transform: translateY(0px); }
		50% { transform: translateY(-20px); }
		100% { transform: translateY(0px); }
	}
	/* prettier-ignore */
	@keyframes float-down {
		0% { transform: translateY(0px); }
		50% { transform: translateY(20px); }
		100% { transform: translateY(0px); }
	}
</style>
