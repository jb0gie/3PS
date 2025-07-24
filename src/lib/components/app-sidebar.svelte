<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import LightSwitch from '$lib/components/light-switch.svelte';
	import SearchForm from '$lib/components/search-form.svelte';

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();

	const data = {
		navMain: [
			{
				items: [
					{
						title: 'Home',
						url: '/home',
						external: false
					},
					{
						title: 'About',
						url: '/about',
						external: false
					},
					{
						title: 'Services',
						url: '/services',
						external: false
					},
					{
						title: 'Contact',
						url: '/contact',
						external: false
					}
				]
			},
			{
				title: 'Community',
				url: '#',
				items: [
					{
						title: 'Roster',
						url: '/roster',
						external: false
					},
					{
						title: 'Events',
						url: '/events',
						external: false
					},
					{
						title: 'Blog',
						url: '/blog',
						external: false
					}
					// {
					// 	title: 'Claim',
					// 	url: ''
					// }
				]
			},
			{
				title: 'Social',
				url: '#',
				items: [
					{
						title: 'Discord',
						url: 'https://discord.com/invite/xp3VwS5ySF',
						external: true
					},
					{
						title: 'Twitter',
						url: 'https://x.com/3planetstudio',
						external: true
					}
				]
			},
			{
				title: 'Actions',
				url: '#',
				items: [
					{
						title: 'Visit thirdweb',
						url: 'https://thirdweb.com/polygon/0x30d3A5FBbd459825ab4C56F8db6d5C90f8c3C411/nfts/0',
						external: true
					},
					{
						title: 'Contact form',
						url: 'https://forms.gle/oBdmRcnZKCKCZ7PJ8',
						external: true
					}
				]
			}
		]
	};
</script>

<Sidebar.Root {...restProps} bind:ref variant="floating">
	<Sidebar.Header>
		<a href="/">
			<div class="flex items-center justify-between px-1 md:px-4">
				<h1 class="text-2xl font-bold md:text-3xl">
					Third Planet
					<span class="text-xl text-gray-500 md:text-xl">Studio</span>
				</h1>
				<LightSwitch />
			</div>
		</a>
		<!-- <SearchForm /> -->
	</Sidebar.Header>
	<Sidebar.Content class="max-h-screen overflow-y-auto">
		<!-- We create a Sidebar.Group for each parent. -->
		{#each data.navMain as group (group.title)}
			<Sidebar.Group>
				<Sidebar.GroupLabel class="text-xl font-semibold md:text-base"
					>{group.title}</Sidebar.GroupLabel
				>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each group.items as item (item.title)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton class="text-2xl font-medium md:text-3xl">
									{#snippet child({ props })}
										{#if item.external ?? false}
											<a href={item.url} target="_blank" rel="noopener noreferrer" {...props}
												>{item.title}</a
											>
										{:else}
											<a href={item.url} {...props}>{item.title}</a>
										{/if}
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
