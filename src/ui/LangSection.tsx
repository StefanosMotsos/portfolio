import {useEffect, useRef, useState} from "react";
import LineNumbers from "./LineNumbers.tsx";
import type {LangSectionProps} from "../types.ts";

const LangSection = (
    {id, highlight, langNumber, langName, color, stack, icons, children} : LangSectionProps) => {

    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id={id}
            className={`flex flex-col items-center justify-center min-h-screen text-center relative ${color}`}
        >
            <LineNumbers highlight={highlight} />

            {icons && (
                <div className={`absolute right-6 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-5
                    transition-opacity duration-500
                    ${inView ? "opacity-20" : "opacity-5"}`}>
                    {icons.map((Icon, i) => (
                        <Icon key={i} size={48} />
                    ))}
                </div>
            )}

            <div className={`flex flex-col items-center gap-4 w-full max-w-3xl
                transition-transform duration-700 ease-out
                ${inView ? "scale-100" : "scale-90"}`}>
                <span className="ibm text-stef-red text-xs">{langNumber}</span>
                <h2 className='ibm text-5xl font-medium'>{langName}</h2>
                <ol className="flex flex-wrap items-center justify-center gap-3 text-stef-muted text-xs ibm">
                    {stack.map((item, i) => (
                        <li key={i}>{item}{i < stack.length - 1 && ' · '}</li>
                    ))}
                </ol>
                {children}
            </div>
        </section>
    )
}

export default LangSection