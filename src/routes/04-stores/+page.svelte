<script lang="ts">
	import { hitCounter } from './hitcounter-store';
	import { counter } from './simplecounter-store';
</script>

<h1 class="title-with-emoji">
	<span class="emoji">💾</span>
	04 Stores
</h1>

<h2>Simple</h2>
<section>
	<p>
		Simple counter store value: <strong>{$counter}</strong>
	</p>

	<button on:click={() => counter.update((value) => value + 1)}>+</button>
</section>

<h2>Advanced</h2>
<section>
	<p>
		Hit counter: <strong>{$hitCounter}</strong>
	</p>

	<button on:click={() => hitCounter.increase()}>+</button>
	<button on:click={() => hitCounter.decrease()}>-</button>
	<button on:click={() => hitCounter.random()}>Set random number</button>
	<button on:click={() => hitCounter.reset()}>Reset hit counter</button>
</section>
