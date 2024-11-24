<script lang="ts">
	import { onMount } from 'svelte';
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import WebComponent from './WebComponent.svelte';

	let webComponentContainer: HTMLDivElement;

	onMount(() => {
		webComponentContainer.innerHTML = `
            <cool-svelte-web-component>
                <p>This is some slotted content</p>
            </cool-svelte-web-component>
        `;
	});
</script>

<h1 class="title-with-emoji">
	<span class="emoji">🪆</span>
	14 Web Components
</h1>

<div bind:this={webComponentContainer}></div>
