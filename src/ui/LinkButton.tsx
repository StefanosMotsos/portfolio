import type {ButtonProps} from "../types.ts";
import {ExternalLink, MoveDown} from "lucide-react";

const LinkButton = (
    { href, label, newTab = false, showArrow = false, addClasses }: ButtonProps) => {
    return (
        <>
            <a
                href={href}
                target={newTab ? '_blank' : undefined}
                rel={newTab ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-1 text-stef-muted text-sm border border-zinc-700 rounded-md
                    px-4 py-2 hover:text-stef-red hover:border-stef-red hover:bg-stef-red/20 transition-colors
                     ${addClasses ?? ''}`}>
                {label}
                {newTab ? <ExternalLink size={14}/> : showArrow && <MoveDown size={14}/>}
            </a>
        </>
    )
}

export default LinkButton