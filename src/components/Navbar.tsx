import {ChevronDown} from "lucide-react";
import DropdownItem from "../ui/DropdownItem.tsx";
import {useState} from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-center gap-16 fixed w-full bg-zinc-900 h-[55px]
            border-b-2 border-zinc-800/90 z-50">
                <span className="text-stef-red text-sm ibm font-medium">SM</span>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <button
                            className="flex items-center gap-1 text-stef-muted text-sm border border-zinc-700
                            rounded-md px-3 py-1 hover:text-white hover:bg-stef-red hover:border-zinc-500 cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Projects <ChevronDown size={14}/>
                        </button>
                        {isOpen && (
                            <ul className='mt-2 absolute bg-zinc-900/95 text-center text-white w-[150px] rounded-md border border-zinc-700'>
                                <DropdownItem href="#csharp" label="C#" addClasses="border-b border-zinc-700 rounded-t-md" onClick={() => setIsOpen(false)}/>
                                <DropdownItem href="#java" label="Java" addClasses="border-b border-zinc-700" onClick={() => setIsOpen(false)} />
                                <DropdownItem href="#mean" label="MEAN" addClasses="rounded-b-md" onClick={() => setIsOpen(false)}/>
                            </ul>
                        )}
                    </div>
                    <a href="#about" className="flex items-center gap-1 text-stef-muted text-sm border
                    border-zinc-700 rounded-md px-3 py-1 hover:text-white hover:bg-stef-red hover:border-zinc-500">
                        About me
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar