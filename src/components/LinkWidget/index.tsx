import { Link } from "phosphor-react";

export function LinkWidget(){
    return (
        <button
            type="button"
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 bg-brand rounded-full flex items-center justify-center hover:bg-brand-hover hover:cursor-pointer focus:bg-brand focus:outline-none focus:ring-2 focus:ring-zinc-100 hover:shadow-brand focus:shadow-brand transition-all"
            aria-label="Open Links Widget"
        >
            <Link className="w-6 h-6" weight="regular" />
        </button>
    )
}