import LineNumbers from "./LineNumbers.tsx";
import type {LangSectionProps} from "../types.ts";

const LangSection = (
    {highlight, langNumber, langName, color, stack, children} : LangSectionProps) => {
    return (
        <>
            <section className={`flex flex-col items-center justify-center
                min-h-screen text-center gap-4 relative ${color}`}>
                <LineNumbers highlight={highlight} />
                <span className="ibm text-stef-red text-xs">{langNumber}</span>
                <h2 className='ibm text-5xl font-medium'>{langName}</h2>
                <ol className="flex items-center justify-center gap-3 text-stef-muted text-xs ibm">
                    {stack.map((item, i) => (
                        <li key={i}>{item}{i < stack.length - 1 && ' · '}</li>
                    ))}
                </ol>
                {children}
            </section>
        </>
    )
}

export default LangSection