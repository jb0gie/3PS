import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

export const prerender = false;

export const load: PageLoad = async ({ params, fetch }) => {
	const pb = new PocketBase('https://pb.thirdplanet.studio');

	// Fetch musicians using SvelteKit's fetch
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

	// Find the specific musician
	const musician = musicians.filter((item: any) => {
		const slug = params.slug;
		return item.route === '/roster/music/' + slug;
	})[0];

	return { musician };
};
