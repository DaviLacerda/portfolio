import { useEffect, useState } from "react";
import { WidgetCloseButton } from "../../WidgetCloseButton";
import { AiOutlineArrowLeft } from "react-icons/ai";

type Link = {
    icon: React.ReactNode;
    title: string;
    href: string | null;
};

interface LinkStepProps {
    step: Link;
    onStepRestartRequested: () => void;
}

const email = "davi16lacerda@gmail.com"
const number = 5534992750234;

export function LinkContent( { step, onStepRestartRequested }: LinkStepProps ) {
    const [comment, setComment] = useState("");
    const [url, setUrl] = useState("");

    const handleWhatsAppLink = async () => {
        setUrl(`https://api.whatsapp.com/send?phone=${number}&text=${comment}`)
    }

    const handleEmailLink = async () => {
        setUrl(`mailto:${email}?body=${comment}`)
    }

    const handleButton = () => {
        window.open(url, "_blank");
    }

    useEffect(() => {
        if (step.title === "WHATSAPP") {
            handleWhatsAppLink();
        } else {
            handleEmailLink();
        }
    }, [comment])

    return (
        <>
        <header>
            <button
                type="button"
                className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                onClick={onStepRestartRequested}
            >
                <AiOutlineArrowLeft className="w-4 h-4" />
            </button>

            <span className="text-lg leading-6 flex items-center gap-2">
                { step.icon }
                { step.title }
            </span>
            <WidgetCloseButton />
        </header>

        <div className="my-4 w-full">
            <textarea
                className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand focus:ring-brand focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                placeholder="Text your message here..."
                onChange={(event) => setComment(event.target.value.replace(/\s/g, "%20"))}
            />

            <footer className="flex gap-2 mt-2">
                <button
                    type="submit"
                    disabled={comment.length === 0}
                    className="p-2 bg-brand rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-primary focus:ring-brand transition-colors disabled:opacity-50 disabled:hover:bg-brand"
                    onClick={handleButton}
                >
                    Generate link with message
                </button>
            </footer>
        </div>
    </>
    )
}