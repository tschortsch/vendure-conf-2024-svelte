<script lang="ts">
	type Props = { counter: number };
	let { counter = $bindable() }: Props = $props();

	let double = $derived(counter * 2);

	const increment = () => {
		counter = counter + 1;
	};

	// Exposed child functions
	export const exportedIncrement = () => {
		increment();
	};
	export const exportedReset = () => {
		counter = 0;
	};
</script>

<p>Nested 🧀 counter as prop: {counter}</p>

<p>Nested double 🧀: {double}</p>

<button onclick={increment}>Increment from nested component</button>
