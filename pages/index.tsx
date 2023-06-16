import SwitchTheme from '@/src/components/core/SwitchTheme'
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Image from 'next/dist/client/image';
import style from '@/styles/landing.module.scss'


export default function Home() {
  const templatesId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const router = useRouter()
  return (
    <div className={`flex w-full max-w-screen-xl xl:p-0 p-24 h-screen items-start overflow-hidden`}>

          <div className={`
                    w-1/2
                    left-0 top-0 
                    absolute
                    p-20
                    max-[768px]:w-full
                    flex
                    z-0
                    `} >
                <div className={`transition bg-primary w-96 blur-3xl opacity-40 aspect-square rounded-full animate-pulse`}>
                </div>
           </div>

           <div 
              className={`
                w-1/2 h-full
                z-10
                flex
                flex-col
                justify-center
                pr-24
              `}>

              <div 
                className={`
                  w-full
                `}>

                  <span className="text-6xl font-black tracking-wider block">
                    Abri <br />
                    Solidaire
                  </span>
                  
                  <span className="block my-8 dark:text-white/70 text-2xl text-black/70">
                    Faites un don afin de  sauver des milliers de sans abris.
                    <br />
                    Des associations et des bénévoles apportent déjà leurs aide 
                    à des centaines de sans abri.
                  </span>

                  <div className="block h-1 w-24 bg-black dark:bg-white rounded-full"></div>

                  
                  
                  <span className="block my-8 dark:text-white/70 text-2xl text-black/70">
                    Des sans abri bénéficient d’aides de différentes natures.
                  </span>

              </div>

              <div className="flex">
                <button 
                  className="
                    text-gray-700 
                    dark:text-white 
                    hover:dark:bg-white/20
                    hover:bg-gray-100 
                    border-2 border-black 
                    dark:border-white
                    rounded-lg
                    font-bold
                    flex w-48
                    text-center
                    justify-center 
                    items-center 
                    px-4 py-2 " 
                  id="menu-item-0"
                  onClick={()=> {router.push('/authentication/login')}}>
                    Se Connecter
              </button>

              <button 
                  className="
                    text-white 
                    bg-primary 
                    hover:dark:bg-primary
                    hover:bg-gray-100 
                    rounded-lg
                    font-bold
                    flex w-48
                    text-center
                    justify-center 
                    items-center 
                    px-4 py-2 mx-2" 

                  id="menu-item-0"
                  onClick={()=> {router.push('/authentication/register')}}>
                    {`S'inscrire`}
              </button>
                
                
              </div>

              <div className=''>
                <button 
                    className="
                      text-white 
                      bg-primary 
                      hover:dark:bg-primary
                      hover:bg-gray-100 
                      rounded-lg
                      font-bold
                      flex
                      text-center
                      justify-between 
                      items-center 
                      px-4 py-2 my-8" 

                    id="menu-item-0"
                    onClick={()=> {router.push('/donation')}}>
                      <i className="material-icons text-sm mr-4">
                        favorite
                      </i>
                      {`Faire un don`}
                </button>
              </div>

              <div className="py-6">
                <SwitchTheme/>
              </div>
           </div>

           <div 
              style={{aspectRatio: "2/4"}}
              className={`
                w-1/2
                z-10
                flex
                flex-col
                flex-wrap
                content-start
                rotate-12
                relative
                -top-32
                xl:-left-24
              `}>

{
                      templatesId.map((id: any, idx: number) => {
                        return (
                          <div className={`bg-primary m-2 shadow-lg rounded-lg flex justify-center items-center ${style.imgCard}`} key={idx} style={{width: "calc(30%)", aspectRatio: "1/1.4"}}>
                            <Image 
                                src={`/${id}.png`} 
                                alt= 'Intro Image'
                                width={50}
                                height={50}/>
                        </div>
                        )
                      })
                    }

              </div>
           
    </div>
  )
}
