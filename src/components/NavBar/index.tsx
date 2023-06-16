import Image from 'next/image'
import SwitchTheme from '../core/SwitchTheme'
import NavItem from './NavItem'
import ProfilePanel from '../ProfilePanel'
import NotificationsPanel from '../NotificationsPanel'

interface navbar{

}

export default function NavBar(props: navbar){
    return(
        <header 
            className="
                backdrop-blur-sm 
                bg-primary 
                w-full 
                py-2 px-20 
                max-[1024px]:px-6
                fixed
                flex items-center justify-between">
            <div className='h-12 flex justify-center items-center text-center m-0'>
                    
                <span className="font-bold text-2xl text-white mr-8">
                    Abri Solidaire
                </span>

                <input 
                    type="search" 
                    placeholder='Saisir quelque chose'
                    className="
                    bg-white/40
                    py-2 px-4
                    text-black
                    text-sm
                    rounded-full
                    placeholder:text-white
                    focus:outline-none
                    focus:bg-white
                    focus:border-none
                    max-[1024px]:focus:w-64
                    max-[1024px]:w-56
                    w-80
                    focus:w-96
                    transition
                    " />
            </div>

            <div></div>

            
            <div className="flex items-center">
                <div className="flex">
                    <NavItem 
                        path={'/home'} 
                        label={'Acceuil'}
                        icon={'home'}
                        />

                    <NavItem 
                        path={'/discussions'} 
                        label={'discussions'}
                        icon={'chat'}
                        />
                        
                    <NotificationsPanel/>

                    <ProfilePanel/>
                    
                </div>
            </div>

        </header>
    )
}