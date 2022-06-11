import { Popover } from "@headlessui/react"
import { AiOutlineClose } from "react-icons/ai"

export function WidgetCloseButton() {
    return (
        <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Close Popover">
            <AiOutlineClose className="w-4 h-4 font-bold" />
        </Popover.Button>
    )
}