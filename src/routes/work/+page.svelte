<script>
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	import WorkSlider from '$lib/components/WorkSlider.svelte';
	import Bulb from '$lib/components/Bulb.svelte';
	import Circles from '$lib/components/Circles.svelte';
	import MetaTag from '$lib/components/MetaTag.svelte';

	import { fadeIn } from '$lib/utils/variants';
</script>

<svelte:head>
	<MetaTag
		title="Agencia de desarrollo de software | Trabajo que hemos realizado"
		description="Te mostramos algunos de los trabajos que hemos realizado y las experiencias que nuestros clientes han habldo sobre nuestro servicio."
		canocical="https://www.lucaalsa.com"
	/>
</svelte:head>

<div class="h-full bg-primary/30 py-28 flex items-center">
	<Circles />
	<div class="container mx-auto">
		<div class="flex flex-col xl:flex-row gap-x-8">
			<div class="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 services">
				<Motion
					variants={fadeIn('right', 0.3)}
					initial="hidden"
					animate="show"
					exit="hidden"
					let:motion
				>
					<h2 class="text-3xl xl:mt-8" use:motion>
						Mis <span class="text-accent">trabajos</span>.
					</h2>
				</Motion>
				<Motion
					variants={fadeIn('right', 0.6)}
					initial="hidden"
					animate="show"
					exit="hidden"
					let:motion
				>
					<p class="mb-4 max-w-[400px] mx-auto lg:mx-0 text-sm" use:motion>
						Convierte tus ideas en aplicaciones multiplataforma con nuestro servicio de desarrollo
						web.
					</p>
				</Motion>
			</div>
			<Motion
				variants={fadeIn('left', 0.3)}
				initial="hidden"
				animate="show"
				exit="hidden"
				let:motion
			>
				<div class="w-full xl:max-w-[65%] mx-auto" use:motion>
					<WorkSlider />
				</div>
			</Motion>
		</div>
	</div>
	<Bulb />
</div>

<style>
	@media (min-height: 600px) {
		.services h2 {
			@apply text-5xl mb-4;
		}

		.services p {
			@apply text-base;
		}
	}

	@media (min-height: 750px) {
		.services p {
			@apply text-lg;
		}
	}

	@media (min-height: 900px) {
		.services p {
			@apply text-xl;
		}
	}
</style>
