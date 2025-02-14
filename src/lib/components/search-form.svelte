<script lang="ts">
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import Search from 'lucide-svelte/icons/search';
	import { searchQuery } from '$lib/stores/search';

	function handleSearch(event: Event) {
		const target = event.target as HTMLInputElement;
		searchQuery.set(target.value.toLowerCase());
	}

	$effect(() => {
		console.log('Search Store Value:', $searchQuery); // Debug log
	});
</script>

<form>
	<Sidebar.Group class="py-0">
		<Sidebar.GroupContent class="relative">
			<Label for="search" class="sr-only">Search</Label>
			<Sidebar.Input
				id="search"
				placeholder="Search artists & musicians..."
				class="pl-8"
				on:input={handleSearch}
				bind:value={$searchQuery}
			/>
			<Search
				class="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50"
			/>
		</Sidebar.GroupContent>
	</Sidebar.Group>
</form>
