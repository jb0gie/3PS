<script lang="ts">
	import { browser } from '$app/environment';
	// import { enhance } from '$app/forms';

	// Types
	import type { ModalSettings, DrawerSettings, PopupSettings } from '@skeletonlabs/skeleton';
	import type { SubmitFunction } from '@sveltejs/kit';

	// import DocsLogoIcon from '$lib/components/DocsLogos/DocsLogoIcon.svelte';
	import third_planet from '$lib/images/3PSFINALLOGO.png'

	// Components & Utilities
	import { AppBar, LightSwitch, popup, getModalStore } from '@skeletonlabs/skeleton';

	// Stores
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { storeTheme } from '$lib/stores/stores';
	const drawerStore = getDrawerStore();

	// Local
	let isOsMac = false;
	const modalStore = getModalStore();

	// Set Search Keyboard Shortcut
	if (browser) {
		let os = navigator.userAgent;
		isOsMac = os.search('Mac') !== -1;
	}

	// Drawer Handler
	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'doc-sidenav' };
		drawerStore.open(s);
	}

	// Search
	function triggerSearch(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalSearch',
			position: 'item-start'
		};
		modalStore.trigger(modal);
	}

	// Keyboard Shortcut (CTRL/⌘+K) to Focus Search
	function onWindowKeydown(e: KeyboardEvent): void {
		if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
			// Prevent default browser behavior of focusing URL bar
			e.preventDefault();
			// If modal currently open, close modal (allows to open/close search with CTRL/⌘+K)
			$modalStore.length ? modalStore.close() : triggerSearch();
		}
	}

	const setTheme: SubmitFunction = ({ formData }) => {
		const theme = formData.get('theme')?.toString();

		if (theme) {
			document.body.setAttribute('data-theme', theme);
			$storeTheme = theme;
		}
	};

	const popupFeatured: PopupSettings = {
	// Represents the type of event that opens/closed the popup
	event: 'hover',
	// Matches the data-popup value on your popup element
	target: 'popupFeatured',
	// Defines which side of your trigger the popup will appear
	placement: 'bottom',
};

	const mlm = "https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/294678801_566640411668027_6637305623894847141_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=flTeJVAIx9gAX-9GGxy&_nc_oc=AQmb4B7QnbNX2d28NhJLO6aLAv2xDIQ89O8uZpZzS2cLqWU10unv974_aaRFZA4atVI&_nc_ht=scontent-man2-1.xx&oh=00_AfBMgOMK24L7WjH8WjtmTOC01JkmgzbxzTBtUGHWgm0b8A&oe=652A6EE3"
	
	const metaJax = "https://pbs.twimg.com/profile_images/1487582176359026689/mSewObvs_400x400.jpg"

	const tokenSmart = "https://pbs.twimg.com/profile_images/1607798648993206272/fcNuiO3V_400x400.jpg"

	const nftMusicHall = "https://pbs.twimg.com/profile_images/1577574448240021504/_j4ihiQt_400x400.jpg"

	const niftyMusic = "https://pbs.twimg.com/profile_images/1500911957108482057/bqzbv1_L_400x400.jpg"

	const risingSun = "https://images.squarespace-cdn.com/content/v1/5696438e841aba21e9e363c7/1452694382954-LY7SR686K3VTRXTK94M8/favicon.ico?format=100w"

	const rawDao = "https://pbs.twimg.com/profile_images/1676320146997248004/j0q06Npg_400x400.jpg"

	const musicDistrict = "https://uca402c07538aa3269e7985e6abd.previews.dropboxusercontent.com/p/thumb/ACC_I4MuF-5E53UtZzcxvFyBPsb6sK5KCzevIpHb9V7pF90n9sAsSRSSHAtrOOnc8hxUchNF9JVNgGVwrw3c7DpmMJ2HHF_-YyVVkOoEPYSoqWWCM0nchxRbhsGtLootBXrkygLIOkFzpsi35uU_-L5tjR9DhwaTxlbcFiGEcuejbOBNOMgU_emR6VRKIjEiOfn_zxhq-FAnlP-EPbqkaKw0oB6DNErJS1ROq97RHSSz6HqnRzw4xWzL_DDFZ-BZjtdb0UNnRskrRM3QHPp3_HD4soK3kl53l5kplzEnqwwa2AZ5XIoE7OHRj0rS_pCPDiG7LXJnf7ZmRrnzV9vuxHiulnXWFW-aP-UE4hE3bmBD7g/p.jpeg"
</script>

<!-- NOTE: using stopPropagation to override Chrome for Windows search shortcut -->
<svelte:window on:keydown|stopPropagation={onWindowKeydown} />

<AppBar shadow="shadow-2xl" slotTrail="!space-x-2">
	<svelte:fragment slot="lead">
		<div class="flex items-center space-x-4">
			<!-- Hamburger Menu -->
			<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
				<i class="fa-solid fa-bars text-xl" />
			</button>
			<!-- Logo -->
			<a class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden" href="/" title="Go to Homepage">
				<img class="w-10" src={third_planet} alt="logo" />
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<!-- Explore -->
		<div class="relative hidden lg:block">
			<!-- trigger -->
			<button class="btn hover:variant-soft-primary" use:popup={{ event: 'click', target: 'features' }}>
				<span>Explore</span>
				<i class="fa-solid fa-caret-down opacity-50" />
			</button>
			<!-- popup -->
			<div class="card p-4 w-60 shadow-xl" data-popup="features">
				<nav class="list-nav">
					<ul>
						<li>
							<a href="/home">
								<span class="w-6 text-center"><i class="fa-solid fa-home" /></span>
								<span>Homepage</span>
							</a>
						</li>
						<li>
							<a href="/about">
								<span class="w-6 text-center"><i class="fa-solid fa-book" /></span>
								<span>About</span>
							</a>
						</li>
						<li>
							<a href="/services">
								<span class="w-6 text-center"><i class="fa-solid fa-bullhorn" /></span>
								<span>Services</span>
							</a>
						</li>
						<hr class="!my-4" />
						<li>
							<a href="/form">
								<span class="w-6 text-center"><i class="fa-solid fa-file-circle-question"/></span>
								<span>Submission Form</span>
							</a>
						</li>
						<li>
							<a href="/events">
								<span class="w-6 text-center"><i class="fa-solid fa-calendar-days"/></span>
								<span>Events</span>
							</a>
						</li>
						<li>
							<a href="/news">
								<span class="w-6 text-center"><i class="fa-solid fa-newspaper"/></span>
								<span>Newsletter</span>
							</a>
						</li>
					</ul>
				</nav>
				
			</div>
		</div>

		<!-- Roster -->
		<div class="relative hidden lg:block">
			<!-- trigger -->
			<button class="btn hover:variant-soft-primary" use:popup={{ event: 'click', target: 'roster' }}>
				<span>Roster</span>
				<i class="fa-solid fa-caret-down opacity-50" />
			</button>
			<!-- popup -->
			<div class="card p-4 w-60 shadow-xl" data-popup="roster">
				<nav class="list-nav">
					<ul>
						<li>
							<a href="/roster/art">
								<span class="w-6 text-center"><i class="fa-solid fa-palette"/></span>
								<span>Artists</span>
							</a>
						</li>
						<hr class="!my-4" />
						<li>
							<a href="/roster/music">
								<span class="w-6 text-center"><i class="fa-solid fa-music"/></span>
								<span>Muscians</span>
							</a>
						</li>
					</ul>
				</nav>
				<!-- <div class="arrow bg-surface-100-800-token" /> -->
			</div>
		</div>

		<!-- Partners -->
		<div>
			<!-- trigger -->
			<button class="btn hover:variant-soft-primary" use:popup={{ event: 'click', target: 'partners' }}>
				<i class="fa-solid fa-heart text-lg md:!hidden" />
				<span class="hidden md:inline-block">Partners</span>
				<i class="fa-solid fa-caret-down opacity-50" />
			</button>
			<!-- popup -->
			<div class="card p-4 w-60 shadow-xl" data-popup="partners">
				<div class="space-y-4">
					<nav class="list-nav">
						<ul>
							<li>
								<a href="https://mlmentertainment.com/" target="_blank" rel="noreferrer">
									<span class="w-6 text-center">MLM Entertainment</span>
								</a>
							</li>
							<li>
								<a href="https://jaxblast.com/" target="_blank" rel="noreferrer">
									<span class="w-6 text-center">Meta-Jax</span>
								</a>
							</li>
							<li>
								<a href="https://www.tokensmart.co/" target="_blank" rel="noreferrer">
									<span class="w-6 text-center">Token Smart</span>
								</a>
							</li>
							<li>
								<a href="https://twitter.com/nftmusichall" target="_blank" rel="noreferrer">
									<span class="w-6 text-center">NFT Music Hall</span>
								</a>
							</li>
							<li>
								<a href="https://nftmusichall.io/" target="_blank" rel="noreferrer">
									<span class="w-6 text-center">Nifty Music</span>
								</a>
							</li>
							<li>
								<a href="https://www.risingsunstudios.com/" target="_blank" rel="noreferrer">
									<span class="w-6 text-center">Rising Sun Studios</span>
								</a>
							</li>
						</ul>
					</nav>
					<!-- <div>
						<a class="btn variant-filled w-full" href="/docs/sponsorship">
							<i class="fa-solid fa-gift" />
							<span>Incentives</span>
							<span class="badge variant-filled-error">New</span>
						</a>
					</div> -->
				</div>
				<!-- <div class="arrow bg-surface-100-800-token" /> -->
			</div>
		</div>
		<!-- Search -->
		<div class="md:inline md:ml-4">
			<button class="btn space-x-4 variant-soft hover:variant-soft-primary" on:click={triggerSearch}>
				<i class="fa-solid fa-magnifying-glass text-sm" />
				<small class="hidden md:inline-block">{isOsMac ? '⌘' : 'Ctrl'}+K</small>
			</button>
		</div>
		<LightSwitch />
		<!-- Social -->
		<section class="hidden sm:inline-flex space-x-1">
			<!-- x -->
			<a class="btn-icon hover:variant-soft-primary" href="https://twitter.com/3PlanetStudio" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-x-twitter text-lg" />
			</a>
			<!-- cord -->
			<a class="btn-icon hover:variant-soft-primary" href="https://discord.gg/jZev7CuQM2" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-discord text-lg" />
			</a>
			<!-- fb -->
			<a class="btn-icon hover:variant-soft-primary" href="https://www.facebook.com/thirdplanetstudio" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-facebook text-lg" />
			</a>
			<!-- insta -->
			<a class="btn-icon hover:variant-soft-primary" href="https://www.instagram.com/3planetstudio/" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-instagram text-lg" />
			</a>
			<!-- lens  -->
			<a class="btn-icon hover:variant-soft-primary" href="https://www.lensfrens.xyz/thirdplanetstudio.lens" target="_blank" rel="noreferrer">
				<svg
					width="20"
					height="20"
					viewBox="0 0 28 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M27.038 24.1564L26.7566 24.2868C25.0529 25.0632 23.1418 25.2608 21.3152 24.8494C20.3411 24.6355 19.4121 24.2523 18.5705 23.7172C20.2384 24.1484 22.007 23.9429 23.5316 23.1409L23.7512 23.0242L24.0462 22.8595L23.2228 21.4117L22.9277 21.5832L22.7631 21.6724C21.9603 22.0987 21.0603 22.3083 20.1518 22.2806C19.2433 22.2529 18.3577 21.9889 17.5824 21.5146C16.8947 21.1032 16.3075 20.5435 15.8635 19.8764C15.4195 19.2093 15.1301 18.4515 15.0161 17.6583C19.0003 17.2893 22.7398 15.5733 25.6176 12.7933L25.9195 12.4776C26.4256 11.973 26.8178 11.366 27.0699 10.6973C27.322 10.0286 27.4281 9.31375 27.381 8.60067C27.2642 7.32022 26.695 6.12331 25.7754 5.22467C24.8778 4.30358 23.6803 3.73404 22.3994 3.61901C21.2828 3.54039 20.1733 3.84807 19.2567 4.49045C19.066 3.38669 18.4956 2.38425 17.6441 1.65652C16.6588 0.830181 15.4099 0.384645 14.124 0.400816C12.848 0.385004 11.6079 0.822699 10.6245 1.63593C9.77703 2.36697 9.20753 3.36786 9.012 4.46987C8.09565 3.82697 6.98585 3.51922 5.86928 3.5984C4.58883 3.71521 3.39191 4.28449 2.49328 5.20409C1.5727 6.10126 1.00526 7.29942 0.894463 8.58009C0.846532 9.29325 0.952201 10.0084 1.20434 10.6772C1.45648 11.3461 1.84923 11.953 2.35603 12.457C2.4521 12.5668 2.55503 12.6697 2.65795 12.7727C5.53334 15.5522 9.27049 17.2683 13.2526 17.6377C13.14 18.4314 12.8511 19.1897 12.407 19.857C11.9629 20.5244 11.3749 21.0837 10.6863 21.494C9.91224 21.9684 9.02773 22.2325 8.12031 22.2602C7.21289 22.2878 6.31397 22.0782 5.51245 21.6519L5.34091 21.5627L5.04585 21.3911L4.22243 22.8389L4.52435 23.0036C4.59295 23.0466 4.66397 23.0855 4.73706 23.1203C6.26165 23.9223 8.03032 24.1278 9.69818 23.6967C8.85723 24.233 7.92799 24.6163 6.95346 24.8289C5.12685 25.2402 3.21578 25.0426 1.512 24.2662L1.23069 24.1358L0.400391 25.5768L0.736655 25.7346C2.79568 26.6783 5.10769 26.9194 7.31711 26.4208C9.56561 25.9364 11.5804 24.6965 13.0261 22.9076L13.2869 22.5713V26.7364H14.9474V22.5576C15.0298 22.6811 15.119 22.7978 15.2082 22.9076C16.6459 24.7208 18.6645 25.9833 20.9241 26.4826C21.6605 26.6492 22.4129 26.7344 23.1679 26.7364C24.669 26.7345 26.1515 26.4043 27.5114 25.7689L27.8408 25.6111L27.038 24.1564ZM10.5696 6.15787C10.5696 6.05494 10.5696 5.95888 10.5696 5.86281C10.5696 5.76675 10.5696 5.60207 10.5696 5.47855C10.5692 5.01622 10.6623 4.55856 10.8433 4.1331C11.0242 3.70764 11.2893 3.32314 11.6225 3.00269C11.9558 2.68223 12.3504 2.43246 12.7826 2.26834C13.2148 2.10422 13.6758 2.02915 14.1378 2.04765C14.5997 2.02915 15.0607 2.10422 15.4929 2.26834C15.9251 2.43246 16.3197 2.68223 16.653 3.00269C16.9862 3.32314 17.2513 3.70764 17.4323 4.1331C17.6132 4.55856 17.7063 5.01622 17.7059 5.47855C17.7059 5.60207 17.7059 5.73244 17.7059 5.86281C17.7059 5.99319 17.7059 6.06181 17.7059 6.16474L17.651 8.40167L19.2086 6.75484L19.4008 6.56271L19.6752 6.28824C20.0026 5.9632 20.3922 5.70751 20.8206 5.53648C21.2491 5.36544 21.7076 5.28256 22.1689 5.29281C22.6301 5.30306 23.0845 5.40624 23.5049 5.59614C23.9253 5.78604 24.3032 6.05877 24.6158 6.39804C24.955 6.71064 25.2278 7.08846 25.4177 7.50889C25.6076 7.92932 25.7107 8.38373 25.721 8.84494C25.7312 9.30616 25.6483 9.76471 25.4773 10.1932C25.3063 10.6216 25.0506 11.0112 24.7255 11.3386L24.4579 11.6199C21.6612 14.2703 18.0127 15.8391 14.1652 16.0457C10.3171 15.8415 6.66782 14.2723 3.87247 11.6199L3.59802 11.3386C3.27297 11.0112 3.01729 10.6216 2.84625 10.1932C2.67522 9.76471 2.59234 9.30616 2.60259 8.84494C2.61284 8.38373 2.71599 7.92932 2.90589 7.50889C3.09579 7.08846 3.36852 6.71064 3.70779 6.39804C4.38462 5.6998 5.30881 5.29562 6.28097 5.27269C7.17297 5.2865 8.02358 5.6514 8.6483 6.28824L8.92966 6.55586L9.13551 6.77543L10.6794 8.40167L10.5696 6.15787Z" fill="#00501E"/>
            </svg>
			</a>
		</section>
	</svelte:fragment>
</AppBar>
