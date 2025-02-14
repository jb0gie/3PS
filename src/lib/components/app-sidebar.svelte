<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import LightSwitch from '$lib/components/light-switch.svelte';
	import SearchForm from '$lib/components/search-form.svelte';
	

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
	const data = {
		versions: ['1.0.0'],
		navMain: [
			{
				items: [
					{
						title: 'Home',
						url: '/'
					},
					{
						title: 'About',
						url: '/about'
					},
					{
						title: 'Services',
						url: '/services'
					},
					{
						title: 'Contact',
						url: '/contact'
					}
				]
			},
			{
				title: 'Community',
				url: '#',
				items: [
					{
						title: 'Roster',
						url: '/roster'
					},
					{
						title: 'Events',
						url: '/events'
					},
					{
						title: 'Blog',
						url: '/blog'
					},
					{
						title: 'Claim',
						url: '#'
					}
				]
			},
			{
				title: 'Social',
				url: '#',
				items: [
					{
						title: 'Discord',
						url: 'https://discord.com/invite/xp3VwS5ySF'
					},
					{
						title: 'Twitter',
						url: 'https://x.com/3planetstudio'
					}
				]
			}
		]
	};
</script>

<Sidebar.Root {...restProps} bind:ref variant="floating">
	<Sidebar.Header>
		<div class="flex items-center justify-between px-4">
			<h1 class="text-2xl font-bold">
				Third Planet
				<span class="text-lg text-gray-500">Studio</span>
			</h1>
			<LightSwitch />
		</div>
		<!-- <SearchForm /> -->
	</Sidebar.Header>
	<Sidebar.Content>
		<!-- We create a Sidebar.Group for each parent. -->
		{#each data.navMain as group (group.title)}
			<Sidebar.Group>
				<Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each group.items as item (item.title)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a href={item.url} {...props}>{item.title}</a>
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
