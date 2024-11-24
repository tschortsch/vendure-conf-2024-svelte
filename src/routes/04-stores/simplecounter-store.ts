import { writable } from 'svelte/store';

export const counter = writable<number>(0);
