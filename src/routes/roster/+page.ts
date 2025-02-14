import db from '$lib/db.ts';

export const prerender = true;
export const trailingSlash = 'always';

export async function load(ctx) {
	let genres = [];

	const musicianSub = await db.getMusicians();
	let musicians = await new Promise((res) => {
		musicianSub.subscribe((a) => {
			if (a) {
				genres = [...new Set(a.map((musician) => musician.genre))];
				console.log({ a });
				res(a);
			}
		});
	});

	const artistSub = await db.getArtists();
	let artists = await new Promise((res) => {
		artistSub.subscribe((a) => {
			if (a) res(a);
			console.log({ a });
		});
	});
	const data = { genres, musicians, artists };
	console.log({ data });
	return data;
}
