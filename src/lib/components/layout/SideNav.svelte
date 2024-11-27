<script lang="ts">
	import { page } from '$app/stores';
	import { navItems } from '$lib/navitems';
	import { getNavBarOpenStore } from '$lib/stores/app';
	import HitCounter from './HitCounter.svelte';

	const navBarOpenStore = getNavBarOpenStore();
</script>

<aside data-v-575e6a36="" data-v-5d98c3a5="" class={`VPSidebar${$navBarOpenStore ? ' open' : ''}`}>
	<div>
		<div data-v-575e6a36="" class="curtain"></div>
		<nav
			data-v-575e6a36=""
			class="nav"
			id="VPSidebarNav"
			aria-labelledby="sidebar-aria-label"
			tabindex="-1"
		>
			<div data-v-575e6a36="" class="group">
				<section data-v-b8d55f3b="" data-v-575e6a36="" class="VPSidebarItem level-0 has-active">
					<div data-v-b8d55f3b="" class="items">
						{#each navItems as navItem (navItem.route)}
							<div
								data-v-b8d55f3b=""
								class="VPSidebarItem level-1 is-link"
								class:is-active={$page.url.pathname === navItem.route}
							>
								<div data-v-b8d55f3b="" class="item">
									<div data-v-b8d55f3b="" class="indicator"></div>
									<a data-v-b8d55f3b="" class="VPLink link link" href={navItem.route} onclick={navBarOpenStore.close}>
										<p data-v-b8d55f3b="" class="text">{navItem.label}</p>
									</a>
								</div>
							</div>
						{/each}
					</div>
				</section>
			</div>
		</nav>
	</div>
	<HitCounter />
</aside>

<style scoped>
	aside {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
