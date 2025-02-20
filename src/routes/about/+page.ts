import type { PageLoad } from './$types';
import db from '$lib/db';

export const prerender = true;
export const trailingSlash = 'always';

export const load: PageLoad = async ({ fetch }) => {
	const teamSub = await db.getTeam(fetch);
	const team = await new Promise((res) => {
		teamSub.subscribe((value) => {
			if (value) res(value);
		});
	});

	// console.log('Final team data:', team); // Debug log
	return {
		team
	};
};
