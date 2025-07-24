import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

export const prerender = false;

export const load: PageLoad = async ({ params, fetch }) => {
	const pb = new PocketBase('https://pb.thirdplanet.studio');

	// Fetch artists using SvelteKit's fetch
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

	// Find the specific artist
	const artist = artists.filter((item: any) => {
		const slug = params.slug;
		return item.route === '/roster/art/' + slug;
	})[0];

	return { artist };
};
