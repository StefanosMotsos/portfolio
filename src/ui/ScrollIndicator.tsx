import {MoveDown} from "lucide-react";
import {useEffect, useState} from "react";

const ScrollIndicator = () => {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY < 80)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <div className={`flex flex-col items-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2 bounce
            transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <span className='text-xs text-stef-muted ibm'>scroll</span>
                <MoveDown size={12} className='text-stef-muted' />
            </div>
        </>
    )
}

export default ScrollIndicator