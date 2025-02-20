import type { PageLoad } from './$types';
import db from '$lib/db';

export const prerender = true;
export const trailingSlash = 'always';

export const load: PageLoad = async () => {
	let genres: string[] = [];

	const musicianSub = await db.getMusicians();
	const musicians = await new Promise((res) => {
		musicianSub.subscribe((value) => {
			if (value) {
				genres = [...new Set(value.map((musician) => musician.genre))];
				res(value);
			}
		});
	});

	const artistSub = await db.getArtists();
	const artists = await new Promise((res) => {
		artistSub.subscribe((value) => {
			if (value) res(value);
		});
	});

	return { genres, musicians, artists };
};
