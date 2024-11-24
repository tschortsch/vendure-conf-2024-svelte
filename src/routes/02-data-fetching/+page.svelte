<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1 class="title-with-emoji"><span class="emoji">🛰️</span>02 Data Fetching</h1>

<p>{data.dataFromPage}</p>
