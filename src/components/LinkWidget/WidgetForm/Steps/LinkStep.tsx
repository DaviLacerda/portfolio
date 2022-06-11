import { links, LinkTypes } from "..";
import { WidgetCloseButton } from "../../WidgetCloseButton";

type Link = {
    icon: React.ReactNode;
    title: string;
    href: string | null;
};

interface LinkStepProps {
    onStepChange: (step: LinkTypes | null) => void;
}

export function LinkStep( { onStepChange }: LinkStepProps ) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Connect With Me</span>
                <WidgetCloseButton />
            </header>
            <div className="grid grid-cols-3 gap-4 p-8 w-full max-w-[250px] rounded-lg border-2 border-zinc-600 hover:border-brand-500 focus:border-brand-500 focus:outline-none">
                {Object.values(links).map((link: Link) =>
                    link.href ? (
                        <a
                            key={link.title}
                            href={link.href}
                            target="_blank"
                            className="w-12 h-12 flex align-center rounded-full p-2 transition-colors bg-surface-secondary hover:bg-brand focus:bg-brand focus:outline-none focus:ring-2 focus:ring-zinc-100"
                            rel="noopener noreferrer"
                        >
                            {link.icon}
                        </a>
                    ) : (
                        <button
                            key={link.title}
                            className="w-12 h-12 flex align-center rounded-full p-2 transition-colors bg-surface-secondary hover:bg-brand focus:bg-brand focus:outline-none focus:ring-2 focus:ring-zinc-100"
                            onClick={() => onStepChange(link.title as LinkTypes)}
                        >
                            {link.icon}
                        </button>
                    )
                )}
            </div>

        </>
    );
}
