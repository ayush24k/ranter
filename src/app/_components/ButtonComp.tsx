import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

type ButtonProp = {
    small?: boolean,
    gray?: boolean,
    className?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export default function ButtonComp({small = false, gray= false, className="" ,...props}:ButtonProp) {
    return (
        <button {...props}></button>
    )
}