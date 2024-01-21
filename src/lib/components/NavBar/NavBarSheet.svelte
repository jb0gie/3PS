<script>
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import NavLogo from './NavLogo.svelte';
	let side = 'left';

	const headStyle =
		'supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur';
</script>

<Sheet.Root>
	<Sheet.Trigger>
		<NavLogo />
	</Sheet.Trigger>
	<Sheet.Content {side}>
		<Sheet.Header>
			<Sheet.Close asChild let:builder>
				<Button builders={[builder]} variant="ghost" href="/">
					<h1 class="text-2xl font-semibold">
						ThirdPlanet Studios
					</h1>
				</Button>
			</Sheet.Close>
			<Sheet.Title />
		</Sheet.Header>
		<Sheet.Footer>
			<Sheet.Close asChild let:builder>
				<Button builders={[builder]} variant="ghost" href="/contact" class="hover:text-pink-400">
					<h1 class="text-2xl">Contact</h1>
				</Button>
				<Button builders={[builder]} variant="ghost" href="/events" class=" hover:text-red-400">
					<h1 class="text-2xl">Events</h1>
				</Button>
				<Button builders={[builder]} variant="ghost" href="/services" class=" hover:text-orange-400">
					<h1 class="text-2xl">Services</h1>
				</Button>
				<Button builders={[builder]} variant="ghost" href="/about" class=" hover:text-yellow-400">
					<h1 class="text-2xl">About Us</h1>
				</Button>
				<Button builders={[builder]} variant="ghost" href="/roster/music" class=" hover:text-green-400">
					<h1 class="text-2xl">Musicians</h1>
				</Button>
				<Button builders={[builder]} variant="ghost" href="/roster/art" class=" hover:text-blue-400">
					<h1 class="text-2xl">Artist</h1>
				</Button>
				<Button builders={[builder]} variant="ghost" href="/home" class="hover:text-indigo-400">
					<h1 class="text-2xl">Go Home</h1>
				</Button>
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
