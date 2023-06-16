import Head from "next/head";
import NavBar from "./NavBar";
import useTranslation from "next-translate/useTranslation";

interface LayoutProps {
    title?: string,
    children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    const {title, children} = props
    const {t} = useTranslation("common")
    
    return (
        <main className="w-full">
            <Head>
              <title>{t(title!)} · Abri Solidaire</title>
          </Head>
            <NavBar/>
            {children}
        </main>
    )
}