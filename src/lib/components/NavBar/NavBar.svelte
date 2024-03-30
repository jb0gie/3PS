<script>
	import { TwitterLogo, GithubLogo, DiscordLogo } from 'radix-icons-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import LightSwitch from './LightSwitch.svelte';
	import third_planet from '$lib/images/logo-s.png';
	import NavBarSheet from './NavBarSheet.svelte';
	const headStyle =
		'supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur';
	const navIcon =
		'inline-flex items-center justify-center font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md text-xs w-9 px-0';
	const navItem =
		'text-xl font-semibold transition-colors hover:text-foreground/80 text-foreground/60';

	let showStatusBar = true;
	let showActivityBar = false;
	let showPanel = false;
</script>

<header class={headStyle}>
	<div class="container flex h-12 items-center">
		<div class="mr-4 hidden md:flex">
			<nav class="relative py-2 flex items-center text-sm font-medium">
				<a href="/" class="mr-6 flex items-center space-x-2">
					<img src={third_planet} alt="" class="w-10" />
				</a>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button
							variant="link"
							class={navItem + ' ' + 'hover:text-indigo-400'}
							builders={[builder]}>Explore</Button
						>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-auto">
						<a href="/home">
							<DropdownMenu.Item>
								<DropdownMenu.Label class={navItem + ' ' + 'hover:text-pink-400'}
									>Home</DropdownMenu.Label
								>
							</DropdownMenu.Item>
						</a>
						<DropdownMenu.Separator />
						<a href="/about" class={navItem}>
							<DropdownMenu.Item>
								<DropdownMenu.Label class={navItem + ' ' + 'hover:text-red-400'}
									>About</DropdownMenu.Label
								>
							</DropdownMenu.Item>
						</a>
						<DropdownMenu.Separator />
						<a href="/services" class={navItem}>
							<DropdownMenu.Item>
								<DropdownMenu.Label class={navItem + ' ' + 'hover:text-yellow-400'}
									>Services</DropdownMenu.Label
								>
							</DropdownMenu.Item>
						</a>
						<DropdownMenu.Separator />
						<a href="/contact" class={navItem}>
							<DropdownMenu.Item>
								<DropdownMenu.Label class={navItem + ' ' + 'hover:text-green-400'}
									>Contact</DropdownMenu.Label
								>
							</DropdownMenu.Item>
						</a>
					</DropdownMenu.Content>
				</DropdownMenu.Root>

				<Button variant="link" href="/roster" class={navItem + ' ' + 'hover:text-pink-400'}
					>Roster</Button
				>
				<Button variant="link" href="/events" class={navItem + ' ' + 'hover:text-red-400'}
					>Events</Button
				>
				<Button variant="link" href="/blog" class={navItem + ' ' + 'hover:text-yellow-400'}
					>Publications</Button
				>
				<Button variant="ghost" href="/claim" class={navItem + ' ' + 'hover:text-green-400'}
					>Claim</Button
				>
				<Button variant="ghost" href="/allaccess" class={navItem + ' ' + 'hover:text-blue-400'}
					>All Access</Button
				>
			</nav>
		</div>

		<NavBarSheet />

		<div class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
			<div class="w-full flex-1 md:w-auto md:flex-none" data-svelte-h="svelte-1eg3ung" />
			<nav class="flex items-center space-x-1">
				<!-- <a href="https://github.com/anentrypoint" target="_blank" rel="noreferrer">
					<div class={navIcon}>
						<GithubLogo class="h-4 w-4" />
						<span class="sr-only" data-svelte-h="svelte-11yow7k">GitHub</span>
					</div>
				</a> -->
				<a href="https://discord.com/invite/xp3VwS5ySF" target="_blank" rel="noreferrer">
					<div class={navIcon}>
						<DiscordLogo class="h-4 w-4" />
						<span class="sr-only" data-svelte-h="svelte-11yow7k">Discord</span>
					</div>
				</a>
				<a href="https://x.com/3planetstudio" target="_blank" rel="noreferrer">
					<div class={navIcon}>
						<TwitterLogo class="h-4 w-4" />
						<span class="sr-only" data-svelte-h="svelte-ym26he">Twitter</span>
					</div>
				</a>
				<LightSwitch />
			</nav>
		</div>
	</div>
</header>
