import LineNumbers from "./LineNumbers.tsx";
import type {LangSectionProps} from "../types.ts";

const LangSection = (
    {id, highlight, langNumber, langName, color, stack, icons, children} : LangSectionProps) => {
    return (
        <>
            <section id={id} className={`flex flex-col items-center justify-center
                min-h-screen text-center gap-4 relative ${color}`}>
                <LineNumbers highlight={highlight} />

                {icons && (
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-5">
                        {icons.map((Icon, i) => (
                            <Icon key={i} size={48} className="opacity-20" />
                        ))}
                    </div>
                )}
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