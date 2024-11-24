<script lang="ts">
	import { SvelteURL } from 'svelte/reactivity';
	import { Counter } from './counter.svelte';

	// before: let value = ''
	let value = $state('');
	let url = new SvelteURL('http://localhost:3000/hi');

	const counter = new Counter();
</script>

<h1 class="title-with-emoji">
	<span class="emoji">🎥</span>
	13 Runes
</h1>
<h2>Simple Value</h2>
<input type="text" bind:value />
The Value is {value}

<h2>Custom Objects</h2>
<button onclick={() => counter.decrement()}>-</button>
{counter.value}
<button onclick={() => counter.increment()}>+</button>
<div>
	{#each counter.arr as item}
		<span>{item}</span>
	{/each}
</div>

<h2>Proxy Objects</h2>
<ul>
	<li><input type="text" bind:value={url.host} /> (Host)</li>
	<li><input type="text" bind:value={url.port} /> (Port)</li>
	<li><input type="text" bind:value={url.pathname} /> (Path)</li>
</ul>
{url.toString()}
