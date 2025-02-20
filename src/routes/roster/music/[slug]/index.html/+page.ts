import db from '$lib/db.js';

export const prerender = false;

export async function load(ctx) {
	const musicianSub = await db.getMusicians();
	const musician = await new Promise((res) => {
		musicianSub.subscribe((m) => {
			if (m) {
				res(
					m.filter((item: any) => {
						const slug = ctx.params.slug;
						return item.route === '/roster/music/' + slug;
					})[0]
				);
			}
		});
	});
	return { musician };
}
