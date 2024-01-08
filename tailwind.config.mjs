/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			grayscale: {
				80: '80%',
			},
			gridTemplateColumns: {
				experience: '180px 1fr',
			}
		},
	},
	plugins: [],
}
