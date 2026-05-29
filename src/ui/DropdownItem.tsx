import type {DropdownProps} from "../types.ts";

const DropdownItem = ({ href, label, addClasses, onClick }: DropdownProps) => {
    return (
        <>
            <li className={`text-stef-muted text-sm py-[6px] hover:text-white hover:bg-stef-red 
            cursor-pointer right-0 sm:left-0 ${addClasses}`}>
                <a href={href} onClick={onClick} className="block w-full px-2">{label}</a>
            </li>
        </>
    )
}

export default DropdownItem