import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import style from './index.module.scss'

interface navItemProps{
    path: string
    label: string
    icon: string

}

export default function NavItem(props: navItemProps){
    const {t} = useTranslation('common')
    const {path, label, icon} = props
    const router = useRouter()

    return (
        <div className={`${style.NavItemLink} ${router.asPath.includes(path) ? "bg-white/20" : ""} p-2 mx-2 rounded-full transition text-white`}>
            <Link href={path}>
                <i className="material-icons">
                    {icon}
                </i>
                {
                    router.asPath.includes(path) ?
                    <span className="
                        mx-2 
                        capitalize 
                        font-bold text-sm 
                        max-[1024px]:hidden">
                        {t(label)}
                    </span>
                    :
                    <></>
                }
            </Link>
        </div>
    )
}