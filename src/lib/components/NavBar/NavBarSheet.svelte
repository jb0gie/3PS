<script>
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import NavLogo from './NavLogo.svelte';
	import OrbGlow from '../OrbGlow.svelte';
	const style = 'flex justify-center text-2xl font-bold max-w-3xl lg:text-5xl lg:pr-24 md:text-6xl';
	const stlye2 = 'text-4xl font-bold max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl';
	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
	const grad3 =
		'bg-gradient-to-br from-violet-500 to-blue-500 bg-clip-text text-transparent box-decoration-clone';
	let side = 'left';
	const btn = 'text-2xl font-semibold';
</script>

<Sheet.Root>
	<Sheet.Trigger>
		<NavLogo />
	</Sheet.Trigger>
	<Sheet.Content {side}>
		<Sheet.Header>
			<Sheet.Close asChild let:builder>
				<div class={style}>
					<OrbGlow />
					<a href="/">
						<span>
							<span class={grad2}>
								Third
								<span class={grad1}>Planet </span>
							</span>
							<span class={grad3}>Studio</span>
						</span>
					</a>
				</div>
				<p class={stlye2}><slot name="pageName" /></p>
			</Sheet.Close>
			<Sheet.Title />
		</Sheet.Header>
		<Sheet.Footer>
			<Sheet.Close asChild let:builder>
				<Button builders={[builder]} variant="ghost" href="/contact" class="hover:text-pink-400">
					<h1 class={btn}>Contact</h1>
				</Button>
				<Button builders={[builder]} variant="ghost" href="/events" class=" hover:text-red-400">
					<h1 class={btn}>Events</h1>
				</Button>
				<Button builders={[builder]} variant="ghost" href="/allaccess" class=" hover:text-yellow-400">
					<h1 class={btn}>All Access</h1>
				</Button>
				<Button
					builders={[builder]}
					variant="ghost"
					href="/services"
					class=" hover:text-orange-400"
				>
					<h1 class={btn}>Services</h1>
				</Button>
				<Button builders={[builder]} variant="ghost" href="/about" class=" hover:text-green-400">
					<h1 class={btn}>About Us</h1>
				</Button>
				<Button builders={[builder]} variant="ghost" href="/roster/" class=" hover:text-indigo-400">
					<h1 class={btn}>Roster</h1>
				</Button>
				<Button builders={[builder]} variant="ghost" href="/home" class="hover:text-blue-400">
					<h1 class={btn}>Go Home</h1>
				</Button>
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
