import LineNumbers from "../ui/LineNumbers.tsx";
import LinkButton from "../ui/LinkButton.tsx";
import ScrollIndicator from "../ui/ScrollIndicator.tsx";

const Hero = () => {
    return (
        <>
            <section id="hero" className="flex flex-col items-center justify-center relative min-h-screen
            pt-[55px] gap-5 pb-20 dot-bg bg-black text-center text-white">
                <LineNumbers highlight={1}/>
                <span className='text-stef-red ibm'>JUNIOR FULL-STACK DEVELOPER</span>
                <h1 className='text-5xl sm:text-7xl md:text-8xl font-medium'>
                    Stefanos <br/>
                    <span className='text-stef-red'>Motsos</span>
                </h1>
                <span className={'text-stef-muted'}>Ready to build.</span>
                <div className='flex flex-wrap justify-center items-center gap-1'>
                    <LinkButton href={"#csharp"} label={"View Projects"} showArrow={true}></LinkButton>
                    <LinkButton href="#about" label={'About me'} showArrow={true}></LinkButton>
                </div>
                <ScrollIndicator/>
            </section>
        </>
    )
}

export default Hero