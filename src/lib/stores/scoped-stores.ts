// Source: https://dev.to/jdgamble555/the-correct-way-to-use-stores-in-sveltekit-3h6i
import { getContext, hasContext, setContext } from 'svelte';
import { type Readable, type Writable, readable, writable } from 'svelte/store';

// context for any type of store
export const defineScopedStore = <T, A>(
	name: string,
	fn: (value?: A) => T,
	defaultValue?: A
): T => {
	if (hasContext(name)) {
		return getContext<T>(name);
	}
	const _value = fn(defaultValue);
	setContext(name, _value);
	return _value;
};

// writable store context
export const scopedWritable = <T>(name: string, value?: T) =>
	defineScopedStore<Writable<T>, T>(name, writable, value);

// readable store context
export const scopedReadable = <T>(name: string, value?: T) =>
	defineScopedStore<Readable<T>, T>(name, readable, value);
