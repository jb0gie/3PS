<script>
	import { Rocket } from 'radix-icons-svelte';
	import * as Alert from '$lib/components/ui/alert';
</script>

<div class="w-64">
	<Alert.Root class="w-auto">
		<Rocket class="h-4 w-4" />
		<Alert.Title><slot name="title" /></Alert.Title>
		<Alert.Description><slot name="description" /></Alert.Description>
	</Alert.Root>
</div>
