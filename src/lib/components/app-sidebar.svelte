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
						url: '/home'
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
		<a href="/">
			<div class="flex items-center justify-between px-4">
				<h1 class="text-2xl font-bold">
					Third Planet
					<span class="text-lg text-gray-500">Studio</span>
				</h1>
				<LightSwitch />
			</div>
		</a>
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
								<Sidebar.MenuButton class="text-2xl">
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
	<Sidebar.Footer>
		<Card.Root class="shadow-none">
			<form>
				<Card.Header class="p-4 pb-0">
					<Card.Title class="text-sm">Visit 3PS</Card.Title>
					<Card.Description>our hyperfy world</Card.Description>
				</Card.Header>
				<Card.Content class="grid gap-2.5 p-4">
					<Button
						class="w-full bg-sidebar-primary text-sidebar-primary-foreground shadow-none"
						size="lg"
						variant="secondary"
						onclick={() => window.open('https://hyperfy.io/3ps', '_blank')}
					>
						Visit World
					</Button>
				</Card.Content>
			</form>
		</Card.Root>
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
