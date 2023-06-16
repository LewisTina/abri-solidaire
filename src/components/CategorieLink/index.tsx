interface linkOption {
    label: string
}

export default function OptionLink(props: linkOption){
    const {label} = props
    return (
        <span className="block border-l-4 border-transparent p-2  hover:border-primary transition-all cursor-pointer">
            {label}
        </span>
    )
}