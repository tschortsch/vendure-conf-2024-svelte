export const load = async ({ url }) => {
	// url is an URL object
	return {
		origin: url.origin,
	};
};
