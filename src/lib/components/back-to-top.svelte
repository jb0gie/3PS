<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import ChevronUp from 'lucide-svelte/icons/chevron-up';
	import { onMount } from 'svelte';

	let showButton = false;

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	function handleScroll() {
		showButton = window.scrollY > 300;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#if showButton}
	<div class="fixed bottom-6 right-6 z-50">
		<Button
			size="icon"
			variant="default"
			class="h-12 w-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
			onclick={scrollToTop}
			aria-label="Back to top"
		>
			<ChevronUp class="h-5 w-5" />
		</Button>
	</div>
{/if}
