import useTranslation from "next-translate/useTranslation"
import Head from "next/head"
import Image from "next/image"
import style from './index.module.scss'

interface AuthLayoutProps {
    title?: string
    children: any
    step?: number
}

export default function AuthLayout(props: AuthLayoutProps){
    const {title, children, step} = props
    const {t} = useTranslation("common")
    
    return (
        <main className="
                min-h-screen w-full 
                p-28 
                max-[768px]:p-0
                flex justify-between items-start 
                max-[768px]:items-center
                max-[768px]:justify-center
                relative">
            <Head>
              <title>{t(title!)} · Abri Solidaire</title>
            </Head>

           <div className={`
                    w-1/2 min-h-full 
                    max-[768px]:w-full
                    max-[768px]:max-w-sm
                    max-[768px]:px-4
                    flex flex-col 
                    justify-center
                    z-10`} 
                    id="auth-left">

                 <div className='h-12 flex items-center text-left mb-8'>
                        
                    <span className="font-bold text-4xl text-primary dark:text-white">
                        Abri <br />
                        Solidaire
                    </span>
                </div>

                 {children}
           </div>

           <div 
                className={`
                    w-1/2 h-full
                    max-[768px]:w-full
                    max-[768px]:absolute
                    flex
                    items-center
                    justify-center
                    z-0
                    `} 
                id="auth-right">
                <div className={`fixed transition animate-bounce max-[768px]:hidden bg-primary w-1/4 blur-3xl opacity-40 aspect-square rounded-full`}>
                </div>
           </div>
        </main>
    )
}