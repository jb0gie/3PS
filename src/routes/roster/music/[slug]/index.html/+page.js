import db from '$lib/db.js';
export const prerender = true;

export async function load(ctx) {
	const musicianSub = await db.getMusicians();
	const musician = await new Promise((res) => {
		musicianSub.subscribe((a) => {
			if (a) {
				res(
					a.filter((item) => {
						const slug = ctx.params.slug;
						return item.route === "/roster/music/" + slug;
					})[0]
				);
			}
		});
	});
	return { musician }
}
