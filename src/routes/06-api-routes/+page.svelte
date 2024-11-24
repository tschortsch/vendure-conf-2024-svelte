<script lang="ts">
	let filter = $state('none');
	let liiperImgSrc = $state('/bestliiper-placeholder.png');

	const getBestLiiper = async () => {
		filter = 'blur(20px)';
		setTimeout(async () => {
			const res = await fetch('/06-api-routes/the-best-liiper-ai');
			liiperImgSrc = await res.text();
			filter = 'none';
		}, 2000);
	};
</script>

<h1 class="title-with-emoji">
	<span class="emoji">📠</span>
	06 API Routes
</h1>

<p>
	<a href="/06-api-routes/the-best-liiper-ai" target="_blank">
		Open API Endpoint (/06-api-routes/the-best-liiper-ai)
	</a>
</p>

<button onclick={getBestLiiper}>The BEST Liiper AI&trade;</button>

<div style="--filter: {filter}">
	<img src={liiperImgSrc} alt="The BEST Liiper&trade;" class="the-best-liiper blur" />
</div>

<style>
	.the-best-liiper {
		margin-top: 30px;
		border-radius: 20px;
	}
	.blur {
		filter: var(--filter);
		transition: 2s filter ease-in-out;
	}
</style>
