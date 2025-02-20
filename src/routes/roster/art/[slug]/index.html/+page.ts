import db from '$lib/db.js';

export const prerender = false;

export async function load(ctx) {
	const artistSub = await db.getArtists();
	const artist = await new Promise((res) => {
		artistSub.subscribe((a) => {
			if (a) {
				res(
					a.filter((item: any) => {
						const slug = ctx.params.slug;
						return item.route === '/roster/art/' + slug;
					})[0]
				);
			}
		});
	});
	return { artist };
}
