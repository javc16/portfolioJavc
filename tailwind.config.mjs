/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'infinite-scroll': 'infinite-scroll 80s linear infinite',
			  },
			  keyframes: {
				'infinite-scroll': {
					'0%': { transform: 'translateX(200)' },  // Start off-screen to the right
					'50%': { transform: 'translateX(-100%)' }, // Move off-screen to the left
					'100%': { transform: 'translateX(200)' }, // Snap back to starting position immediately										  
				}
			}
		},
	},
	plugins: [],
}
