<script>
	import PageTitle from '$lib/components/page-title.svelte';

	import db from '$lib/db';
	import OrbGlow from '$lib/components/orb-glow.svelte';

	const services = {
		srvcTitle: `Services`,
		srvcTitle1: `<p>A&R</p>`,
		srvcBody1: ``,

		srvcTitle3: `<p>Asset Consulting</p>`,
		srvcBody3: ``,
		srvcTitle4: `<p>Management</p>`,
		srvcBody4: ``,
		srvcTitle5: `<p>3D Design | Animmation</p>`,
		srvcBody5: `<p>For artists who would like to give their digital art or hard copy a little pizazz with some animation, our 3D visual artist can help bring your work to life!</p>`
	};
	const vProd = {
		title: `<p>Virtual event production</p>`,
		desc: `<p>Our virtual event production services are designed to transcend geographical boundaries, delivering immersive and engaging experiences for your online audience.</p><br /><p>From cutting-edge virtual platforms to interactive content creation, we leverage the latest technologies to ensure your virtual event is not just a broadcast but an unforgettable journey.</p>`,
		subTitle: `<p>Services include</p>`,
		serviceOne: 'Customizable virtual sets/platforms',
		serviceTwo: 'Seamless live broadcasting',
		serviceThree: 'Engaging multimedia content',
		serviceFour: 'Interactive audience tools',
		serviceFive: 'Technical support'
	};
	const iProd = {
		title: `<p>IRL event production</p>`,
		desc: `<p>For those moments when face-to-face interaction is irreplaceable, our in-person event production services guarantee a seamless and memorable experience.</p><br /><p>From concept to execution, we handle every detail to create an atmosphere that captivates and inspires.</p>`,
		subTitle: `<p>Services include</p>`,
		serviceOne: 'Venue selection and management',
		serviceTwo: 'Stage design and setup',
		serviceThree: 'Audio-visual production',
		serviceFour: 'Lighting and ambiance creation',
		serviceFive: 'Logistics coordination',
		serviceSix: 'On-site technical support',
		serviceSeven: 'Crowd management and security'
	};
	const folio = {
		title: `Help build your web3 portfolio`,
		desc: `<p>3PS will help organize , structure and help facilitate your collections, book virtual and real life gigs, orchestrate your releases and help pursue your long-term career goals.</p>`
	};
	const onBoard = {
		title: `3PS will help educate`,
		desc: `<p>3PS will help teach how to set up a digital wallet where you will receive your sale profits and royalties, how to exchange cryptocurrency, how to “mint” (validate ownership in a blockchain) your own NFT's, and how to build your own marketplace.</p>`
	};
	const media = {
		title: `Recording artists and visual artists.`,
		desc: `<p>3PS Specializes in talent scouting and the development of recording artists.</p><br><p>Our job is to find you the best studios, producers, and collaborations that will help you achieve your creative endeavors.</p>`
	};
	const digitalPr = {
		title: `<p>Digtial PR</p>`,
		desc: `<p>3PS will promote and display your hard copy and/or NFT's of choice along with any promotional data provided through the 3PS website, social media, our virtual venue and any advertising companies we collaborate with.</p>`
	};
	const threeDesign = {};
	const cBase =
		'flex-shrink-0 m-6 relative variant-glass-secondary rounded-xl overflow-hidden max-w-sm shadow-lg gradient-end';

	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
	const glassMorphism =
		'supports-[backdrop-filter]:bg-background/60 bg-background/95 shadow-sm backdrop-blur rounded-xl py-12 relative border';
</script>

<PageTitle>
	<svelte:fragment slot="pageName">Services</svelte:fragment>
</PageTitle>

<div class={glassMorphism}>
	<div class="mx-auto px-4 sm:px-6 lg:px-8">
		<div class="lg:text-left">
			<h2 class="text-base font-semibold tracking-wide uppercase">Why Choose</h2>
			<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
				Our Services
			</p>
			<p class="mt-4 text-xl">
				We're not just adapting to the future; we're shaping it. Our team of visionaries is
				dedicated to pushing the boundaries of what's possible in the Web3 space.
			</p>
			<p class="mt-4 text-xl">
				Join us on the forefront of the revolution, where music, art, and entertainment converge
				with blockchain to create an unparalleled digital experience.
			</p>
			<p class="mt-4 text-xl">
				Third Planet Studio is a collective of founders, creators, technical co-founders,
				developers, designers, strategists, and project managers who thrive on creating
				transformative digital experiences.
			</p>
			<p class="mt-4 text-xl">
				More importantly, we prioritize crafting the perfect digital solutions for our trusted
				partners. Whether it's apps, websites, or other digital products, we adapt to your
				strategic requirements.
			</p>
		</div>

		<div class="mt-10">
			<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium">{@html vProd.title}</p>
					</dt>
					<dd class="mt-2 ml-16 text-base">
						{@html vProd.desc}
					</dd>
					<dd class="mt-4 ml-16 text-base">
						<p class="text-lg leading-6 font-medium">{@html vProd.subTitle}</p>
						<br />
						<div class="flex flex-col gap-2">
							<li href="#">{vProd.serviceOne}</li>
							<li href="#">{vProd.serviceTwo}</li>
							<li href="#">{vProd.serviceThree}</li>
							<li href="#">{vProd.serviceFour}</li>
							<li href="#">{vProd.serviceFive}</li>
						</div>
					</dd>
				</div>
				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium">{@html iProd.title}</p>
					</dt>
					<dd class="mt-2 ml-16 text-base">
						{@html iProd.desc}
					</dd>
					<dd class="mt-4 ml-16 text-base">
						<p class="text-lg leading-6 font-medium">{@html iProd.subTitle}</p>
						<br />
						<div class="flex flex-col gap-2">
							<li href="#">{iProd.serviceOne}</li>
							<li href="#">{iProd.serviceTwo}</li>
							<li href="#">{iProd.serviceThree}</li>
							<li href="#">{iProd.serviceFour}</li>
							<li href="#">{iProd.serviceFive}</li>
						</div>
					</dd>
				</div>
				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium">{@html folio.title}</p>
					</dt>
					<dd class="mt-2 ml-16 text-base">
						{@html folio.desc}
					</dd>
				</div>
				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium">{@html onBoard.title}</p>
					</dt>
					<dd class="mt-2 ml-16 text-base">
						{@html onBoard.desc}
					</dd>
				</div>
				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium">{@html media.title}</p>
					</dt>
					<dd class="mt-2 ml-16 text-base">
						{@html media.desc}
					</dd>
				</div>
			</dl>
		</div>
	</div>
</div>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16;
		md: py-24;
	}
	.anim-float-avatar {
		animation: float-up 13s ease-in-out infinite;
	}

	.anim-float-search {
		animation: float-up 14s ease-in-out infinite;
		animation-delay: 3s;
	}
	.anim-float-radio {
		animation: float-down 17s ease-in-out infinite;
	}

	.anim-float-button {
		animation: float-up 15s ease-in-out infinite;
	}
	/* prettier-ignore */
	@keyframes float-up {
		0% { transform: translateY(0px); }
		50% { transform: translateY(-20px); }
		100% { transform: translateY(0px); }
	}
	/* prettier-ignore */
	@keyframes float-down {
		0% { transform: translateY(0px); }
		50% { transform: translateY(20px); }
		100% { transform: translateY(0px); }
	}
</style>
