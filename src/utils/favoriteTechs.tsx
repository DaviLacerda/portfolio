import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiStyledcomponents,
    SiMaterialui,
} from "react-icons/si";

type techType = {
    name: string;
    icon: React.ReactNode;
}

export const favoriteTechs: techType[] = [
    {
        name: "Next.js",
        icon: <SiNextdotjs title="Next.js" className="w-24 h-24" />,
    },
    {
        name: "TypeScript",
        icon: <SiTypescript title="TypeScript" className="w-24 h-24" />,
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss title="Tailwind CSS" className="w-24 h-24" />,
    },
    {
        name: "Styled Components",
        icon: <SiStyledcomponents title="Styled Components" className="w-24 h-24" />,
    },
    {
        name: "Material UI",
        icon: <SiMaterialui title="Material UI" className="w-24 h-24" />,
    },
];
