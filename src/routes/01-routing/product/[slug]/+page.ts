import type { PageLoad } from './$types';

export const load: PageLoad = (event) => {
	const { slug } = event.params;

	return {
		slug,
	};
};
