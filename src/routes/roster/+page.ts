import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

export const trailingSlash = 'always';

export const load: PageLoad = async ({ fetch }) => {
	const pb = new PocketBase('https://pb.thirdplanet.studio');

	// Fetch musicians
	const musiciansResponse = await pb.collection('musician').getList(undefined, undefined, { fetch });
	const musicians = musiciansResponse.items.map((item) => {
		if (item.pic) {
			const picUrls = item.pic.map((picId: string) => pb.files.getURL(item, picId));
			item.pic = picUrls;
		} else {
			item.pic = [];
		}
		return item;
	});

	// Fetch artists
	const artistsResponse = await pb.collection('artist').getList(undefined, undefined, { fetch });
	const artists = artistsResponse.items.map((item) => {
		if (item.pic) {
			const picUrls = item.pic.map((picId: string) => pb.files.getURL(item, picId));
			item.pic = picUrls;
		} else {
			item.pic = [];
		}
		return item;
	});

	// Extract genres from musicians
	const genres = [...new Set(musicians.map((musician) => musician.genre))];

	return { genres, musicians, artists };
};
