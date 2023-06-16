interface FormButtonProps{
    label: string
    action?: any
    color: string
    size: string
    children?: any
    type: "submit" | "button" | undefined
}

export default function FormButton(props: FormButtonProps) {
    const {
        label,
        action,
        color,
        size,
        children,
        type
    } = props
    return (
        <button
            onClick={() => {action}}
            className={`
                flex 
                w-${size} 
                bg-${color}
                p-3 my-4
                rounded-md
                text-white
                font-bold
                text-center
                flex
                ${children ? 'justify-between' : 'justify-center'}
                capitalize
                `}
            type={type}>
            {label}

            {children}
        </button>
    )
}