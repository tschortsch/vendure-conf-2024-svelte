import { writable } from 'svelte/store';

const hitCounterStore = () => {
	const { subscribe, update, set } = writable<number>(1337);

	// define custom methods
	const increase = () => update((value) => value + 1);
	const decrease = () => update((value) => value - 1);
	const reset = () => set(1337);

	return {
		subscribe,
		set,
		increase,
		decrease,
		reset,
	};
};

export const hitCounter = hitCounterStore();
