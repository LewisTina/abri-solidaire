import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Image from 'next/image'
import { useRouter } from 'next/router';

const Custom500 = () => {
    const { t } = useTranslation("common"); 
    const router = useRouter()
    return (
    <main>
    <Head>
    <title>500 | SayIT</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width,"/>
    </Head>
        
                <div className={`w-full h-screen flex items-center justify-center text-center`}>
                    <div className='w-80'>

                        <div className='h-32 flex justify-center text-center m-0'>
                        <Image
                            alt=""
                            src={'/SayIt-basic-logo.svg'}
                            width={100}
                            height={100}
                            ></Image>
                        </div>
                    
                        <span className={`text-primary font-black text-9xl`}>500</span><br />

                        <span className="font-bold text-xl mt-2 mb-2 flex justify-center items-center text-center">{t('not_found')}</span><br />

                        <span>{t('not_found_message')}</span>
                        
                        <div className="input">

                            <button 
                                type="button"
                                className="
                                mt-4 mb-4
                                flex 
                                w-full 
                                justify-center 
                                items-center 
                                gap-x-1.5 
                                rounded-md
                                bg-primary
                                text-white
                                px-3 py-2 
                                text-sm 
                                font-semibold" 

                                id="menu-button" 
                                aria-expanded="true"
                                aria-haspopup="true"
                                onClick={() => {router.push("/")}}
                                >

                                {t('back_to_home')}
                            </button>
                        </div>
                    </div>
                </div>
    </main>
)
}

export default Custom500