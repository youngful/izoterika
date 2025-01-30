import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/sections/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				'2xs': '320px',
				xs: '480px',
				sm: '640px',
				md: '768px',
				lg: '1124px',
        '2lg': '1220px',
				xl: '1280px',
			},
		},
	},
	plugins: [],
} satisfies Config
