<script>
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import third_planet from '$lib/images/logo-s.png';
	import BlueCheck from './BlueCheck.svelte';
	import OrbGlow from '../../../lib/components/OrbGlow.svelte';
</script>

<Card.Root
	class="supports-[backdrop-filter]:bg-background/60 border-b bg-background/95 shadow-sm backdrop-blur w-auto"
>
	<Card.Header>
		<div class="flex items-center w-full col-span-6">
			<div class="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
				<div style="width: 100%; height: 100%;">
					<div style="width: 100%; height: 100%;">
						<iframe
							title="3PS LIVE"
							src="https://player.twitch.tv/?channel=thirdplanetstudiolive&parent=test.thirdplanetstudios.247420.xyz"
							frameborder="0"
							allowfullscreen="1"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							width="100%"
							height="100%"
							class="rounded-xl"
						/>
					</div>
				</div>
			</div>
		</div>
		<br />
		<Card.Title>
			<div class="flex items-center gap-3">
				<Avatar.Root>
					<Avatar.Image src={third_planet} alt="3PS Logo" />
					<Avatar.Fallback>3PS on X</Avatar.Fallback>
				</Avatar.Root>
				<p class="font-bold">Third Planet Studio LLC .ETH .X <BlueCheck /></p>
			</div>
		</Card.Title>
		<Card.Description><h3 class="text-lg">@3PlanetStudio</h3></Card.Description>
	</Card.Header>
	<Card.Content>
		<p class="whitespace-nowrap text-lg">Web3 Concierge/DAO</p>
		<div class="flex just gap-2">
			<h3><strong>1586 </strong><span class="opacity-50">Following</span></h3>
			<h3><strong>1685 </strong><span class="opacity-50">Followers</span></h3>
		</div>
	</Card.Content>
</Card.Root>
