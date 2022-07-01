import {
    SiNextdotjs,
    SiReact,
    SiReactrouter,
    SiStyledcomponents,
    SiSwiper,
    SiTypescript,
} from "react-icons/si";

export const projects = [
    {
        name: "Disney+",
        description:
            "A Disney+ Clone. I developed this project because i'm a big fan about Star Wars and Marvel, both are available in Disney+, and this is the way where i found to learn more with my passion.",
        img: "/assets/projects/disneyplus.png",
        techs: [
            {
                name: "Next.js",
                icon: <SiNextdotjs />,
            },
            {
                name: "Styled Components",
                icon: <SiStyledcomponents />,
            },
            {
                name: "Swiper",
                icon: <SiSwiper />,
            },
        ],
    },
    {
        name: "Randomify",
        description:
            "TV Series randomly, enjoy without know how! This project was development in a day with my hobby to watch series but, with the fun part, not choose what episode i'll see.",
        img: "/assets/projects/randomify.png",
        techs: [
            {
                name: "Next.js",
                icon: <SiNextdotjs />,
            },
            {
                name: "Styled Components",
                icon: <SiStyledcomponents />,
            },
            {
                name: "Typescript",
                icon: <SiTypescript />,
            },
        ],
    },
    {
        name: "Pokédex",
        description:
            "Pokédex is a web application that allows you to search for Pokémon by name or by type. It also allows you to view the details of a Pokémon, including its abilities, types, and more.",
        img: "/assets/projects/pokedex.png",
        techs: [
            {
                name: "React",
                icon: <SiReact />,
            },
            {
                name: "Styled Components",
                icon: <SiStyledcomponents />,
            },
            {
                name: "React Router",
                icon: <SiReactrouter />,
            },
        ],
    },
];
