import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';
import PocketBase from 'pocketbase';
import type { RecordModel } from 'pocketbase';

interface TeamMember extends RecordModel {
	name: string;
	nickname: string;
	bio: string;
	role: string;
	pic: string[];
}

interface Musician extends RecordModel {
	name: string;
	genre: string;
	pic: string[];
}

interface Artist extends RecordModel {
	name: string;
	pic: string[];
}

interface Partner extends RecordModel {
	name: string;
	pic: string[];
}

const pb = new PocketBase('https://pb.thirdplanet.studio');

declare global {
	interface Window {
		pb: typeof pb;
	}
}

if (browser) {
	window.pb = pb;
}

// Helper function for direct navigation data fetching
async function fetchCollection<T extends RecordModel>(
	collection: string,
	customFetch?: typeof fetch
): Promise<T[]> {
	const response = await pb
		.collection(collection)
		.getList<T>(undefined, undefined, { fetch: customFetch });
	return response.items.map((item) => {
		if ('pic' in item && item.pic) {
			const picUrls = Array.isArray(item.pic)
				? item.pic.map((picId: string) => pb.files.getURL(item, picId))
				: [];
			return { ...item, pic: picUrls };
		}
		return { ...item, pic: [] };
	});
}

let team: Writable<TeamMember[]> = writable([]);
let teamDone = false;
const getTeam = async (customFetch?: typeof fetch) => {
	if (!teamDone) {
		teamDone = true;
		const response = await pb
			.collection('team')
			.getList<TeamMember>(undefined, undefined, { fetch: customFetch });
		const out = response.items.map((item) => {
			if (item.pic) {
				const picUrls = item.pic.map((picId: string) => pb.files.getURL(item, picId));
				item.pic = picUrls;
			} else {
				item.pic = [];
			}
			return item;
		});
		team.set(out);
	}
	return team;
};

let musicians: Writable<Musician[]> = writable([]);
let musiciansDone = false;
const getMusicians = () => {
	if (!musiciansDone) {
		musiciansDone = true;
		pb.collection('musician')
			.getList<Musician>()
			.then((a) => {
				const out = a.items.map((item) => {
					if (item.pic) {
						const picUrls = item.pic.map((picId: string) => pb.files.getURL(item, picId));
						item.pic = picUrls;
					} else {
						item.pic = [];
					}
					return item;
				});
				musicians.set(out);
			});
	}
	return musicians;
};

let artists: Writable<Artist[]> = writable([]);
let artistsDone = false;
const getArtists = () => {
	if (!artistsDone) {
		artistsDone = true;
		pb.collection('artist')
			.getList<Artist>()
			.then((a) => {
				const out = a.items.map((item) => {
					if (item.pic) {
						const picUrls = item.pic.map((picId: string) => pb.files.getURL(item, picId));
						item.pic = picUrls;
					} else {
						item.pic = [];
					}
					return item;
				});
				artists.set(out);
			});
	}
	return artists;
};

let partner: Writable<Partner[]> = writable([]);
let partnerDone = false;
const getPartner = () => {
	if (!partnerDone) {
		partnerDone = true;
		pb.collection('partner')
			.getList<Partner>()
			.then((a) => {
				const out = a.items.map((item) => {
					if (item.pic) {
						const picUrls = item.pic.map((picId: string) => pb.files.getURL(item, picId));
						item.pic = picUrls;
					} else {
						item.pic = [];
					}
					return item;
				});
				partner.set(out);
			});
	}
	return partner;
};

let metaverse: Writable<RecordModel[]> = writable([]);
let metaverseDone = false;
const getMetaverse = () => {
	if (!metaverseDone) {
		metaverseDone = true;
		pb.collection('metaverse')
			.getList()
			.then((a) => {
				metaverse.set(a.items);
			});
	}
	return metaverse;
};

// Initialize data
getPartner();
getMetaverse();

export default { getTeam, getArtists, getMusicians, partner, metaverse };
