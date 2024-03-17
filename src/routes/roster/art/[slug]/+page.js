import db from '$lib/db.js';

export const prerender = true;
export const trailingSlash = 'always';

export async function load({ params, ctx }) {
	const artistSub = await db.getArtists();
	let artists = await new Promise((res) => {
		artistSub.subscribe((a) => {
			if (a) res(a);
			console.log({ a });
		});
	});
	const data = { artists };
	console.log({data})
	return data;
}
