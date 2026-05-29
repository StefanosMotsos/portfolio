export type DropdownProps = {
    href: string
    label: string
    addClasses?: string
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
    highlight: number
    langNumber: string
    langName: string
    color: string
    stack: string[]
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