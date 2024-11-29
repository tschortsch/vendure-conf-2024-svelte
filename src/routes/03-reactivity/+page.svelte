<script lang="ts">
	import Nested from './Nested.svelte';

	// Svelte 4
	// let counter = 0;

	// Svelte 5
	let counter = $state(0);
	const increment = () => (counter = counter + 1);
	const reset = () => (counter = 0);

	let nestedComponent: null | ReturnType<typeof Nested> = $state(null);
</script>

<h1 class="title-with-emoji">
	<span class="emoji">🪤</span>
	03 Reactivity
</h1>

<h2>Variables</h2>
<section>
	<p>🧀 Counter: {counter}</p>
	<button onclick={increment}>Give me moaar!</button>
	<button onclick={reset}>Reset</button>
</section>

<h2>Props</h2>
<section>
	<p>🧀 Counter as prop: {counter}</p>
	<button onclick={increment}>Increment from Root</button>
	<button onclick={reset}>Reset</button>

	<Nested {counter} />
</section>

<h2>Props Two-way Binding</h2>
<section>
	<p>🧀 Counter as prop with bind: {counter}</p>
	<button onclick={increment}>Increment from Root</button>
	<button onclick={reset}>Reset</button>

	<Nested bind:counter />
</section>

<h2>Expose child functions</h2>
<section>
	<p>🧀 Counter: {counter}</p>
	<button onclick={nestedComponent?.exportedIncrement}>
		Increment in nested component from Root
	</button>
	<button onclick={nestedComponent?.exportedReset}>Reset in nested component from Root</button>

	<Nested {counter} bind:this={nestedComponent} />
</section>
