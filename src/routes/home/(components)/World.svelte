<script>
	import { Rocket } from 'radix-icons-svelte';
	import * as Alert from '$lib/components/ui/alert';
</script>

<div class="w-64 anim-float-avatar">
	<Alert.Root class="supports-[backdrop-filter]:bg-background/60 border-b bg-background/95 shadow-sm backdrop-blur w-auto">
		<Rocket class="h-4 w-4" />
		<Alert.Title><slot name="title" /></Alert.Title>
		<Alert.Description><slot name="description" /></Alert.Description>
	</Alert.Root>
</div>


<style lang="postcss">
	.anim-float-avatar {
		animation: float-up 13s ease-in-out infinite;
	}
	@keyframes float-up {
		0% { transform: translateY(0px); }
		50% { transform: translateY(-20px); }
		100% { transform: translateY(0px); }
	}
</style>