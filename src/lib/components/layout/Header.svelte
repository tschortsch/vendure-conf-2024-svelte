<script lang="ts">
	import { getNavBarOpenStore } from '$lib/stores/app';

	const navBarOpenStore = getNavBarOpenStore();
</script>

<header class="VPNav relative md:fixed" data-v-5d98c3a5="" data-v-ae24b3ad="">
	<div class="VPNavBar has-sidebar top" data-v-ae24b3ad="" data-v-ccf7ddec="">
		<div class="wrapper" data-v-ccf7ddec="">
			<div class="container" data-v-ccf7ddec="">
				<div class="title" data-v-ccf7ddec="">
					<div class="VPNavBarTitle has-sidebar" data-v-ccf7ddec="" data-v-ab179fa1="">
						<a class="title" href="/" data-v-ab179fa1="">
							<span class="flex items-center">
								<!--[--><!--]--><!--[--><!--[--><!--[-->
								<img
									class="VPImage logo dark"
									src="/vendure-wordmark-primary.svg"
									alt=""
									data-v-8426fc1a=""
								/>
								<!--]--><!--[-->
								<img
									class="VPImage light logo"
									src="/vendure-wordmark-primary.svg"
									alt=""
									data-v-8426fc1a=""
								/>
								<!--]--><!--]--><!--]-->
								<span data-v-ab179fa1="" class="mt-2">Conf 2024</span>
								<!--[--><!--]-->
							</span>
						</a>
					</div>
				</div>
				<div class="content" data-v-ccf7ddec="">
					<div class="content-body" data-v-ccf7ddec="">
						<div class="VPNavBarSearch search" data-v-ccf7ddec="">The Magic of Svelte</div>
					</div>
				</div>

				<div>
					<button class="nav-toggle" onclick={navBarOpenStore.invert}>
						🍔
					</button>
				</div>
			</div>
		</div>
		<div class="divider" data-v-ccf7ddec="">
			<div class="divider-line" data-v-ccf7ddec=""></div>
		</div>
	</div>
	<!---->
</header>
