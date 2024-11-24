<script lang="ts">
	import { hitCounter, initialHitCounterValue } from '../../../routes/04-stores/hitcounter-store';

	$: digits = $hitCounter.toString().split('').map(Number);
</script>

{#if $hitCounter > initialHitCounterValue}
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
		background: linear-gradient(180deg, rgba(176,235,0,1) 0%, rgba(186,244,136,1) 50%, rgba(54,235,0,1) 100%);
		border: 2px solid darkgoldenrod;
	}
	.center {
        display: flex;
        gap: 5px;
		text-align: center;
		margin: 20px 0;
	}
</style>
