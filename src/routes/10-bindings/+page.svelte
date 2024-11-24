<script lang="ts">
	import { flip } from 'svelte/animate';
	import { quadOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let items = [] as string[];
	let on = false;
	let height = 0;
</script>

<h1 class="title-with-emoji">
	<span class="emoji">🔗</span>
	10 Bindings
</h1>
<div>
	<button class:on on:click={() => (on = !on)}>{on ? 'on' : 'off'}</button>
	<strong class="ml-4">bind:clientHeight</strong>
</div>

<div class="container" style:height={on ? height + 'px' : 'auto'}>
	<div bind:clientHeight={height}>
		{#each items as item (item)}
			<div
				in:fade
				out:fade={{ duration: 100 }}
				animate:flip={{ duration: 300, easing: quadOut }}
				class="item"
			>
				<button on:click={() => (items = items.filter((i) => i !== item))}>x</button>
				{item}
			</div>
		{/each}
	</div>
</div>

<button class="mt-4" on:click={() => (items = [...items, crypto.randomUUID()])}>more</button>

<style>
	.container {
		transition: height ease-in-out 300ms;
		background-color: rgba(255, 255, 255, 0.1);
		box-sizing: content-box;
		overflow: hidden;
		margin-top: 2rem;
	}
	.item {
		padding: 1rem;
		display: flex;
		gap: 1rem;
		align-items: center;
		border-bottom: 2px solid var(--vp-c-bg);
	}
	.mt-4 {
		margin-top: 2rem;
	}
	.ml-4 {
		margin-left: 2rem;
	}
	.on {
		background-color: var(--highlight-color);
	}
</style>
