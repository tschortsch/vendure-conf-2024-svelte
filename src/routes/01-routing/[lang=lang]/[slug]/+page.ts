import type { PageLoad } from './$types';

export const load: PageLoad = (event) => {
	const { lang, slug } = event.params;

	return {
		lang,
		slug,
	};
};
