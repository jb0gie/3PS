import db from '$lib/db.js';

export const prerender = true;
export const trailingSlash = 'always';

export async function load(ctx) {
	let genres = [];
	db.getMusicians().subscribe((m) => {
		// console.log({ m });
	});
	const musicianSub = await db.getMusicians();
	const artistSub = await db.getArtists();
	let musicians = await new Promise((res) => {
		musicianSub.subscribe((a) => {
			console.log(a);
			if (a) {
				res(a);
			}
		});
	});
	let artists = await new Promise((res) => {
		artistSub.subscribe((a) => {
			console.log(a);
			if (a) res(a);
		});
	});
	return { musicians, artists, genres };
}
