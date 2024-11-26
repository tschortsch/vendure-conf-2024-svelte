import type { PageLoad } from './$types';

export const load: PageLoad = (event) => {
	const { dataLoadedFromDb } = event.data;

	// Do something with the server data
	const splittedUserId = dataLoadedFromDb.userId.split('-');

	// Pass data to +page.sevlte
	return {
		userId: dataLoadedFromDb.userId,
		splittedUserId,
	};
};
