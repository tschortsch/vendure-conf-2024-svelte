<script lang="ts">
	import { onMount } from 'svelte';
	import jQuery from 'jquery';
	import { Confetti } from '$lib/assets/confetti.min';
	import { App } from './App.tsx';
	import { createRoot } from 'react-dom/client';

	let count = $state(0);

	let reactApp: HTMLDivElement;
	let canvas: HTMLCanvasElement;

	let stopDrawing: null | (() => void) = null;

	onMount(() => {
		// jquery
		jQuery('.button').on('click', () => count++);

		// confetti library
		let confetti = new Confetti('confetti-demo');
		confetti.destroyTarget(false);

		// mount a react component
		const reactRoot = createRoot(reactApp);
		reactRoot.render(App({ name: 'React Component' }));

		return () => {
			reactRoot.unmount();
		};
	});

	const mandelMe = (c: HTMLCanvasElement) => {
		const WIDTH = 512;
		const HEIGHT = 512;
		const ctx = c.getContext('2d')!;
		ctx.clearRect(0, 0, c.width, c.height);

		function atom(x: number, y: number, c: string) {
			ctx.fillStyle = c;
			ctx.fillRect(x, y, 2, 2);
		}

		let stop = false;

		const stopDrawing = () => (stop = true);

		async function draw() {
			for (let y = 1; y < WIDTH; y++) {
				if (stop) {
					return;
				}
				for (let x = 1; x < HEIGHT; x++) {
					const dx = (x - 500) / 100000 - 0.233;
					const dy = (y - 500) / 100000 - 0.655;
					let a = dx;
					let b = dy;
					for (let t = 1; t < 250; t++) {
						const d = a * a - b * b + dx;
						b = 2 * (a * b) + dy;
						a = d;
						if (d > 200) {
							atom(x, y, 'rgb(' + t * 3 + ',' + t + ',' + t * 0.5 + ')');
							break;
						}
					}
				}
				await new Promise((resolve) => setTimeout(resolve, 1)); // wait 1ms
			}
		}

		draw();
		return stopDrawing;
	};
</script>

<h1 class="title-with-emoji">
	<span class="emoji">⛪</span>
	08 DOM Interaction
</h1>
<p>
	DOM interaction is trivial because Svelte has <strong>NO</strong>
	abstraction at runtime and encourages you to use it.
</p>

<h2>How about JQuery?</h2>
<div>
	<button class="button">Click Me {count}</button>
</div>

<h2>Or some Confetti?</h2>
<div>
	<button id="confetti-demo">Bääm</button>
</div>

<h2>Or React?</h2>
<div bind:this={reactApp}></div>

<h2>Or a Canvas Element?</h2>
<button
	onclick={() => {
		if (stopDrawing) {
			stopDrawing();
		}
		stopDrawing = mandelMe(canvas);
	}}>Do the Mandel</button
>
<canvas class="mt-2" width="512" height="512" bind:this={canvas}></canvas>
