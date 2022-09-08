/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			keyframes: {
				colour_change: {
					'0%, 100%': { color: '#7ccdea' },
					'16%': { color: '#0074d9' },
					'32%': { color: '#2ecc40' },
					'48%': { color: '#ffdc00' },
					'64%': { color: '#b10dc9' },
					'80%': { color: '#ff4136' },
				},
				gradient_x: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
				},
			},
			animation: {
				'text-pride': 'colour_change 4s ease infinite',
				'gradient-x': 'gradient_x 4s ease infinite',
			},
		},
	},
	plugins: [],
}
