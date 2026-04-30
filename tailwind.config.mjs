/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				soft: '0 18px 45px -30px rgb(15 23 42 / 0.45)',
			},
			animation: {
				'infinite-scroll': 'infinite-scroll 80s linear infinite',
			  },
			  keyframes: {
				'infinite-scroll': {
					'0%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(-100%)' }, // Move off-screen to the left
					'100%': { transform: 'translateX(0)' },
				}
			}
		},
	},
	plugins: [],
}
