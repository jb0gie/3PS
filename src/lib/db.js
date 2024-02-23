import { writable } from 'svelte/store';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pb.thirdplanetstudios.247420.xyz');

const partner = writable([]);
const artist = writable([]);
const musician = writable([]);
const metaverse = writable([]);

pb.collection('metaverse')
	.getList()
	.then(async (w) => {
		// console.log(w.items);
		const out = w.items.map((item) => {
			// const picUrls = item.pic.map((picId) => pb.files.getUrl(item, picId));
			// item.pic = picUrls;
			// console.log(item.pic);
			return item;
		});
		metaverse.set(out);
	});

pb.collection('partner')
	.getList()
	.then(async (p) => {
		// console.log(p.items);
		const out = p.items.map((item) => {
			let picUrls = item.pic.map((picId) => pb.files.getUrl(item, picId));
			item.pic = picUrls;
			// console.log(item.pic)
			return item;
		});
		partner.set(out);
	});

pb.collection('artist')
	.getList()
	.then(async (a) => {
		// console.log(a.items);
		const out = a.items.map((item) => {
			const picUrls = item.pic.map((picId) => pb.files.getUrl(item, picId));
			item.pic = picUrls;
			// console.log(item.pic);
			return item;
		});
		artist.set(out);
	}).catch((error) => {
		console.error('Error fetching data:', error);
	});

pb.collection('musician')
	.getList()
	.then(async (m) => {
		// console.log(m.items);
		const out = m.items.map((item) => {
			if (item.pic) {
				const picUrls = item.pic.map((picId) => pb.files.getUrl(item, picId));
				item.pic = picUrls;
			} else {
				console.warn('Item does not have a pic property:', item);
			}
			return item;
		});
		musician.set(out);
	});

export default { partner, artist, musician, metaverse };