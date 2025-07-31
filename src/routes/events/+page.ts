import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

export const prerender = false;

export const load: PageLoad = async ({ fetch }) => {
	const pb = new PocketBase('https://pb.thirdplanet.studio');

	try {
		// Fetch events
		const eventsResponse = await pb.collection('events').getList(undefined, undefined, { fetch });
		const events = eventsResponse.items.map((item) => {
			if (item.pic) {
				// Handle both array and single string cases
				const picArray = Array.isArray(item.pic) ? item.pic : [item.pic];
				const picUrls = picArray.map((picId: string) => pb.files.getURL(item, picId));
				item.pic = picUrls;
			} else {
				item.pic = [];
			}
			return item;
		});

		return { events };
	} catch (error) {
		console.warn('Could not fetch events from PocketBase:', error);
		// Return empty events array as fallback
		return { events: [] };
	}
}; 