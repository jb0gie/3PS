import { writable } from 'svelte/store';
import PocketBase from 'pocketbase';

let pbUrl = 'https://pb.thirdplanetstudios.247420.xyz';
const pb = new PocketBase({ pbUrl });
const partner = writable([]);
const artist = writable([]);
const musician = writable([]);

pb.collection('artist').getList().then((a) => {
		console.log(a.items);
		const out = a.items.map((item) => {
			item.avatarUrl = pb.files.getUrl(item, item.avatar, { thumb: '100x250' });
			return item;
		});
		members.set(out);
	});

export default { artist };
