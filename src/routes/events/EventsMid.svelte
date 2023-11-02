<script lang="ts">
    let elemCarousel: HTMLDivElement
    function carouselLeft(): void {
        const x =
		elemCarousel.scrollLeft === 0
			? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
			: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
        elemCarousel.scroll(x, 0);
    }
    function carouselRight(): void {
        const x =
		elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
			? 0 // loop
			: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
        elemCarousel.scroll(x, 0);
    }
    
    function carouselThumbnail(index: number) {
    	elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
    }
    const nftMusicHallEvents = [
        'https://media.discordapp.net/attachments/1094571932088807547/1163434567642910760/image.png?ex=653f8fe0&is=652d1ae0&hm=94d9db2a57168809410e31caa16fe58d3d39a3bbe67b7c56748fa757bbb2638d&=&width=459&height=404',
        'https://media.discordapp.net/attachments/1094571932088807547/1163434568074928158/image.png?ex=653f8fe0&is=652d1ae0&hm=0474727b47bfaa5a21bbb59a9dc1a8e4db582af06a0928396a673d36cd1d562e&=&width=440&height=404',
        'https://media.discordapp.net/attachments/1094571932088807547/1163434568511139940/image.png?ex=653f8fe0&is=652d1ae0&hm=2872347be5c71a277f1a21f5e4253ad0fddae92dc5da8ff0a662c37bc40fcc18&=&width=442&height=404',
        'https://media.discordapp.net/attachments/1094571932088807547/1163434569043808296/image.png?ex=653f8fe0&is=652d1ae0&hm=c52becf16d1e376c339e2a343a700cb131780b53b5797676f582ee24c65f6457&=&width=441&height=404'
    ]
</script>
<h2 class="h2 mx-auto font-bold">Previous events hosting by</h2>
<h3 class="h3 mx-auto"> NFT MUSIC HALL</h3>
<br />
<div class="card variant-ghost-error p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
    <button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
        <i class="fa-solid fa-arrow-left" />
    </button>
    <div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
        {#each nftMusicHallEvents as nftMusicHallUrl}
            <img
                class="snap-center w-[720px] rounded-container-token"
                src={nftMusicHallUrl}
                alt="Previous NFT Music Hall Events"
                loading="lazy"
            />
        {/each}
    </div>
    <button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
        <i class="fa-solid fa-arrow-right" />
    </button>
</div>
<br />
<div class="card variant-ghost-warning p-4 grid grid-cols-6 gap-4">
    {#each nftMusicHallEvents as url, i}
        <button type="button" on:click={() => carouselThumbnail(i)}>
            <img
                class="rounded-container-token"
                src={url}
                alt={url}
                loading="lazy"
            />
        </button>
    {/each}
</div>