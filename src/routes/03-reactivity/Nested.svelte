<script lang="ts">
	type Props = { counter: number };
	let { counter = $bindable() }: Props = $props();

	let double = $derived(counter * 2);

	const increment = () => {
		counter = counter + 1;
	};

	// Exposed child function
	export const exportedIncrement = () => {
		increment();
	};
</script>

<p>Nested 🧀 counter as prop: {counter}</p>

<p>Nested double 🧀: {double}</p>

<button onclick={increment}>Increment from nested component</button>
