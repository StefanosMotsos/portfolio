export type DropdownProps = {
    href: string
    label: string
    addClasses?: string
}

export type LineProps = {
    count?: number
    highlight: number
}

export type ButtonProps = Omit<DropdownProps, 'addClasses'>