import { useRouter } from "next/router"

interface linkOption {
    label: string
    icon: string
    path: string
}

export default function DashboardLink(props: linkOption){
    const {label, icon, path} = props
    const router = useRouter()
    return (
        <span className={`flex text-sm rounded-md p-2  hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-pointer ${router.asPath.includes(path) ? "bg-gray-200 dark:bg-gray-800" : "" }`}
                onClick={() => {router.push(`${path}`)}}>
            <i className="material-icons text-sm mr-2">
                {icon}
            </i>
            {label}
        </span>
    )
}