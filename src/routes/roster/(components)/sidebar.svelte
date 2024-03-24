<script>
	import { Button } from '$lib/components/ui/button';
	import { activeTab } from '../store';
	function switchTab(tab) {
		activeTab.set(tab);
		console.log($activeTab);
	}
</script>

<Button variant="link" class="justify-start" on:click={() => switchTab('music')}>
	<div class="text-3xl font-bold tracking-tight sm:text-6xl">
		<span class="sm:mr-2">🎸 Music</span>
	</div>
</Button>
<Button variant="link" class="justify-start" on:click={() => switchTab('art')}>
	<div class="text-3xl font-bold tracking-tight sm:text-6xl">
		<span class="sm:mr-2">🎨 Art</span>
	</div>
</Button>
