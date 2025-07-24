<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/home');
	});
</script>

<div class="flex h-screen w-full items-center justify-center">
	<div class="text-center">
		<div class="mb-4 text-2xl font-bold">Third Planet Studio</div>
		<div class="text-muted-foreground">Redirecting to home...</div>
	</div>
</div>
