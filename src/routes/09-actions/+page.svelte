<script lang="ts">
	function myAction(node: HTMLElement, className: string) {
		node.onclick = () => {
			node.classList.toggle(className);
		};
	}
</script>

<h1 class="title-with-emoji">
	<span class="emoji">🎢</span>
	09 Actions
</h1>
<ul>
	<li>Every dom element can have one or multiple actions applied</li>
	<li>A action is a function with the element as first argument</li>
</ul>
<div class="area" use:myAction={'on'}>I change on click</div>

<style>
	.area {
		padding: 2rem;
		border: 1px gray solid;
	}
	:global(.on) {
		background-color: var(--vp-c-purple-1);
	}
</style>
