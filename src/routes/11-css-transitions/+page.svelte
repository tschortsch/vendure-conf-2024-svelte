<script lang="ts">
	import { fade } from 'svelte/transition';

	let show = $state(false);

	const customEasing = (t: number) => t * t;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function myCoolTransition(node: Element) {
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
<button onclick={() => (show = !show)}>{show ? 'Hide' : 'Show'}</button>
{#if show}
	<div class="content" transition:fade>Faded</div>
	<div class="content" transition:myCoolTransition>Look ma, my own transition!</div>
{/if}

<style>
	.content {
		margin-top: 1rem;
		padding: 1rem;
		color: black;
		background-color: var(--highlight-color);
	}
</style>
