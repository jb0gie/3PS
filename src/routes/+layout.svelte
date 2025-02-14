<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import FootBar from '$lib/components/FootBar/FootBar.svelte';
	let { children } = $props();

	// SEO
	const metaDefaults = {
		title: 'ThirdPlanetStudio',
		description: 'Creative Concierge',
		image: '/favicon.png'
	};
	const meta = {
		title: metaDefaults.title,
		description: metaDefaults.description,
		image: metaDefaults.image,
		// Article
		article: { publishTime: '', modifiedTime: '', author: '' },
		// Twitter
		twitter: {
			title: metaDefaults.title,
			description: metaDefaults.description,
			image: metaDefaults.image
		}
	};
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="title" content={meta.title} />
	<meta name="description" content={meta.description} />
	<meta name="keywords" content={meta.description} />
	<meta name="author" content="b0gie.lens" />
	<meta property="og:site_name" content="3PS" />
	<meta property="og:type" content="website" />
	<!-- <meta property="og:url" content="https://thirdplanet.studio{$page.url.pathname}" /> -->
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.image} />
	<meta property="og:image:secure_url" content={meta.image} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="" />
	<!--FIX-->
	<meta property="og:image:height" content="" />
	<!--ALSO FIX-->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@3PlanetStudio" />
	<meta name="twitter:creator" content="@3PlanetStudio" />
	<meta name="twitter:title" content={meta.twitter.title} />
	<meta name="twitter:description" content={meta.twitter.description} />
	<meta name="twitter:image" content={meta.twitter.image} />
</svelte:head>

<ModeWatcher />

<Sidebar.Provider style="--sidebar-width: 20rem; --sidebar-width-mobile: 20rem;">
	<AppSidebar />
	<main class="min-h-screen">
		<div class="md:hidden">
			<Sidebar.Trigger />
		</div>
		<div class="mx-auto overflow-hidden p-2">
			{@render children()}
		</div>
		<FootBar />
	</main>
</Sidebar.Provider>
