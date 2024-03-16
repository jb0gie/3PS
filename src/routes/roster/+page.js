import db from '$lib/db.js';

export const prerender = true;
export const trailingSlash = 'always';

export async function load(ctx) {
	let genres = [];

	const musicianSub = await db.getMusicians();
	const artistSub = await db.getArtists();
	let musicians = await new Promise((res) => {
		musicianSub.subscribe((a) => {
			if (a ) {
				genres = [...new Set(a.map((musician) => musician.genre))];
				console.log({ a });
				res(a);
			}
		});
	});
	let artists = await new Promise((res) => {
		artistSub.subscribe((a) => {
			if (a) res(a);
		});
	});
	const data = { musicians, artists, genres };
	console.log({ data });
	return data;
}
