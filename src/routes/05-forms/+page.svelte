<script>
	import { enhance } from '$app/forms';

	let { data } = $props();
</script>

<h1 class="title-with-emoji">
	<span class="emoji">📝</span>
	05 Forms
</h1>

<h2>Basic Form</h2>
<section>
	<div class="flex">
		<form method="POST" action="?/create">
			<label>
				☝🏻 Don't forget to:
				<input name="description" />
			</label>
			<button type="submit">Add</button>
		</form>

		<form method="POST" action="?/clear">
			<button type="submit">Clear</button>
		</form>
	</div>

	<ul class="!list-none !pl-0">
		{#each data.todos as todo}
			<li>
				<span>✅<span class="pl-2">{todo}</span></span>
			</li>
		{/each}
	</ul>
</section>

<h2>Enhanced Form</h2>
<section>
	<div class="flex">
		<form method="POST" action="?/create" use:enhance>
			<label>
				☝🏻 Don't forget to:
				<input name="description" />
			</label>
			<button type="submit">Add</button>
		</form>

		<form method="POST" action="?/clear" use:enhance>
			<button type="submit">Clear</button>
		</form>
	</div>

	<ul class="!list-none !pl-0">
		{#each data.todos as todo}
			<li>
				<span>✅<span class="pl-2">{todo}</span></span>
			</li>
		{/each}
	</ul>
</section>
