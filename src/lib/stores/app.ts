import { scopedWritable } from './scoped-stores';

export const getNavBarOpenStore = () => {
	const { subscribe, set, update } = scopedWritable<boolean>('navBarOpen', false);

	const invert = () => update((open) => !open);
	const close = () => set(false)

	return { subscribe, set, invert, close };
};
