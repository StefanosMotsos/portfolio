import LangSection from "../ui/LangSection.tsx";
import ProjectCard from "../ui/ProjectCard.tsx";

const Projects = () => {
    return (
        <>
            <section>
                <LangSection id="csharp" highlight={3} langNumber={"01"} langName={"C#"} color={"lang-csharp"}
                             stack={["2 Projects", "ASP NET", "React", "PostgreSQL"]}>
                    <ProjectCard title={"Car Rental Service"}
                                 description={"Junior developer in Athens. I did Coding Factory at AUEB, 8 months of daily coding, " +
                                     "full stack, backends, databases, frontends, the whole package. " +
                                     "I know multiple stacks, I learn fast and I'm looking to grow with a team."}
                                 backend={"backend"} frontend={"frontend"}
                                 backendLabel={"C# Repo"} frontendLabel={"React Repo"} live={"vercel"}
                    />
                    <ProjectCard title={"SSR Clinic Management"}
                                 description={"Junior developer in Athens. I did Coding Factory at AUEB, 8 months of daily coding, " +
                                     "full stack, backends, databases, frontends, the whole package. " +
                                     "I know multiple stacks, I learn fast and I'm looking to grow with a team."}
                                 backend={"backend"} backendLabel={"C# Repo"}
                    />
                </LangSection>

                <LangSection id="java" highlight={4} langNumber={"02"} langName={"Java"} color={"lang-java"}
                             stack={["2 Projects", "Spring Boot", "Angular", "MySQL"]}>
                    <ProjectCard title={"Sports Club Management"}
                                 description={"Junior developer in Athens. I did Coding Factory at AUEB, 8 months of daily coding, " +
                                     "full stack, backends, databases, frontends, the whole package. " +
                                     "I know multiple stacks, I learn fast and I'm looking to grow with a team."}
                                 backend={"backend"} backendLabel={"Java Repo"}
                                 frontend={"frontend"} frontendLabel={"Angular Repo"}
                    />
                    <ProjectCard title={"Library MVC App"}
                                 description={"Junior developer in Athens. I did Coding Factory at AUEB, 8 months of daily coding, " +
                                     "full stack, backends, databases, frontends, the whole package. " +
                                     "I know multiple stacks, I learn fast and I'm looking to grow with a team."}
                                 backend={"backend"} backendLabel={"Java Repo"}
                    />
                </LangSection>

                <LangSection id="mean" highlight={5} langNumber={"03"} langName={"MORE SOON"} color={"lang-mean"}
                             stack={["Multiple Projects", "MongoDB", "Express", "Angular", "Node","Python"]}>
                    {/*<ProjectCard title={"School App"}*/}
                    {/*             description={"Junior developer in Athens. I did Coding Factory at AUEB, 8 months of daily coding, " +*/}
                    {/*                 "full stack, backends, databases, frontends, the whole package. " +*/}
                    {/*                 "I know multiple stacks, I learn fast and I'm looking to grow with a team."}*/}
                    {/*             backend={"backend"} backendLabel={"Node Repo"}*/}
                    {/*             frontend={"frontend"} frontendLabel={"Angular Repo"}*/}
                    {/*/>*/}
                </LangSection>
            </section>
        </>
    )
}

export default Projects