module.exports = {
	darkMode: 'class',
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'midnight': '#171b21',
				'bg-color': '#0e1116',
				'dark-text': '#e5e8ec',
			},
		},
	},
	plugins: [],
};
