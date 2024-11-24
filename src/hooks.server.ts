export const handle = async ({ event, resolve }) => {
	// before SvelteKit sees the incomming request
	// you can do everything you like....

	// this renders the app
	const respone = await resolve(event);

	// after SvelteKit generated the html
	// e.g. set more headers, alter html, ...

	// standard Response
	return respone;
};
