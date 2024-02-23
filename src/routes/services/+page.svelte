<script>
	import PageTitle from '../../lib/components/PageTitle/PageTitle.svelte';

	import db from '$lib/db';
	import OrbGlow from '../../lib/components/OrbGlow.svelte';

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
		desc: `<p>3PS will promote and display your hard copy and/or NFT's of choice along with any promotional data provided through the 3PS website, social media, our virtual venue and any advertising companies we collaborate with.</p>`,
	};
	const threeDesign = {
		
	};
	const cBase =
		'flex-shrink-0 m-6 relative variant-glass-secondary rounded-xl overflow-hidden max-w-sm shadow-lg gradient-end';

	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
	const glassMorphism =
		'supports-[backdrop-filter]:bg-background/60 bg-background/95 shadow-sm backdrop-blur rounded-xl py-12 relative border';
</script>

<div>
	<div class="container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
		<PageTitle>
			<svelte:fragment slot="pageName">Services</svelte:fragment>
		</PageTitle>
		
		<div class="h-5 md:h-16" />

		<div class={glassMorphism}>
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="lg:text-left">
					<h2 class="text-base font-semibold tracking-wide uppercase">Why Choose</h2>
					<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
						Our Web3 Services
					</p>
					<p class="mt-4 max-w-2xl text-xl">
						We're not just adapting to the future; we're shaping it. Our team of visionaries is
						dedicated to pushing the boundaries of what's possible in the Web3 space.
					</p>
					<p class="mt-4 max-w-2xl text-xl">
						Join us on the forefront of the revolution, where music, art, and entertainment converge
						with blockchain to create an unparalleled digital experience.
					</p>
					<p class="mt-4 max-w-2xl text-xl">
						Third Planet Studio is a collective of founders, creators, technical co-founders, developers, designers, strategists, and project managers who thrive on creating transformative digital experiences. 
					</p>
					<p class="mt-4 max-w-2xl text-xl">
						More importantly, we prioritize crafting the perfect digital solutions for our trusted partners. Whether it's apps, websites, or other digital products, we adapt to your strategic requirements.
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
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
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
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
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

		<div class="h-12 md:h-24" />
	</div>
</div>

<!-- <div class="section-container mx-auto px-5 mt-16">

    <div class="text-center">
        <h2 class="font-semibold text-3xl">Features you'll love</h2>
        <p class="max-w-md mx-auto mt-2 ">A responsive documentation template built for everyone who wants
            to create a plugin.</p>
    </div>


    <div class="grid md:grid-cols-2 gap-10 mt-10">


        <div class="flex gap-4 items-start">
            <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"><path d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>
            <div>
                <h3 class="font-semibold text-xl">Customizable</h3>
                <p class="mt-1 "> You don't need to be an expert to customize this plugin. Our code is very
                    readable and well documented.</p>
            </div>
        </div>


        <div class="flex gap-4 items-start">
            <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"><path d="M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H2.50002C2.22388 4.99998 2.00002 5.22384 2.00002 5.49998V12.5C2.00002 12.7761 2.22388 13 2.50002 13H9.50002C9.77616 13 10 12.7761 10 12.5V5.49998C10 5.22384 9.77616 4.99998 9.50002 4.99998ZM2.50002 3.99998C1.67159 3.99998 1.00002 4.67156 1.00002 5.49998V12.5C1.00002 13.3284 1.67159 14 2.50002 14H9.50002C10.3284 14 11 13.3284 11 12.5V5.49998C11 4.67156 10.3284 3.99998 9.50002 3.99998H2.50002ZM14.7389 6.00001H14V12H14.7389C14.9469 12 15.064 12.2393 14.9362 12.4035L13.6974 13.9963C13.5973 14.125 13.4028 14.125 13.3027 13.9963L12.0639 12.4035C11.9362 12.2393 12.0532 12 12.2612 12H13V6.00001H12.2612C12.0532 6.00001 11.9361 5.76074 12.0639 5.59653L13.3027 4.00373C13.4028 3.87505 13.5973 3.87505 13.6974 4.00374L14.9362 5.59653C15.0639 5.76074 14.9469 6.00001 14.7389 6.00001Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>
            <div>
                <h3 class="font-semibold text-xl">Fully Responsive</h3>
                <p class="mt-1 "> With mobile, tablet &amp; desktop support it doesn't matter what device
                    you're using. This plugin is responsive in all browsers. </p>
            </div>
        </div>

        <div class="flex gap-4 items-start">
            <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"><path d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>
            <div>
                <h3 class="font-semibold text-xl">Developer Support</h3>
                <p class="mt-1 "> Our plugins are supported by sponsors who provide community support.
                    Sponsors will get email support on weekdays.</p>
            </div>
        </div>

        <div class="flex gap-4 items-start">
            <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"><path d="M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88072 3.11929 7 4.5 7C5.88072 7 7 5.88072 7 4.5C7 3.11929 5.88072 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5ZM10.5 2C9.11929 2 8 3.11929 8 4.5C8 5.88072 9.11929 7 10.5 7C11.8807 7 13 5.88072 13 4.5C13 3.11929 11.8807 2 10.5 2ZM9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5ZM2 10.5C2 9.11929 3.11929 8 4.5 8C5.88072 8 7 9.11929 7 10.5C7 11.8807 5.88072 13 4.5 13C3.11929 13 2 11.8807 2 10.5ZM4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5C6 9.67157 5.32843 9 4.5 9ZM10.5 8C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13C11.8807 13 13 11.8807 13 10.5C13 9.11929 11.8807 8 10.5 8ZM9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>
            <div>
                <h3 class="font-semibold text-xl">Cross Browser</h3>
                <p class="mt-1 "> We make sure our plugins are working perfectly with all modern browsers
                    available such as Chrome, Firefox, Safari. </p>
            </div>
        </div>

        <div class="flex gap-4 items-start">
            <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"><path d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>
            <div>
                <h3 class="font-semibold text-xl">Clean Code</h3>
                <p class="mt-1 "> We strictly follow a set of guidelines along with unit tests to make sure
                    your implementation as easy as possible. </p>
            </div>
        </div>

        <div class="flex gap-4 items-start">
            <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"><path d="M7.28856 0.796908C7.42258 0.734364 7.57742 0.734364 7.71144 0.796908L13.7114 3.59691C13.8875 3.67906 14 3.85574 14 4.05V10.95C14 11.1443 13.8875 11.3209 13.7114 11.4031L7.71144 14.2031C7.57742 14.2656 7.42258 14.2656 7.28856 14.2031L1.28856 11.4031C1.11252 11.3209 1 11.1443 1 10.95V4.05C1 3.85574 1.11252 3.67906 1.28856 3.59691L7.28856 0.796908ZM2 4.80578L7 6.93078V12.9649L2 10.6316V4.80578ZM8 12.9649L13 10.6316V4.80578L8 6.93078V12.9649ZM7.5 6.05672L12.2719 4.02866L7.5 1.80176L2.72809 4.02866L7.5 6.05672Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>
            <div>
                <h3 class="font-semibold text-xl">Well Maintained</h3>
                <p class="mt-1 "> This templatte is actively maintained by the core plugin team. We are
                    working on fixing each of the issues reported.</p>
            </div>
        </div>

    </div>
</div> -->

<!-- <div class="section-container mx-auto px-12">
	<p class="text-xl sm:text-2xl mx-auto">
		Step into the future of music, art, and entertainment with our Web3-powered services that redefine the boundaries of creativity and audience engagement. We seamlessly blend blockchain technology, decentralized platforms, and immersive experiences to revolutionize the way we create, consume, and interact with content.
	</p>
	<br />
	<p class="text-xl sm:text-4xl mx-auto">
		Why Choose Our Web3 Services:
	</p>
    <br />
    <p class="text-x; sm:text-2xl mx-auto">
        We are shaping the future of Web3, not adapting to it! Pushing boundaries with blockchain in music, art, and entertainment resulting in an unsurpassed digital experience, that's what our team is all about.
    </p>
	<div class="section-container mx-auto px-4">
		<div class="p-1 flex flex-wrap items-center justify-center">
			<div class={cBase}>
				<div class="relative pt-5 px-5 flex items-center justify-center">
					<img
						class="relative w-auto rounded-xl"
						src="https://images.pexels.com/photos/4031039/pexels-photo-4031039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
				</div>
				<div class="relative text-white px-6 pb-6 mt-6">
					<span class="h1 block opacity-75 mb-2">{@html services.srvcTitle1}</span>
					<div class="flex justify-between">
						<span class="block font-semibold text-xl">{@html services.srvcBody1}</span>
					</div>
				</div>
			</div>
			<div class={cBase}>
				<div class="relative pt-5 px-5 flex items-center justify-center">
					<img
						class="relative w-auto rounded-xl"
						src="https://images.pexels.com/photos/7279706/pexels-photo-7279706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
				</div>
				<div class="relative text-white px-6 pb-6 mt-6">
					<span class="h1 block opacity-75 mb-2">{services.title}</span>
					<div class="flex justify-between">
						<span class="block font-semibold text-xl">{@html services.srvcBody2}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="p-1 flex flex-wrap items-center justify-center">
			<div class={cBase}>
				<div class="relative pt-5 px-5 flex items-center justify-center">
					<img
						class="relative w-auto rounded-xl"
						src="https://images.pexels.com/photos/12188470/pexels-photo-12188470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
				</div>
				<div class="relative text-white px-6 pb-6 mt-6">
					<span class="h1 block opacity-75 mb-2">{@html services.srvcTitle3}</span>
					<div class="flex justify-between">
						<span class="block font-semibold text-xl">{@html services.srvcBody3}</span>
						
					</div>
				</div>
			</div>
			<div class={cBase}>
				<div class="relative pt-5 px-5 flex items-center justify-center">
					<img
						class="relative w-auto rounded-xl"
						src="https://images.pexels.com/photos/5598284/pexels-photo-5598284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
				</div>
				<div class="relative text-white px-6 pb-6 mt-6">
					<span class="h1 block opacity-75 mb-2">{@html services.srvcTitle4}</span>
					<div class="flex justify-between">
						<span class="block font-semibold text-xl">{@html services.srvcBody4}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="p-1 flex flex-wrap items-center justify-center">
			<div class={cBase}>
				<div class="relative pt-5 px-5 flex items-center justify-center">
					<img
						class="relative w-auto rounded-xl"
						src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
				</div>
				<div class="relative text-white px-6 pb-6 mt-6">
					<span class="h1 block opacity-75 mb-2">{@html services.srvcTitle5}</span>
					<div class="flex justify-between">
						<span class="block font-semibold text-xl">{@html services.srvcBody5}</span>
					</div>
				</div>
			</div>
			<div class={cBase}>
				<div class="relative pt-5 px-5 flex items-center justify-center">
					<img
						class="relative w-auto rounded-xl"
						src="https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
				</div>
				<div class="relative px-6 pb-6 mt-6">
					<span class="h1 block opacity-75 mb-2">{@html vProd.title}</span>
					<div class="flex justify-between">
						<span class="block font-semibold text-xl">{@html vProd.desc}</span>
                        <br />
						<span class="block font-semibold text-xl"></span>
					</div>
                    <br />
                    <fieldset class="text-xl max-w-md border-2 border-indigo-400 rounded-lg px-4 py-2">
                        <legend class="px-1 font-semibold">{@html vProd.subTitle}</legend>
                        <div class="flex flex-col gap-2 text-violet-800 dark:text-gray-400">
                            <a href="#">{vProd.serviceOne}</a>
                            <a href="#">{vProd.serviceTwo}</a>
                            <a href="#">{vProd.serviceThree}</a>
                            <a href="#">{vProd.serviceFour}</a>
                            <a href="#">{vProd.serviceFive}</a>
                        </div>
                    </fieldset>
				</div>
			</div>
		</div>
	</div>
</div> -->

<!-- <div class="section-container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    <h2 class="text-6xl font-bold mb-8">{services.srvcTitle}</h2>
	<p class="text-4xl font-bold max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
		Here is a few of the awesome Services we provide.
		Where <span class={grad1}>Art</span> &amp; <span class={grad2}>Music</span>
		Unite in the Boundless Realm of Web3
	</p>
	<div class="w-full">
		<div class="flex flex-col w-full mb-10 sm:flex-row">
			<div class="w-full mb-10 sm:mb-0 sm:w-1/2">
				<div class="relative h-full ml-0 mr-0 sm:mr-10">
					<span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg" />
					<div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
						<div class="flex items-center -mt-1">
							<h3 class="my-2 ml-3 text-lg font-bold text-gray-800">DAPP Development</h3>
						</div>
						<p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
						<p class="mb-2 text-gray-600">
							A decentralized application (dapp) is an application built on a decentralized network
							that combines a smart contract and a frontend user interface.
						</p>
					</div>
				</div>
			</div>
			<div class="w-full sm:w-1/2">
				<div class="relative h-full ml-0 md:mr-10">
					<span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg" />
					<div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
						<div class="flex items-center -mt-1">
							<h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Web 3.0 Development</h3>
						</div>
						<p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
						<p class="mb-2 text-gray-600">
							Web 3.0 is the third generation of Internet services that will focus on understanding
							and analyzing data to provide a semantic web.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col w-full mb-5 sm:flex-row">
			<div class="w-full mb-10 sm:mb-0 sm:w-1/2">
				<div class="relative h-full ml-0 mr-0 sm:mr-10">
					<span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg" />
					<div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
						<div class="flex items-center -mt-1">
							<h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Project Audit</h3>
						</div>
						<p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
						<p class="mb-2 text-gray-600">
							A Project Audit is a formal review of a project, which is intended to assess the
							extent up to which project management standards are being upheld.
						</p>
					</div>
				</div>
			</div>
			<div class="w-full mb-10 sm:mb-0 sm:w-1/2">
				<div class="relative h-full ml-0 mr-0 sm:mr-10">
					<span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg" />
					<div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
						<div class="flex items-center -mt-1">
							<h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Hacking / RE</h3>
						</div>
						<p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
						<p class="mb-2 text-gray-600">
							A security hacker is someone who explores methods for breaching defenses and
							exploiting weaknesses in a computer system or network.
						</p>
					</div>
				</div>
			</div>
			<div class="w-full sm:w-1/2">
				<div class="relative h-full ml-0 md:mr-10">
					<span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg" />
					<div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
						<div class="flex items-center -mt-1">
							<h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script Development</h3>
						</div>
						<p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
						<p class="mb-2 text-gray-600">
							Bot development frameworks were created as advanced software tools that eliminate a
							large amount of manual work and accelerate the development process.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> -->

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
