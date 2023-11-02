<script lang="ts">
	export let artist: any;
	const profileBox =
		'max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0';
	const bigProfile = 'rounded-lg shadow-2xl';
	const profileDesc = 'pt-4 text-base font-bold flex items-center justify-center lg:justify-start';
</script>

<!-- Display artist information here -->
<div class={profileBox}>
	<section class="img-bg" />
	<!--Main Col-->
	<!-- <pre>{JSON.stringify(artist, null, 2)}</pre> -->
	<div
		id="profile"
		class="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl variant-glass-surface mx-6 lg:mx-0"
	>
		<div class="p-4 md:p-12 text-center lg:text-left">

			<!-- Image for mobile view-->
			<br />
			<div
				class="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
				style="background-image: url({artist?.pic[0]})"
			/>
			<h1 class="h1 text-3xl font-bold pt-8 lg:pt-0">{artist?.title}</h1>
			<div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
			<p class={profileDesc}>{artist?.desc}</p>
			<br />
			<h4 class="h4">{@html artist?.bio}</h4>
			<br />
		</div>
	</div>
	<!--Img Col-->
	<div class="w-full">
		<br />
		<br />
		<!-- Big profile image for side bar (desktop) -->
		<di class="grid grid-cols-4 gap-2">
			{#each artist?.pic as pics}
				<div class="grid gap-4">
					<div>
						<img class={bigProfile} src={pics} alt={artist?.desc} />
					</div>
				</div>
			{/each}
		</di>
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
