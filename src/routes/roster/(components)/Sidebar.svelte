<script>
	import { Button } from '$lib/components/ui/button';
	let { tab, onTabChange } = $props();
</script>

<div class="flex flex-row gap-4 object-center">
	<Button variant="ghost" class="h-auto justify-start" onclick={() => onTabChange('music')}>
		<div class="text-3xl font-bold tracking-tight sm:text-6xl">
			<span class="sm:mr-2">🎸 Music</span>
		</div>
	</Button>
	<Button variant="ghost" class="h-auto justify-start" onclick={() => onTabChange('art')}>
		<div class="text-3xl font-bold tracking-tight sm:text-6xl">
			<span class="sm:mr-2">🎨 Art</span>
		</div>
	</Button>
</div>
