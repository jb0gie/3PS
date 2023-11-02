<script lang="ts">
    import third_planet from '$lib/images/3PSFINALLOGO.png'
    const events = {
        title : `EVENTS`,
        metaJax : "https://pbs.twimg.com/profile_images/1487582176359026689/mSewObvs_400x400.jpg",
        nftMusicHall : "https://pbs.twimg.com/profile_images/1577574448240021504/_j4ihiQt_400x400.jpg",
        calanderUrl : "https://calendar.google.com/calendar/embed?height=720&wkst=2&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=1&showPrint=0&mode=AGENDA&src=M3BsYW5ldHN0dWRpb0BnbWFpbC5jb20&color=%23D50000"
    }
</script>

<h2 class="text-6xl font-bold mb-8">{@html events.title}</h2>
<p class="h3 mx-auto">Check out some of our previously hosted/booked events.</p>
<div class="max-w-screen-xl mx-auto p-3 sm:p-10 md:p-16">
    <iframe class="bg-black w-full overflow-hidden rounded" title="3rdPlanetEvents" 
            src={events.calanderUrl} style="border-width:0" width="1280" height="720" frameborder="0" scrolling="no" />
</div>
<div class="relative items-center w-full px-5 py-12 mx-auto md:px-6 lg:px-24 max-w-12xl">
    <div class="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-10 items-center justify-center">
        <div class="relative h-64 rounded-xl bg-cover bg-center"
            style="background-image:url({events.metaJax});">
        </div>
        <div class="relative w-full"><img src={third_planet} alt="logo"/></div>
        <div class="relative h-64 rounded-xl bg-cover bg-center"
            style="background-image:url({events.nftMusicHall});">
        </div>
    </div>
</div>