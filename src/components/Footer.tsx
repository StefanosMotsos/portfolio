const Footer = () => {
    const currentYear: number = new Date().getFullYear()
    return (
        <>
            <footer className="bg-black min-h-[100px] flex flex-col items-center justify-center gap-3">
                <span className='ibm text-stef-red text-xs'>Stefanos Motsos</span>
                <span className='ibm text-zinc-700 text-xs'>© {currentYear} · Built with React + TypeScript + Vite</span>
            </footer>
        </>
    )
}

export default Footer