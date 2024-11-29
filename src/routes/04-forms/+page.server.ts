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
		const todo = data.get('todo')?.toString();
		if (todo) {
			database.todos.push(todo);
		}
	},
	clear: async () => {
		database.todos = [];
	},
};
