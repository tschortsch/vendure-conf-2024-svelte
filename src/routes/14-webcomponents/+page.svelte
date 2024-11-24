<script lang="ts">
	import { onMount } from 'svelte';
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import WebComponent from './WebComponent.svelte';

	let webcomponentContainer: HTMLDivElement;

	onMount(() => {
		webcomponentContainer.innerHTML = `
            <cool-svelte-webcomponent>
                <p>This is some slotted content</p>
            </cool-svelte-webcomponent>
        `;
	});
</script>

<div bind:this={webcomponentContainer}></div>
