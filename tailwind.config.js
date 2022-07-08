const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
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
                    "stroke": colors.zinc["600"],
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
            maxWidth: {
                "avatar": "27rem",
            },
            maxHeight: {
                "avatar": "27rem",
            },
            keyframes: {
                "fade-to-t": {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(100px)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0px)",
                    },
                },
                "brightess-25": {
                    "0%": {
                        filter: "brightness(1)",
                    },
                    "100%": {
                        filter: "brightness(0.25)",
                    },
                },
            },
            animation: {
                "fade-to-t": "fade-to-t 1s ease-in-out",
                "brightess-25": "brightess-25 0.3s ease-in-out forwards",
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar'),
    ],
};
