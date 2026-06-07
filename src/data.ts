import type {ElementType} from "react";
import {
    AngularOriginalIcon,
    DockerOriginalIcon,
    DotnetcoreOriginalIcon,
    MysqlOriginalIcon,
    PostgresqlOriginalIcon,
    ReactOriginalIcon,
    SpringOriginalIcon
} from "@devicon/react";

export type ProjectData = {
    title: string
    description: string
    backend?: string
    backendLabel?: string
    frontend?: string
    frontendLabel?: string
    live?: string
}

export type LangData = {
    id: string
    highlight: number
    langNumber: string
    langName: string
    color: string
    stack: string[]
    icons?: ElementType[]
    projects: ProjectData[]
}

export const langData: LangData[] = [
    {
        id: "csharp",
        highlight: 3,
        langNumber: "01",
        langName: "C#",
        color: "lang-csharp",
        stack: ["2 Projects", "ASP.NET Core", "React", "PostgreSQL", "SQL Server", "Docker"],
        icons: [DotnetcoreOriginalIcon, ReactOriginalIcon, PostgresqlOriginalIcon, DockerOriginalIcon],
        projects: [
            {
                title: "Car Rental Service - Coding Factory AUEB Final Project",
                description: "RESTful API for managing a car rental service. Final project for Coding Factory 9 at AUEB. " +
                    "Built with ASP.NET Core 10, JWT authentication, role-based authorization, " +
                    "EF Core migrations, Serilog logging, Swagger documentation, xUnit testing, and Docker Compose setup with PostgreSQL.",
                backend: "https://github.com/StefanosMotsos/car-rental-api",
                backendLabel: "C# Repo",
                frontend: "https://github.com/StefanosMotsos/car-rental-api",
                frontendLabel: "React Repo",
                live: "https://motsos-car-rentals.vercel.app/"
            },
            {
                title: "SSR Clinic Management",
                description: "Server-side rendered clinic management system built with ASP.NET Core and Razor Pages. " +
                    "Database-first and model-first variants available. " +
                    "Features role-based access control and cookie-based authentication with SQL Server.",
                backend: "https://github.com/StefanosMotsos/clinic-mvc-db1st",
                backendLabel: "C# Repo"
            }
        ]
    },
    {
        id: "java",
        highlight: 4,
        langNumber: "02",
        langName: "Java",
        color: "lang-java",
        stack: ["2 Projects", "Spring Boot", "MySQL / PostgreSQL", "Angular (soon)", "Docker"],
        icons: [SpringOriginalIcon, AngularOriginalIcon, MysqlOriginalIcon, DockerOriginalIcon],
        projects: [
            {
                title: "Sports Club Management",
                description: "RESTful API for managing a sports club registry. " +
                    "Built with Spring Boot 3, JWT authentication, role-based authorization, " +
                    "file uploads, async reporting, Flyway migrations, Docker Compose setup, and OpenAPI/Swagger documentation. " +
                    "Also available in a PostgreSQL variant.",
                backend: "https://github.com/StefanosMotsos/sports-club-api",
                backendLabel: "Java Repo",
                frontend: "frontend",
                frontendLabel: "Angular Repo (Soon)"
            },
            {
                title: "Library MVC App",
                description: "A library management system built with Spring Boot, Spring MVC, Thymeleaf, and MySQL. " +
                    "Features book CRUD operations, pagination, search, soft delete, and form validation.",
                backend: "https://github.com/StefanosMotsos/library-spring-mvc",
                backendLabel: "Java Repo"
            }
        ]
    },
    {
        id: "mean",
        highlight: 5,
        langNumber: "03",
        langName: "MORE SOON",
        color: "lang-mean",
        stack: ["Multiple Projects", "MongoDB", "Express", "Angular", "Node", "Python"],
        icons: [],
        projects: []
    }
]