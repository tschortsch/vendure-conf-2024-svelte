import type { PageLoad } from './$types';

export const load: PageLoad = (event) => {
	const { lang, page } = event.params;

	return {
		lang,
		page,
	};
};
