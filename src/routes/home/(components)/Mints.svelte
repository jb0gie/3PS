<script>
	import OrbGlow from '../../../lib/components/OrbGlow.svelte';

	const ghost = {
		pfpURL: 'https://f8n-production.imgix.net/collections/por51mxie.jpg',
		collectionURL: 'https://foundation.app/collection/ghost-art?',
		collectionName: 'Ghost',
		collectionDesc: `During the pandemic, while the world was shut down, my family was dealing with a personal tragic situation: my aunt was dying from cancer.
		<p>Out of darkness comes truth and beauty. Ghost was inspired by love and sadness, and the process of recording the song awakened something in me.</p>
		<p>In this collection of art, video moments were chosen that speak to specific lyrics or musical moments from Ghost. Loneliness, sadness, the urge to run away, the instinct to try to make a connection.</p>`,
		author: 'Kena',
		mintDate: 'Sep-21-2022',
		txURL:
			'https://etherscan.io/tx/0xf158c0b5c27ece29cb89cbb13c56a0231acb659587f87337a34707db73034c9d'
	};
	const grifter = {
		pfpURL:
			'https://asynchronous-art-inc-res.cloudinary.com/image/upload/w_450,h_450,f_auto,c_thumb/v1662993679/editionRenders/3236d1d8358a77394a5a0dd9c4183414.png',
		collectionURL: 'https://async.market/blueprints/631c8c13df536872b28161fb/griffter-better-way',
		collectionName: 'Better Way',
		collectionDesc: `Electronic music producer Griffter is back with his 10th released single!
		<p>This time he teams up with powerhouse vocalist Jessie Wagner (Chic, Lenny Kravitz, Duran Duran) to bring you this high-energy, pop/EDM song!</p>
		<p>Griffter also teamed up with muralist and digital-artist, Dee Jae Paeste. With murals spanning San Jose, CA to Manila, Phillippines, Dee Jae's brings the energy of his Goddess' to this Async project.</p>`,
		author: 'Griffter',
		mintDate: 'Jun-26-2022',
		txURL:
			'https://etherscan.io/tx/0xe0c5cadfa7525e1e27167efb8e338f4cafbe09de4f8ff7ce09e2e7df49cb09ee'
	};
	const abel = {
		pfpURL: 'https://i.imgur.com/49qFxi0.png',
		collectionURL: 'https://app.manifold.xyz/c/dreameater',
		collectionName: 'Dream Eater',
		collectionDesc: `Inside our minds the gears turn, I imagine my thoughts and dreams coming from a type of machine.
		<p>Late at night this machine ticks away calculating the most intricate patterns and powerful sweeps of inspiration.</p>
		<p>The spirit never sleeps, only eats when we dream.</p>`,
		author: 'Abel Okugawa',
		mintDate: 'May-30-2022',
		txURL:
			'https://etherscan.io/tx/0xacdd203ce961792cf4d6d8590119dcab0fd790a0a67b6a08320b016b9e8bda5a'
	};
	const card =
		'flex-col p-8 py-16 rounded-lg md:p-12 supports-[backdrop-filter]:bg-background/60 border bg-background/95 backdrop-blur';
</script>

<header class="card-header text-center">
	<h1 class="self-start inline text-4xl font-bold">
		<span
			class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
			>LATEST</span
		>
		<span
			class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
			>MINTS</span
		>
	</h1>
</header>
<br /><br />
<div class="grid gap-4 md:grid-cols-3">
	<div class={card}>
		<a href={ghost.collectionURL} target="_blank" rel="noreferrer">
			<img src={ghost.pfpURL} class="bg-black/50 w-full rounded-lg" alt="Post" />
			<br />
			<p class="flex items-center justify-center text-3xl font-semibold">
				{ghost.collectionName}
			</p>
			<div class="h-6" />
			<h6 class="font-bold text-2xl" data-toc-ignore>By {ghost.author}</h6>
			<a href={ghost.txURL}>
				<small>On {ghost.mintDate}</small>
			</a>
		</a>
	</div>
	<div class={card}>
		<a href={grifter.collectionURL} target="_blank" rel="noreferrer">
			<img src={grifter.pfpURL} class="bg-black/50 w-full rounded-lg" alt="Post" />
			<br />
			<p class="flex items-center justify-center text-3xl font-semibold">
				{grifter.collectionName}
			</p>
			<div class="h-6" />
			<h6 class="font-bold text-2xl" data-toc-ignore>By {grifter.author}</h6>
			<a href={grifter.txURL}>
				<small>On {grifter.mintDate}</small>
			</a>
		</a>
	</div>
	<div class={card}>
		<a href={abel.collectionURL} target="_blank" rel="noreferrer">
			<img src={abel.pfpURL} class="bg-black/50 w-full rounded-lg" alt="Post" />
			<br />
			<p class="flex items-center justify-center text-3xl font-semibold">
				{abel.collectionName}
			</p>
			<div class="h-6" />
			<h6 class="font-bold text-2xl" data-toc-ignore>By {abel.author}</h6>
			<a href={abel.txURL}>
				<small>On {abel.mintDate}</small>
			</a>
		</a>
	</div>
</div>
