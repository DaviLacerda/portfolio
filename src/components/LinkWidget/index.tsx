import { Link } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function LinkWidget() {
    return (
        <Popover className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end z-10">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button
                className="w-12 h-12 bg-brand rounded-full flex items-center justify-center drop-shadow-2xl shadow-background hover:bg-brand-hover hover:cursor-pointer focus:bg-brand focus:outline-none focus:ring-2 focus:ring-zinc-100 hover:shadow-brand focus:shadow-brand transition-all"
                aria-label="Open Links Widget"
            >
                <Link className="w-6 h-6" weight="regular" />
            </Popover.Button>
        </Popover>
    );
}
