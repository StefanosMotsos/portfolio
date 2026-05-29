import type {LineProps} from "../types.ts";

const LineNumbers = ({count = 6, highlight}: LineProps) => {
    return (
        <>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1">
                {Array.from({length: count}).map((_, i) => (
                    <span
                        key={i}
                        className={`text-xs ${i + 1 === highlight ? 'text-stef-red' : 'text-zinc-600'}`}
                    >
                        {String(i+1).padStart(2, "0")}
                    </span>
                ))}

            </div>
        </>
    )
}

export default LineNumbers