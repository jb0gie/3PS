<script>
</script>

<div class="space-y-4 md:space-y-10">
	<!-- Info -->
	<div class="space-y-4 text-center">
		<h2 class="h2">And so much more...</h2>
		<p>There's too many amazing features to list, but here are a few of our favorites.</p>
	</div>
	<!-- Grid -->
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
		<!-- Loop -->
		{#each features as feature}
			<!-- Card -->
			<div class="card variant-glass p-4 shadow-lg md:p-10 space-y-4 text-center">
				<span class="btn-icon btn-icon-xl variant-soft-primary">
					<i class="fa-solid {feature.icon}" />
				</span>
				<h3 class="h3">{feature.title}</h3>
				<p>{@html feature.body}</p>
			</div>
		{/each}
	</div>
</div>
