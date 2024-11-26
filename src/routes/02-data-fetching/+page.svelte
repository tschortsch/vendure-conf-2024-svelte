<script lang="ts">
	let { data } = $props();
</script>

<h1 class="title-with-emoji"><span class="emoji">🛰️</span>02 Data Fetching</h1>

<h2>User Id</h2>
<p>{data.userId}</p>

<h2>Splitted User Id:</h2>
<ul>
	{#each data.splittedUserId as part}
		<li>{part}</li>
	{/each}
</ul>
