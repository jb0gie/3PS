import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import PocketBase from 'pocketbase';
import type { RecordModel } from 'pocketbase';

const pb = new PocketBase('https://pb.thirdplanetstudios.247420.xyz');

declare global {
	interface Window {
		pb: typeof pb;
	}
}

if (browser) {
	window.pb = pb;
}
let musicians = writable();
let musiciansDone = false;
const getMusicians = () => {
	if (!musiciansDone) {
		musiciansDone = true;
		pb.collection('musician')
			.getList()
			.then((a) => {
				const out = a.items.map((item) => {
					if (item.pic) {
						const picUrls = item.pic.map((picId: string) => pb.files.getURL(item, picId));
						item.pic = picUrls;
					} else {
						console.warn('Item does not have a pic property:', item);
					}
					return item;
				});
				musicians.set(out);
			});
	}
	return musicians;
};

let artists = writable();
let artistsDone = false;
const getArtists = () => {
	if (!artistsDone) {
		artistsDone = true;
		pb.collection('artist')
			.getList()
			.then((a) => {
				const out = a.items.map((item) => {
					if (item.pic) {
						const picUrls = item.pic.map((picId: string) => pb.files.getURL(item, picId));
						item.pic = picUrls;
					} else {
						console.warn('Item does not have a pic property:', item);
					}
					return item;
				});
				artists.set(out);
			});
	}
	return artists;
};

let metaverse = writable<RecordModel[]>([]);
pb.collection('metaverse')
	.getList()
	.then(async (w) => {
		const out = w.items.map((item) => {
			// const picUrls = item.pic.map((picId) => pb.files.getUrl(item, picId));
			// item.pic = picUrls;
			// console.log(item.pic);
			return item;
		});
		metaverse.set(out);
	});

const partner = writable<RecordModel[]>([]);
pb.collection('partner')
	.getList()
	.then(async (p) => {
		// console.log(p.items);
		const out = p.items.map((item) => {
			let picUrls = item.pic.map((picId: string) => pb.files.getURL(item, picId));
			item.pic = picUrls;
			// console.log(item.pic)
			return item;
		});
		partner.set(out);
	});

export default { getArtists, getMusicians, partner, metaverse };
