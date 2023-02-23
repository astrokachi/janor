/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#6E07F3",
				text: "#141c3a",
			},
			fontFamily: {
				// Insert your font family names here
				lato: [
					"'Trebuchet MS'",
					"'Lucida Sans Unicode'",
					"'Lucida Grande'",
					"'Lucida Sans'",
					"Arial",
					"sans-serif",
				],
			},
		},
	},
	plugins: [],
};
