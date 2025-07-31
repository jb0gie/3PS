import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

export const trailingSlash = 'always';

export const load: PageLoad = async ({ fetch }) => {
	const pb = new PocketBase('https://pb.thirdplanet.studio');

	// Fetch musicians with explicit parameters
	const musiciansResponse = await pb.collection('musician').getList(1, 200, {
		fetch,
		sort: 'name' // Sort by name to ensure consistent ordering
	});

	const musicians = musiciansResponse.items.map((item) => {
		// Clean up whitespace issues in the database
		if (item.name) item.name = item.name.trim();
		if (item.route) item.route = item.route.trim();
		if (item.genre) item.genre = item.genre.trim();
		if (item.subgenre) item.subgenre = item.subgenre.trim();

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
