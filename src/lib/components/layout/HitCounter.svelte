<script lang="ts">
	import { hitCounter } from '../../../routes/05-stores/hitcounter-store';

	$: digits = $hitCounter.toString().split('').map(Number);
</script>

{#if $hitCounter > 1337}
	<div class="center">
		{#each digits as digit}
			<span>{digit}</span>
		{/each}
	</div>
{/if}

<style scoped>
	span {
        color: var(--vp-button-brand-text);
		font-weight: 600;
		display: inline-block;
		padding: 6px 6px 4px;
        min-width: 25px;
		border-radius: 3px;
		background: linear-gradient(180deg, #0f84af 0%, #2cc5fc 50%, #008ece 100%);
	}
	.center {
        display: flex;
        gap: 5px;
		text-align: center;
		margin: 20px 0;
	}
</style>
