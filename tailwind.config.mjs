/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'py-yellow': '#FFDE58',
				'midnight-blue': '#1E2541',
				"dark-blue": "#041223",
				"bright-pink": "#FF79BE",
				"light-blue": "#89DDFF"
			},
			fontFamily: {
				"fredoka": ['Fredoka', 'Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
				"menlo": ['Menlo', 'Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
				"jet-brains": ['JetBrainsMono', 'Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
			}
		},
	},
	plugins: [
	],
}
