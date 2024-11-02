import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			boxShadow: {
				custom: '1px 4px 8px 0px rgba(0, 0, 0, 0.18)',
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(to bottom, #FFFFFF, #F4E3E9)',
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
		},
	},
	plugins: [],
}
export default config
