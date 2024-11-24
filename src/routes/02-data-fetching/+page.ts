import type { PageLoad } from './$types';

export const load: PageLoad = (event) => {
	const { dataLoadedFromDb } = event.data;

	// Do something with the server data
	const dataFromPage = `[Page Data] User Id: ${dataLoadedFromDb.userId}`;

	// Pass data to +page.sevlte
	return {
		dataFromPage,
	};
};
