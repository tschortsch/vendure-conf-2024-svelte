<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import Nested from './Nested.svelte';

	let counter = 0;
	let counterProp = 0;
	let counterPropBind = 0;
	let counterExportedIncrement = 0;

	const increment = () => (counter = counter + 1);
	const incrementCounterProp = () => (counterProp = counterProp + 1);
	const incrementCounterPropBind = () => (counterPropBind = counterPropBind + 1);

	let nestedComponent: null | SvelteComponent = null;
</script>

<h1 class="title-with-emoji">
	<span class="emoji">🪤</span>
	03 Reactivity
</h1>

<h2>Variables</h2>
<section>
	<p>🧀 Counter: {counter}</p>
	<button on:click={increment}>Give me moaar!</button>
</section>

<h2>Props</h2>
<section>
	<p>🧀 Counter as prop: {counterProp}</p>
	<button on:click={incrementCounterProp}>Increment from Root</button>

	<Nested counter={counterProp} />
</section>

<h2>Props Two-way Binding</h2>
<section>
	<p>🧀 Counter as prop with bind: {counterPropBind}</p>
	<button on:click={incrementCounterPropBind}>Increment from Root</button>

	<Nested bind:counter={counterPropBind} />
</section>

<h2>Expose child functions</h2>
<section>
	<p>🧀 Counter: {counterExportedIncrement}</p>
	<button on:click={() => nestedComponent?.exportedIncrement()}>
		Increment in nested component from Root
	</button>

	<Nested counter={counterExportedIncrement} bind:this={nestedComponent} />
</section>
