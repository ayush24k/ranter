import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

type ButtonProp = {
    small?: boolean,
    gray?: boolean,
    className?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export default function ButtonComp({small = false, gray= false, className="" ,...props}:ButtonProp) {

    const sizeClasses = small ? "px-2 py-1" : "px-4 py-2 font-bold";
    const colorClasses = gray ? "bg-gray-400 hover:bg-gray-300 focus-visible:bg-gray-300" : "bg-green-500 hover:bg-green-400 focus-visible:bg-green-400";

    return (
        <button className={` rounded-full transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 text-white ${sizeClasses} ${colorClasses} ${className}`}  {...props}></button>
    )
}