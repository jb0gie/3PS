<script>
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import third_planet from '$lib/images/logo-s.png';
	import BlueCheck from './BlueCheck.svelte';
	import OrbGlow from '../../../lib/components/OrbGlow.svelte';
</script>

<div class="relative">
	<div class="anim-float-avatar relative z-[1] top-[15%] left-[5%]">
		<a class="p-2" href="https://twitter.com/3PlanetStudio" target="_blank" rel="noreferrer">
			<Card.Root
				class="supports-[backdrop-filter]:bg-background/60 border-b bg-background/95 shadow-sm backdrop-blur w-[500px]"
			>
				<Card.Header>
					<Card.Title>
						<div class="flex items-center gap-3">
							<Avatar.Root>
								<Avatar.Image src={third_planet} alt="3PS Logo" />
								<Avatar.Fallback>3PS on X</Avatar.Fallback>
							</Avatar.Root>
							<p class="font-bold">Third Planet Studio LLC .ETH .X <BlueCheck /></p>
						</div>
					</Card.Title>
					<Card.Description><h3 class="text-lg opacity-50">@3PlanetStudio</h3></Card.Description>
				</Card.Header>
				<Card.Content>
					<p class="whitespace-nowrap text-lg">Web3 Concierge/DAO</p>
					<div class="flex just gap-2">
						<h3><strong>1586 </strong><span class="opacity-50">Following</span></h3>
						<h3><strong>1685 </strong><span class="opacity-50">Followers</span></h3>
					</div>
				</Card.Content>
			</Card.Root>
		</a>
	</div>
	<div class="anim-float-search anim-delay-200 absolute z-[1] top-[100%] left-[50%]">
		<Button class=" p-4" href="/roster/music">
			<span>Music</span>
		</Button>
	</div>
	<div class="anim-float-radio absolute z-[1] top-[100%] left-[30%]">
		<Button class="p-4" href="/roster/art">
			<span>Art</span>
		</Button>
	</div>
	<div class="anim-float-button absolute z-[1] top-[100%] left-[5%]">
		<Button class="p-4" href="/events">
			<span>Events</span>
		</Button>
	</div>
	<div class="absolute top-[30%] left-[30%] -translate-x-[50%] -translate-y-[50%] z-0">
		<OrbGlow />
		<div class="w-96 aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center">
			<div class="w-[240px] aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center" />
		</div>
	</div>
</div>

<style lang="postcss">
	.anim-float-avatar {
		animation: float-up 13s ease-in-out infinite;
	}

	.anim-float-search {
		animation: float-up 14s ease-in-out infinite;
		animation-delay: 3s;
	}
	.anim-float-radio {
		animation: float-down 17s ease-in-out infinite;
	}

	.anim-float-button {
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
