<script lang="ts">
	import AboutBinx from './AboutBinx.svelte';
	import AboutKuri from './AboutKuri.svelte';
	import AboutAckapella from './AboutAckapella.svelte';
	
	let showcase = 'BAND MOM';
	const cHead = 'h2 hover:text-indigo-500 text-gray-900 font-extrabold transition duration-500 ease-in-out';
	const gradientHeading = 'bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone';
	const founder = `<p>Third Planet Studio was founded by Binx, Ackapella and Kuri.</p>`;

</script>

<div class="py-8 max-w-screen-xl mx-auto">
        <div class="text-center mb-16">
            <h1 class="h1 text-4xl sm:text-6xl leading-normal mt-16 font-extrabold tracking-tight">
                3PS <span class={gradientHeading}>FOUNDERS</span>
            </h1>
        </div>
        <div class="grid grid-cols-3 col-gap-10">
            <div class="card-hover text-center bg-white rounded-l-xl">
				<div class="p-4">
					<img class="rounded-xl" src="https://pbs.twimg.com/profile_images/1518727186294976514/o5YsjZ0W.jpg" alt="a">
                    <div class="text-md">
                        <a href="#" class={cHead}>ACKAPELLA</a>
                        <p class="h3 text-gray-500 uppercase text-lg">crypt master</p>
                    </div>
                    <div class="my-4 flex justify-center items-center">
                        <a href="#"><i class="fa-brands fa-square-facebook h3 mr-3" style="color: #000"/></a>
                        <a href="#"><i class="fa-brands fa-x-twitter h2" style="color: #000"/></a>
                        <a href="#"><i class="fa-brands fa-instagram h3 ml-3" style="color: #000"/></a>                        
                    </div>
                </div>
            </div>
            <div class="card-hover text-center bg-white">
				<div class="p-4">
					<img class="w-full rounded-xl" src="https://pbs.twimg.com/profile_images/1577684445833953281/SGrq5Coy_400x400.jpg" alt="a">
                    <div class="text-md">
                        <a href="#top" class={cHead}>
							BINX
						</a>
                        <p class="h3 text-gray-500 uppercase text-lg">band mom</p>
                    </div>
                    <div class="my-4 flex justify-center items-center">
                        <a href="#"><i class="fa-brands fa-square-facebook h3 mr-3" style="color: #000"/></a>
                        <a href="#"><i class="fa-brands fa-x-twitter h2" style="color: #000"/></a>
                        <a href="#"><i class="fa-brands fa-instagram h3 ml-3" style="color: #000"/></a>   
                    </div>
                </div>
            </div>
            <div class="card-hover text-center bg-white rounded-r-xl">
				<div class="p-4">
					<img class="w-100 rounded-xl" src="https://pbs.twimg.com/profile_images/1712861383597912065/T59n0VJE.jpg" alt="a">
                    <div class="text-md">
                        <a href="#" class={cHead}>
							KURI
						</a>
                        <p class="h3 text-gray-500 uppercase text-lg">vtuber</p>
                    </div>
                    <div class="my-4 flex justify-center items-center">
                        <a href="#"><i class="fa-brands fa-square-facebook h3 mr-3" style="color: #000"/></a>
                        <a href="#"><i class="fa-brands fa-x-twitter h2" style="color: #000"/></a>
                        <a href="#"><i class="fa-brands fa-instagram h3 ml-3" style="color: #000"/></a>   
                    </div>
                </div>
            </div>
        </div>
    </div>