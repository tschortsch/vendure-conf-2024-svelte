import { writable } from 'svelte/store';

export const initialHitCounterValue = 1337;

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

const hitCounterStore = () => {
	const { subscribe, update, set } = writable<number>(initialHitCounterValue);

	const increase = () => update((value) => value + 1);
	const decrease = () => update((value) => value - 1);

	const random = () => {
		set(getRandomNumber(initialHitCounterValue + 1, 9999));
	};

	const reset = () => set(initialHitCounterValue);

	return {
		subscribe,
		set,
		increase,
		decrease,
		random,
		reset,
	};
};

export const hitCounter = hitCounterStore();
