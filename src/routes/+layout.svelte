<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import SideNav from '$lib/components/layout/SideNav.svelte';
	import '../app.css';

	const { children } = $props();
</script>

<div id="app">
	<div class="flex min-h-screen flex-col" data-v-5d98c3a5="">
		<Header />

		<SideNav />

		<div class="VPContent has-sidebar" id="VPContent" data-v-5d98c3a5="" data-v-1428d186="">
			<div data-v-39a288b8="" data-v-1428d186="" class="VPDoc has-sidebar">
				<div data-v-39a288b8="" class="container">
					<div data-v-39a288b8="" class="content">
						<div data-v-39a288b8="" class="content-container">
							<main data-v-39a288b8="" class="main">
								<div
									data-v-39a288b8=""
									class="vp-doc _strategy_workshop-templates_"
									style="position: relative;"
								>
									{@render children()}
								</div>
							</main>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
