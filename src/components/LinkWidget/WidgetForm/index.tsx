import { useState } from "react";
import { LinkStep } from "./Steps/LinkStep";
import { WhatsappLogo, DiscordLogo, InstagramLogo } from "phosphor-react";
import {
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlineGithub,
} from "react-icons/ai";
import { LinkContent } from "./Steps/LinkContent";

export const links = {
    WHATSAPP: {
        icon: <WhatsappLogo alt="WhatsApp Logo" size={32} />,
        title: "WHATSAPP",
        href: null,
    },
    LINKEDIN: {
        icon: <AiOutlineLinkedin title="Linkedin Logo" size={32} />,
        title: "LINKEDIN",
        href: "https://www.linkedin.com/in/davi16lacerda",
    },
    EMAIL: {
        icon: <AiOutlineMail title="Mail Logo" size={32} />,
        title: "EMAIL",
        href: null,
    },
    DISCORD: {
        icon: <DiscordLogo alt="Discord Logo" size={32} />,
        title: "DISCORD",
        href: "https://discord.gg/",
    },
    GITHUB: {
        icon: <AiOutlineGithub title="Github Logo" size={32} />,
        title: "GITHUB",
        href: "https://github.com/DaviLacerda",
    },
    INSTAGRAM: {
        icon: <InstagramLogo alt="Instagram Logo" size={32} />,
        title: "INSTAGRAM",
        href: "https://www.instagram.com/davi16lacerda/",
    },
};

export type LinkTypes = keyof typeof links;

export function WidgetForm() {
    const [step, setStep] = useState<LinkTypes | null>(null);

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center gap-2 shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            { step === null ? (
                <LinkStep onStepChange={setStep} />
            ) : (
                <LinkContent
                    step={links[step]}
                    onStepRestartRequested={() => setStep(null)}
                />
            )}
            <footer className="text-xs text-neutral-400">
                Made with ♥ by <a
                    href="https://github.com/DaviLacerda"
                    className="underline underline-offset-1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Davi Lacerda
                </a>
            </footer>
        </div>
    );
}
