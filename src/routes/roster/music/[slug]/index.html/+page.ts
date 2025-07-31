import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

export const prerender = false;

export const load: PageLoad = async ({ params, fetch }) => {
	const pb = new PocketBase('https://pb.thirdplanet.studio');

	// Fetch musicians using the same query as the main roster page
	const musiciansResponse = await pb.collection('musician').getList(1, 200, {
		fetch,
		sort: 'name', // Sort by name to ensure consistent ordering
		filter: '' // Empty filter to get all records
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

	// Find the specific musician
	const musician = musicians.filter((item: any) => {
		const slug = params.slug;
		const expectedRoute = '/roster/music/' + slug;
		return item.route === expectedRoute;
	})[0];

	return { musician };
};
