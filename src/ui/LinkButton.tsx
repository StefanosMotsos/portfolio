import type {ButtonProps} from "../types.ts";
import {ExternalLink, MoveDown} from "lucide-react";

const LinkButton = (
    { href, label, newTab = false, showArrow = false }: ButtonProps) => {
    return (
        <>
            <a href={href} className='flex items-center gap-1 text-stef-muted text-sm border border-zinc-700 rounded-md
                px-4 py-2 hover:text-stef-red hover:border-stef-red hover:bg-stef-red/20 transition-colors'>
                {label}
                {newTab ? <ExternalLink size={14}/> : showArrow && <MoveDown size={14}/>}
            </a>
        </>
    )
}

export default LinkButton