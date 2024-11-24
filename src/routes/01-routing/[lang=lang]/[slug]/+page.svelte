<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Product detail</h1>
<ul>
	<li>Lang: {data.lang}</li>
	<li>Slug: {data.slug}</li>
</ul>
