import LinkButton from "./LinkButton.tsx";
import type {ProjectCardProps} from "../types.ts";

const ProjectCard = (
    {title, description, backend, backendLabel, frontend, frontendLabel, live}: ProjectCardProps
) => {
    return (
        <>
            <div className="bg-black/20 border-l-[3px] border-stef-red text-stef-muted text-left w-full max-w-3xl px-6 py-2
                    rounded-r-md">
                <h3 className='text-white text-base sm:text-lg font-medium'>{title}</h3>
                <p className="mb-4 text-xs sm:text-sm text-stef-muted leading-relaxed">{description}</p>
                <div className="flex items-center justify-start gap-3 text-stef-muted">
                    {backend && <LinkButton href={backend} label={backendLabel ?? "Github"} newTab={true} addClasses="text-xs px-2 py-1 flex-wrap gap-2" />}
                    {frontend && <LinkButton href={frontend} label={frontendLabel ?? "Github"} newTab={true} addClasses="text-xs px-2 py-1 flex-wrap gap-2" />}
                    {live && <LinkButton href={live} label={"Live App"} newTab={true} addClasses="text-xs px-2 py-1 flex-wrap gap-2" />}
                </div>
            </div>
        </>
    )
}

export default ProjectCard