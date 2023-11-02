<script>
	import { TwitterLogo, GithubLogo } from 'radix-icons-svelte';
	import LightSwitch from './LightSwitch.svelte';
	import third_planet from '$lib/images/logo-s.png';
	const headStyle =
		'supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur';
	const navIcon =
		'inline-flex items-center justify-center font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md text-xs w-9 px-0';
</script>

<header class={headStyle}>
	<div class="container flex h-14 items-center">
		<div class="mr-4 hidden md:flex">
			<nav class="relative px-4 py-2 flex items-center space-x-6 text-sm font-medium">
				<a href="/" class="mr-6 flex items-center space-x-2">
					<img src={third_planet} alt="" class="w-10" />
				</a>
				<a href="/about" class="transition-colors hover:text-foreground/80 text-foreground/60">
					About
				</a>
				<a href="/roster" class="transition-colors hover:text-foreground/80 text-foreground/60">
					Roster
				</a>
				<a href="/events" class="transition-colors hover:text-foreground/80 text-foreground/60">
					Events
				</a>
			</nav>
		</div>

		<button
			type="button"
			tabindex="0"
			id="X2ICXFPXWb"
			aria-haspopup="dialog"
			aria-expanded="false"
			aria-controls="N15qyH_0wE"
			data-melt-dialog-trigger=""
			class="inline-flex items-center justify-center rounded-md font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
			data-bits-button-root=""
		>
			<svg
				width="24"
				height="24"
				stroke="currentColor"
				stroke-width="2"
				class="lucide-icon lucide lucide-panel-left-open h-5 w-5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M9 3v18" /><path
					d="m14 9 3 3-3 3"
				/>
			</svg>
			<span class="sr-only" data-svelte-h="svelte-1t6m3jq">Toggle Menu</span>
		</button>

		<div class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
			<div class="w-full flex-1 md:w-auto md:flex-none" data-svelte-h="svelte-1eg3ung" />
			<nav class="flex items-center space-x-1">
				<a href="https://github.com/anentrypoint" target="_blank" rel="noreferrer">
					<div class={navIcon}>
						<GithubLogo class="h-4 w-4"/>
						<span class="sr-only" data-svelte-h="svelte-11yow7k">GitHub</span>
					</div>
				</a>
				<a href="https://x.com/" target="_blank" rel="noreferrer">
					<div class={navIcon}>
						<TwitterLogo class="h-4 w-4" />
						<span class="sr-only" data-svelte-h="svelte-ym26he">Twitter</span>
					</div>
				</a>
				<div
					type="button"
					tabindex="0"
					class={navIcon}
					role="switch"
					aria-label="Light Switch"
					aria-checked="true"
					title="Toggle Light Mode"
					data-bits-button-root="">
					<LightSwitch class="h-4 w-4"/>
					<span class="sr-only">Toggle Light Mode</span>
				</div>
			</nav>
		</div>
	</div>
</header>
