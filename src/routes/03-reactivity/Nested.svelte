<script lang="ts">
	type Props = { counter: number };
	let { counter = $bindable() }: Props = $props();

	const double = $derived(counter * 2);

	const increment = () => {
		counter = counter + 1;
	};

	export const exportedIncrement = () => {
		counter = counter + 1;
	};
</script>

<p>Nested 🧀 counter as prop: {counter}</p>

<p>Nested double 🧀: {double}</p>

<button onclick={increment}>Increment from nested component</button>
