import type {ButtonProps} from "../types.ts";
import {MoveRight} from "lucide-react";

const LinkButton = ({ href, label }: ButtonProps) => {
    return (
        <>
            <a href={href} className='flex items-center gap-1 text-stef-muted text-sm border border-zinc-700 rounded-md
                px-4 py-2 hover:text-stef-red hover:border-stef-red hover:bg-stef-red/20 transition-colors'>
                {label} <MoveRight size={14}/>
            </a>
        </>
    )
}

export default LinkButton