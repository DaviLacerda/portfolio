const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand": {
                    "hover": "#996DFF",
                    DEFAULT: "#8257E5",
                },
                "surface":{
                    "primary": colors.zinc["900"],
                    "secondary": colors.zinc["800"],
                    "secondary-hover": colors.zinc["700"],
                },
                "background":{
                    DEFAULT: "#18181B",
                },
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                play: ["Play, sans-serif"],
                fira: ["Fira Code", "monospace"],
            },
            textColor:{
                "primary": colors.zinc["100"],
                "secondary": colors.zinc["400"],
                "tooltip": colors.zinc["800"],
            },
            boxShadow: {
                "brand": "0px 8px 24px rgba(130,87,229,0.7)",
            },
        },
    },
    plugins: [],
};
