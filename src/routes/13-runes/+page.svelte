<script lang="ts">
	import { SvelteDate, SvelteURL } from 'svelte/reactivity';
	import { Counter } from './counter.svelte';

	// Simple Value
	// before: let value = ''
	let value = $state('');

	// Custom Objects
	const counter = new Counter();

	// Proxy Objects
	let proxiedUrl = new SvelteURL('http://localhost:3000/hi');
	let proxiedDate = new SvelteDate(new Date());
</script>

<h1 class="title-with-emoji">
	<span class="emoji">🀄️</span>
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

<h3>SvelteURL</h3>
<ul>
	<li><input type="text" bind:value={proxiedUrl.host} /> (Host)</li>
	<li><input type="text" bind:value={proxiedUrl.port} /> (Port)</li>
	<li><input type="text" bind:value={proxiedUrl.pathname} /> (Path)</li>
</ul>

<p>URL: <span class="font-bold">{proxiedUrl.toString()}</span></p>

<h3>SvelteDate</h3>

<button onclick={() => proxiedDate.setHours(13) && proxiedDate.setMinutes(37)}>Set Time</button>

<p>Current time: <span class="font-bold">{proxiedDate.toLocaleTimeString('de', {hour: '2-digit', minute:'2-digit'})}</span></p>
