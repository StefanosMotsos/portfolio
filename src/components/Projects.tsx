import LangSection from "../ui/LangSection.tsx";
import ProjectCard from "../ui/ProjectCard.tsx";
import {
    AngularOriginalIcon,
    DockerOriginalIcon,
    DotNetOriginalIcon,
    MysqlOriginalIcon,
    PostgresqlOriginalIcon,
    ReactOriginalIcon,
    SpringOriginalIcon
} from "@devicon/react";

const Projects = () => {
    return (
        <>
            <section>
                <LangSection
                    id="csharp"
                    highlight={3}
                    langNumber={"01"}
                    langName={"C#"}
                    color={"lang-csharp"}
                    stack={["2 Projects", "ASP.NET Core", "React", "PostgreSQL", "SQL Server", "Docker"]}
                    icons={[DotNetOriginalIcon, ReactOriginalIcon, PostgresqlOriginalIcon, DockerOriginalIcon]}
                >
                    <ProjectCard
                        title={"Car Rental Service - Coding Factory AUEB Final Project"}
                        description={"RESTful API for managing a car rental service. Final project for Coding Factory 9 at AUEB. " +
                                     "Built with ASP.NET Core 10, JWT authentication, role-based authorization, " +
                                     "EF Core migrations, Serilog logging, Swagger documentation, xUnit testing, and Docker Compose setup with PostgreSQL."}
                        backend={"https://github.com/StefanosMotsos/car-rental-api"}
                        frontend={"frontend"}
                        backendLabel={"C# Repo"}
                        frontendLabel={"React Repo (Soon)"}
                        live={"vercel"}
                    />
                    <ProjectCard
                        title={"SSR Clinic Management"}
                        description={"Server-side rendered clinic management system built with ASP.NET Core and Razor Pages. " +
                                     "Database-first and model-first variants available. " +
                                     "Features role-based access control and cookie-based authentication with SQL Server."}
                        backend={"https://github.com/StefanosMotsos/clinic-mvc-db1st"}
                        backendLabel={"C# Repo"}
                    />
                </LangSection>

                <LangSection
                    id="java"
                    highlight={4}
                    langNumber={"02"}
                    langName={"Java"}
                    color={"lang-java"}
                    stack={["2 Projects", "Spring Boot", "MySQL / PostgreSQL", "Angular (soon)", "Docker"]}
                    icons={[SpringOriginalIcon, AngularOriginalIcon, MysqlOriginalIcon, DockerOriginalIcon]}
                >
                    <ProjectCard
                        title={"Sports Club Management"}
                        description={"RESTful API for managing a sports club registry. " +
                                     "Built with Spring Boot 3, JWT authentication, role-based authorization, " +
                                     "file uploads, async reporting, Flyway migrations, Docker Compose setup, and OpenAPI/Swagger documentation. " +
                                     "Also available in a PostgreSQL variant."}
                        backend={"https://github.com/StefanosMotsos/sports-club-api"}
                        backendLabel={"Java Repo"}
                        frontend={"frontend"}
                        frontendLabel={"Angular Repo (Soon)"}
                    />
                    <ProjectCard
                        title={"Library MVC App"}
                        description={"A library management system built with Spring Boot, Spring MVC, Thymeleaf, and MySQL. " +
                                     "Features book CRUD operations, pagination, search, soft delete, and form validation."}
                        backend={"https://github.com/StefanosMotsos/library-spring-mvc"}
                        backendLabel={"Java Repo"}
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