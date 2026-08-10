/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
			extend: {
			boxShadow: {
				soft: '0 24px 70px -38px rgb(0 0 0 / 0.65)',
			},
			animation: {
				'infinite-scroll': 'infinite-scroll 80s linear infinite',
			  },
			  keyframes: {
				'infinite-scroll': {
					'0%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(-50%)' },
					'100%': { transform: 'translateX(0)' },
				}
			}
		},
	},
	plugins: [],
}
