<!-- PARTNERS & AFFILIATES -->
<script>
	// import { Avatar, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { Calendar } from "radix-icons-svelte";
	import * as Avatar from "$lib/components/ui/avatar";
  import * as HoverCard from "$lib/components/ui/hover-card";
	// let popupMlm: PopupSettings = { event: 'hover', target: 'popupMlm', placement: 'top' };
	// let popupMetaJax: PopupSettings = { event: 'hover', target: 'popupMetaJax', placement: 'top' };
	// let popupTokenSmart: PopupSettings = { event: 'hover', target: 'popupTokenSmart', placement: 'top' };
	// let popupNftMusicHall: PopupSettings = { event: 'hover', target: 'popupNftMusicHall', placement: 'top' };
	// let popupNiftyMusic: PopupSettings = { event: 'hover', target: 'popupNiftyMusic', placement: 'top' };
	// let popupRisingSun: PopupSettings = { event: 'hover', target: 'popupRisingSun', placement: 'top' };
	// let popupMusicDistrict: PopupSettings = { event: 'hover', target: 'popupMusicDistrict', placement: 'top' };
	// let popupRawDao: PopupSettings = { event: 'hover', target: 'popupRawDao', placement: 'top' };

	const mlm = "https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/294678801_566640411668027_6637305623894847141_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=flTeJVAIx9gAX-9GGxy&_nc_oc=AQmb4B7QnbNX2d28NhJLO6aLAv2xDIQ89O8uZpZzS2cLqWU10unv974_aaRFZA4atVI&_nc_ht=scontent-man2-1.xx&oh=00_AfBMgOMK24L7WjH8WjtmTOC01JkmgzbxzTBtUGHWgm0b8A&oe=652A6EE3"
	
	const metaJax = "https://pbs.twimg.com/profile_images/1487582176359026689/mSewObvs_400x400.jpg"

	const tokenSmart = "https://pbs.twimg.com/profile_images/1607798648993206272/fcNuiO3V_400x400.jpg"

	const nftMusicHall = "https://pbs.twimg.com/profile_images/1577574448240021504/_j4ihiQt_400x400.jpg"

	const niftyMusic = "https://pbs.twimg.com/profile_images/1500911957108482057/bqzbv1_L_400x400.jpg"

	const risingSun = "https://images.squarespace-cdn.com/content/v1/5696438e841aba21e9e363c7/1452694382954-LY7SR686K3VTRXTK94M8/favicon.ico?format=100w"

	const rawDao = "https://pbs.twimg.com/profile_images/1676320146997248004/j0q06Npg_400x400.jpg"

	const musicDistrict = "https://uca402c07538aa3269e7985e6abd.previews.dropboxusercontent.com/p/thumb/ACC_I4MuF-5E53UtZzcxvFyBPsb6sK5KCzevIpHb9V7pF90n9sAsSRSSHAtrOOnc8hxUchNF9JVNgGVwrw3c7DpmMJ2HHF_-YyVVkOoEPYSoqWWCM0nchxRbhsGtLootBXrkygLIOkFzpsi35uU_-L5tjR9DhwaTxlbcFiGEcuejbOBNOMgU_emR6VRKIjEiOfn_zxhq-FAnlP-EPbqkaKw0oB6DNErJS1ROq97RHSSz6HqnRzw4xWzL_DDFZ-BZjtdb0UNnRskrRM3QHPp3_HD4soK3kl53l5kplzEnqwwa2AZ5XIoE7OHRj0rS_pCPDiG7LXJnf7ZmRrnzV9vuxHiulnXWFW-aP-UE4hE3bmBD7g/p.jpeg"
</script>

<div
	class="flex flex-row lg:flex-row justify-center items-center gap-4 md:gap-10 place-items-center"
>
<HoverCard.Root>
  <HoverCard.Trigger
    href="https://github.com/sveltejs"
    target="_blank"
    rel="noreferrer noopener"
    class="hover:underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
  >
    @sveltejs
  </HoverCard.Trigger>
  <HoverCard.Content class="w-80">
    <div class="flex justify-between space-x-4">
      <Avatar.Root>
        <Avatar.Image src="https://github.com/sveltejs.png" />
        <Avatar.Fallback>SK</Avatar.Fallback>
      </Avatar.Root>
      <div class="space-y-1">
        <h4 class="text-sm font-semibold">@sveltejs</h4>
        <p class="text-sm">Cybernetically enhanced web apps.</p>
        <div class="flex items-center pt-2">
          <Calendar class="mr-2 h-4 w-4 opacity-70" />{" "}
          <span class="text-xs text-muted-foreground">
            Joined September 2022
          </span>
        </div>
      </div>
    </div>
  </HoverCard.Content>
</HoverCard.Root>
	<!-- <div class="grid grid-cols-4 gap-4 md:gap-10">
		<a
			href="https://mlmentertainment.com/"
			target="_blank"
			rel="noreferrer"
			use:popup={popupMlm}
			class="max-h-[180px]"
		>
			<Avatar
				src={mlm}
				width="w-full max-w-[180px]"
				background="bg-neutral-900"
				shadow="shadow-xl"
			/>
		</a>
		<div
			class="text-xs text-center card variant-filled-error p-2 whitespace-nowrap shadow-xl"
			data-popup="popupMlm"
		>
			<p class="font-bold">MLM Entertainment</p>
			<div class="arrow variant-filled-error" />
		</div>
		<a
			href="https://jaxblast.com/"
			target="_blank"
			rel="noreferrer"
			use:popup={popupMetaJax}
			class="max-h-[180px]"
		>
			<Avatar src={metaJax} width="w-full max-w-[180px]" shadow="shadow-xl" />
		</a>
		<div
			class="text-xs text-center card variant-filled-warning p-2 whitespace-nowrap shadow-xl"
			data-popup="popupMetaJax"
		>
			<p class="font-bold">Meta Jax</p>
			<div class="arrow variant-filled-warning" />
		</div>
		<a
			href="https://www.tokensmart.co/"
			target="_blank"
			rel="noreferrer"
			use:popup={popupTokenSmart}
			class="max-h-[180px]"
		>
			<Avatar src={tokenSmart} width="w-full max-w-[180px]" shadow="shadow-xl" />
		</a>
		<div
			class="text-xs text-center card variant-filled-tertiary p-2 whitespace-nowrap shadow-xl"
			data-popup="popupTokenSmart"
		>
			<p class="font-bold">Token Smart</p>
			<div class="arrow variant-filled-tertiary" />
		</div>
		<a
			href="https://nftmusichall.io/"
			target="_blank"
			rel="noreferrer"
			use:popup={popupNftMusicHall}
			class="max-h-[180px]"
		>
			<Avatar src={nftMusicHall} width="w-full max-w-[180px]" shadow="shadow-xl" />
		</a>
		<div
			class="text-xs text-center card variant-filled-primary p-2 whitespace-nowrap shadow-xl"
			data-popup="popupNftMusicHall"
		>
			<p class="font-bold">NFT Music Hall</p>
			<div class="arrow variant-filled-primary" />
		</div>
		<a
			href="https://niftymusic.academy/"
			target="_blank"
			rel="noreferrer"
			use:popup={popupNiftyMusic}
			class="max-h-[180px]"
		>
			<Avatar src={niftyMusic} width="w-full max-w-[180px]" shadow="shadow-xl" />
		</a>
		<div
			class="text-xs text-center card variant-filled-secondary p-2 whitespace-nowrap shadow-xl"
			data-popup="popupNiftyMusic"
		>
			<p class="font-bold">Nifty Music</p>
			<div class="arrow variant-filled-secondary" />
		</div>
		<a
			href="https://musicdistrict.io/"
			target="_blank"
			rel="noreferrer"
			use:popup={popupMusicDistrict}
			class="max-h-[180px]"
		>
			<Avatar src={musicDistrict} width="w-full max-w-[180px]" shadow="shadow-xl" />
		</a>
		<div
			class="text-xs text-center card variant-filled-warning p-2 whitespace-nowrap shadow-xl"
			data-popup="popupMusicDistrict"
		>
			<p class="font-bold">Music District</p>
			<div class="arrow variant-filled-warning" />
		</div>
		<a
			href="https://linktr.ee/the_raw_dao"
			target="_blank"
			rel="noreferrer"
			use:popup={popupRawDao}
			class="max-h-[180px]"
		>
			<Avatar src={rawDao} width="w-full max-w-[180px]" shadow="shadow-xl" />
		</a>
		<div
			class="text-xs text-center card variant-filled-success p-2 whitespace-nowrap shadow-xl"
			data-popup="popupRawDao"
		>
			<p class="font-bold">Raw Dao</p>
			<div class="arrow variant-filled-success" />
		</div>
	</div> -->
	<div class="space-y-4 text-center lg:text-left">
		<h2 class="h2">Partners & Affiliates</h2>
		<p class="max-w-[480px]">
			These collaborators bring a wealth of expertise and creativity to the table.
		</p>
		<p class="max-w-[480px]">
			Together, they're pioneering the future of interactive storytelling, making the cosmos of
			digital art and technology more vibrant and interconnected than ever before.
		</p>
	</div>
</div>
