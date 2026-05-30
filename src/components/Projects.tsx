import LangSection from "../ui/LangSection.tsx";
import ProjectCard from "../ui/ProjectCard.tsx";
import {langData} from "../data.ts";

const Projects = () => {
    return (
        <section>
            {langData.map((lang) => (
                <LangSection
                    key={lang.id}
                    id={lang.id}
                    highlight={lang.highlight}
                    langNumber={lang.langNumber}
                    langName={lang.langName}
                    color={lang.color}
                    stack={lang.stack}
                    icons={lang.icons}
                >
                    {lang.projects.map((project, i) => (
                        <ProjectCard key={i} {...project} />
                    ))}
                </LangSection>
            ))}
        </section>
    )
}

export default Projects