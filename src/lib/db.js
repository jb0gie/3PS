import { writable } from 'svelte/store';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pb.thirdplanetstudios.247420.xyz');

const partner = writable([]);

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

	let musicians = writable();
	let musiciansDone = false;
	const getMusicians = () => {
		if (!musiciansDone) {
			musiciansDone = true;
			pb.collection('musician').getList(1, 50,
				{
					sort: '-createdAt'
				}
			).then(a => {
				const out = a.items.map((item) => {
					if (item.pic) {
						const picUrls = item.pic.map((picId) => pb.files.getUrl(item, picId));
						item.pic = picUrls;
					} else {
						console.warn('Item does not have a pic property:', item);
					}
					return item;
				});
				musicians.set(out);

			});
		}
		return musicians
	}

	let artists = writable();
	let artistsDone = false;
	const getArtists = () => {
		if (!artistsDone) {
			artistsDone = true;
			pb.collection('artist').getList(1, 50,

			).then(a => {
				const out = a.items.map((item) => {
					if (item.pic) {
						const picUrls = item.pic.map((picId) => pb.files.getUrl(item, picId));
						item.pic = picUrls;
					} else {
						console.warn('Item does not have a pic property:', item);
					}
					return item;
				});
				artists.set(out);

			});
		}
		return artists
	}

export default { partner, getArtists, getMusicians, metaverse };