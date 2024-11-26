const database: { todos: string[] } = {
	todos: [],
};

export function load() {
	return {
		todos: database.todos,
	};
}

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const description = data.get('description')?.toString();
		if (description) {
			database.todos.push(description);
		}
	},
	clear: async () => {
		database.todos = [];
	},
};
