import LineNumbers from "../ui/LineNumbers.tsx";
import LinkButton from "../ui/LinkButton.tsx";

const About = () => {
    return (
        <>
            <section className='flex flex-col items-center justify-center
                dot-bg bg-black relative min-h-screen gap-5'>
                <LineNumbers highlight={2} />
                <h2 className='text-stef-red text-4xl font-medium ibm'>ABOUT</h2>
                <p className='text-stef-muted max-w-xl leading-relaxed text-xl'>Junior developer in Athens. I did Coding Factory at AUEB,
                    8 months of daily coding, full stack, backends, databases, frontends, the whole package.
                    I know multiple stacks, I learn fast and I'm looking to grow with a team.
                </p>
                <div className='flex items-center justify-center gap-2'>
                    <LinkButton href={"https://github.com/StefanosMotsos"} label={'Github'} newTab={true} />
                    <LinkButton href={"https://www.linkedin.com/in/stefanos-motsos/"} label={'LinkedIn'} newTab={true} />
                    <LinkButton href={"mailto:stefanosmotsos01@gmail.com"} label={'stefanosmotsos01@gmail.com'} />
                    <LinkButton href={"/portfolio/Stefanos_Motsos_CV.docx"} label={"View CV"} newTab={true} />
                </div>
            </section>
        </>
    )
}

export default About;