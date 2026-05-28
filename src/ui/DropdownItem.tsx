import type {DropdownProps} from "../types.ts";

const DropdownItem = ({ href, label, addClasses }: DropdownProps) => {
    return (
        <>
            <li className={`text-stef-muted text-sm py-[6px] hover:text-white hover:bg-stef-red cursor-pointer ${addClasses}`}>
                <a href={href}>{label}</a>
            </li>
        </>
    )
}

export default DropdownItem