import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode:'class',
	theme: {
		extend: {},
	},
	plugins:[require("daisyui")],

	daisyui: {
		themes: ["light","dark"],
	},
};

// mytheme: {
// 	"primary": "#292524",

// 	"secondary": "#292524",
			 
// 	"accent": "#00bd00",
			 
// 	"neutral": "#c2410c",
			 
// 	"base-100": "#2c2934",
			 
// 	"info": "#00adff",
			 
// 	"success": "#00d19e",
			 
// 	"warning": "#ff8b00",
			 
// 	"error": "#ff93ac",}