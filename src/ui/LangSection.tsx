import LineNumbers from "./LineNumbers.tsx";
import type {LangSectionProps} from "../types.ts";

const LangSection = (
    {id, highlight, langNumber, langName, color, stack, icons, children} : LangSectionProps) => {
    return (
        <>
            <section id={id} className={`flex flex-col items-center justify-center
                min-h-screen text-center gap-4 relative px-4 sm:px-0 py-16 sm:py-0 ${color}`}>
                <LineNumbers highlight={highlight} />

                {icons && (
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5">
                        {icons.map((Icon, i) => (
                            <Icon key={i} size={48} className="opacity-20" />
                        ))}
                    </div>
                )}
                <span className="ibm text-stef-red text-xs">{langNumber}</span>
                <h2 className='ibm text-5xl font-medium'>{langName}</h2>
                <ol className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-stef-muted text-xs ibm">
                    {stack.map((item, i) => (
                        <li key={i}>{item}{i < stack.length - 1 && ' · '}</li>
                    ))}
                </ol>
                <div className="flex flex-col items-center gap-4 w-full max-w-3xl px-0 sm:px-4">
                    {children}
                </div>
            </section>
        </>
    )
}

export default LangSection