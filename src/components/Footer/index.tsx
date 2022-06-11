import { CaretUp } from "phosphor-react";

export function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="flex flex-col items-center justify-center bg-surface-secondary w-full h-40 p-5">
            <div className="flex flex-col items-center">
                <span className="text-center">
                    Developed with 🤍 by{" "}
                    <a
                        href="https://github.com/DaviLacerda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand hover:text-brand-hover hover:underline-offset-2 hover:underline focus:text-brand-hover focus:underline-offset-2 focus:underline focus:outline-none transition-colors"
                    >
                        Davi Lacerda
                    </a>
                </span>
                <span>Brazil | © 2022</span>
            </div>
            <button
                type="button"
                className="mt-4 md:mt-0 md:absolute md:right-1/4 w-12 h-12 flex items-center justify-center bg-surface-secondary-hover rounded transition-colors hover:bg-brand hover:cursor-pointer focus:bg-brand focus:outline-none focus:ring-2 focus:ring-zinc-100"
                onClick={handleScrollToTop}
                aria-label="Scroll to top"
            >
                <CaretUp size={32} />
            </button>
        </footer>
    );
}
