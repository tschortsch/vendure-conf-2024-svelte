<script lang="ts">
	import { tweened, spring } from 'svelte/motion';
	import { quadInOut } from 'svelte/easing';
	import { writable } from 'svelte/store';

	const tweens = [
		{ name: 'Store', fn: writable(0) },
		{ name: 'Tweened', fn: tweened(0) },
		{ name: 'Natural Movement', fn: tweened(0, { duration: 150, easing: quadInOut }) },
		{ name: 'Spring', fn: spring(0, { stiffness: 0.2, damping: 0.2 }) },
	];

	let tween = tweens[0].fn;

	let counter = 0;
	$: $tween = counter;
	$: fixed = $tween.toFixed(2);

	// 2d
	let coords = spring(
		{ x: 20, y: 20 },
		{
			stiffness: 0.1,
			damping: 0.25,
		}
	);
</script>

<h1 class="title-with-emoji">
	<span class="emoji">🎥</span>
	12 Motion & Tweening
</h1>
<h2>(inbe)Tweening is linear interpolating two values</h2>
<div class="container">
	<progress class="progress" max={5} value={$tween}></progress>
	<span>{fixed}</span>
</div>
<div class="buttons">
	<select class="select" bind:value={tween}>
		{#each tweens as t}
			<option value={t.fn}>{t.name}</option>
		{/each}
	</select>

	<button on:click={() => counter--}>less</button>
	<button on:click={() => counter++}>more</button>
</div>

<h2>Tweened Stores Accept Points {'{ x, y }'}</h2>

<svg
	role="img"
	width="640"
	height="480"
	on:mousemove={(e) => {
		const rect = (e.target as HTMLElement).getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		console.log(e.clientX, rect.left);
		coords.set({ x, y });
	}}
>
	<circle cx={$coords.x} cy={$coords.y} r={10} />
</svg>
{JSON.stringify($coords)}

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}
	.progress {
		flex: 1;
		background-color: var(--color-brand-light);
	}
	.buttons {
		margin-top: 1rem;
	}
	.select {
		padding: 0.5rem;
	}
	circle {
		fill: #ff3e00;
	}
</style>
