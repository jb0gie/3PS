<script>
	import { Button } from '$lib/components/ui/button';
	import { activeTab } from '../store';
	function switchTab(tab) {
		activeTab.set(tab);
		console.log($activeTab);
	}
</script>

<div class="flex flex-row gap-4 object-center">
	<Button variant="ghost" class="justify-start h-auto" on:click={() => switchTab('music')}>
		<div class="text-3xl font-bold tracking-tight sm:text-6xl">
			<span class="sm:mr-2">🎸 Music</span>
		</div>
	</Button>
	<Button variant="ghost" class="justify-start h-auto" on:click={() => switchTab('art')}>
		<div class="text-3xl font-bold tracking-tight sm:text-6xl">
			<span class="sm:mr-2">🎨 Art</span>
		</div>
	</Button>
</div>
