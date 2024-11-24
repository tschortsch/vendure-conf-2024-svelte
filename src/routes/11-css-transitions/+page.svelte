<script lang="ts">
	import { fade } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	let show = false;

	const customEasing = (t: number) => t * t;

	function cool(node: Element) {
		return {
			delay: 0,
			duration: 1000,
			easing: customEasing,
			css: (t: number) => `font-size: ${t}rem`,
		};
	}
</script>

<h1 class="title-with-emoji">
	<span class="emoji">🔄</span>
	11 CSS Transition
</h1>
<button on:click={() => (show = !show)}>{show ? 'Hide' : 'Show'}</button>
{#if show}
	<div class="content" transition:cool>Hello</div>
{/if}

<style>
	.content {
		margin-top: 1rem;
		padding: 1rem;
		color: black;
		background-color: var(--highlight-color);
	}
</style>
