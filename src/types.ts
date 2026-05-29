export type DropdownProps = {
    href: string
    label: string
    addClasses?: string
    onClick?: () => void;
}

export type LineProps = {
    count?: number
    highlight: number
}

export type ButtonProps = {
    href: string
    label: string
    newTab?: boolean
    showArrow?: boolean
    addClasses?: string
}

export type LangSectionProps = {
    id?: string;
    highlight: number
    langNumber: string
    langName: string
    color: string
    stack: string[]
    icons?: React.ElementType[]
    children?: React.ReactNode
}

export type ProjectCardProps = {
    title: string
    description: string
    frontend?: string
    frontendLabel?: string
    backend?: string
    backendLabel?: string
    live?: string
}