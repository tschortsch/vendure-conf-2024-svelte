<script lang="ts">
	export let counter: number;

	$: double = counter * 2;

	const increment = () => {
		counter = counter + 1;
	};

	export const exportedIncrement = () => {
		counter = counter + 1;
	};
</script>

<p>Nested 🧀 counter as prop: {counter}</p>

<p>Nested double 🧀: {double}</p>

<button on:click={increment}>Increment from nested component</button>
