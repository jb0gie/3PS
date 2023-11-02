<script lang="ts">
	export let musician: any;
	const profileBox =
		'max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0';
	const bigProfile = 'rounded-none lg:rounded-lg shadow-2xl hidden lg:block';
	const profileDesc = 'pt-4 text-base font-bold flex items-center justify-center lg:justify-start';
</script>

<!-- Display musician information here -->
<div class={profileBox}>
	<section class="img-bg" />
	<!--Main Col-->
	<!-- <pre>{JSON.stringify(musician, null, 2)}</pre> -->
	<div
		id="profile"
		class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl variant-glass-surface mx-6 lg:mx-0"
	>
		<div class="p-4 md:p-12 text-center lg:text-left">
			<!-- Image for mobile view-->
			<div
				class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
				style="background-image: url({musician?.pic[0]})"
			/>
			<h1 class="h1 text-3xl font-bold pt-8 lg:pt-0">{musician?.title}</h1>
			<div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
			<p class={profileDesc}>{musician?.desc}</p>
			<br />
			<h4 class="h4">{@html musician?.bio}</h4>
		</div>
	</div>
	<!--Img Col-->
	<div class="w-full lg:w-2/5">
		<!-- Big profile image for side bar (desktop) -->
		<section class="grid grid-cols-2 md:grid-cols-4 gap-2">
			{#each musician?.pic as pics}
				<div class="grid gap-4">
					<div>
						<img class={bigProfile} src={pics} alt={musician?.desc} />
					</div>
				</div>
			{/each}
		</section>
	</div>
</div>

<style lang="postcss">
	img {
		@apply flex relative flex-col;
	}
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation:
			pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
