import plugin from 'tailwindcss/plugin';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				layout: `
					minmax(var(--padding-inline), 1fr)
					min(50% - var(--padding-inline), var(--content-max-width) / 2)
					min(50% - var(--padding-inline), var(--content-max-width) / 2)
					minmax(var(--padding-inline), 1fr);
				`,
			},
			grayscale: {
				80: '80%',
			},
			textShadow: {
				DEFAULT: '0 4px 1em hsl(267 57% 63% / 0.6)'
			},
			colors: {
				bg: 'hsl(249 22% 12% / <alpha-value>)',
				tooltip: 'hsl(249 22% 6% / <alpha-value>)',
				card: 'hsl(249 22% 20% / <alpha-value>)',
			},
			animation: {
				fade: 'fadeIn .2s ease-in-out forwards',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') }
			)
		}),
	],
};
