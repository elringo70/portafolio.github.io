<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Icon from '@iconify/svelte';

	const serviceData = [
		{
			icon: 'mdi:code',
			title: 'Desarrollo web',
			description:
				"Desarrollo web para que tu aplicación funcione en navegadores. Incluye siempre, desarrollo en modo responsivo para cualquier pantalla respetando el 'Mobile First'."
		},
		{
			icon: 'teenyicons:mobile-outline',
			title: 'Multiplataforma',
			description:
				'Desarrollamos en multiplataforma cuando se requiera que el acceso a tu aplicación sea, no solo en un navegador Web, sino también en dispositivos Android y iOS.'
		},
		{
			icon: 'mdi:api',
			title: 'Api',
			description:
				'Creación de RestFull API para almacenamiento y consulta de datos, permitiendo que el FrontEnd pueda comunicarse con el BackEnd al acceder en un tiempo posterior.'
		}
	];

	const options = {
		perPage: 3,
		gap: 15,
		pagination: true,
		arrows: false,
		breakpoints: {
			640: {
				perPage: 1
			}
		}
	};
</script>

<Splide {options} aria-label="Servicios">
	{#each serviceData as data}
		<SplideSlide>
			<div
				class="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-4 py-6 sm:px-6 sm:py-8 flex sm:flex-col gap-x-3 xs:gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 slide"
			>
				<div class="text-4xl text-accent mb-4">
					<Icon icon={data.icon} />
				</div>
				<div class="description">
					<div class="mb-2 text-lg">{data.title}</div>
					<p class="text-xs text-pretty max-w-[350px] leading-normal">{data.description}</p>
				</div>
				<div>
					<Icon
						icon="mingcute:arrow-right-up-line"
						class="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
					/>
				</div>
			</div>
		</SplideSlide>
	{/each}
</Splide>

<style>
	@media (min-height: 600px) {
		.description p {
			@apply text-base;
		}
	}
</style>
