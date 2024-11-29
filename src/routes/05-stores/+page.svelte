<script lang="ts">
	import { hitCounter } from './hitcounter-store';
	import { counter } from './simplecounter-store';
</script>

<h1 class="title-with-emoji">
	<span class="emoji">💾</span>
	05 Stores
</h1>

<h2>Simple</h2>
<section>
	<p>
		Simple counter store value: <strong>{$counter}</strong>
	</p>

	<button onclick={() => counter.update((value) => value + 1)}>+</button>
</section>

<h2>Advanced</h2>
<section>
	<p>
		Hit counter: <strong>{$hitCounter}</strong>
	</p>

	<button onclick={() => hitCounter.increase()}>+</button>
	<button onclick={() => hitCounter.decrease()}>-</button>
	<button onclick={() => hitCounter.reset()}>Reset hit counter</button>
</section>
