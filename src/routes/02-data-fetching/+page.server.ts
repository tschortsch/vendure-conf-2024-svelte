import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	// Load data with secret credendtials
	const dataLoadedFromDb = {
		userId: crypto.randomUUID(),
	};

	// Pass data to +page.ts
	return {
		dataLoadedFromDb,
	};
};
