/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			grayscale: {
				80: '80%',
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 4px 1em hsl(267 57% 63% / 0.6)',
				lg: '0 8px 16px var(--tw-shadow-color)',
			},
			colors: {
				bg: 'hsl(249 22% 12% / <alpha-value>)',
				card: 'hsl(249 22% 20% / <alpha-value>)',
			}
		},
	},
	plugins: [],
}
