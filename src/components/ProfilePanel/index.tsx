import { useEffect, useState } from "react";
import SwitchTheme from "../core/SwitchTheme";
import { useRouter } from "next/router";

const ProfilePanel = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
    
    useEffect(()=> {
        if(isOpen == true){
          var elem = document.getElementById("profile-panel");
          if(typeof elem !== 'undefined' && elem !== null) {
            window.addEventListener('click', function(e){   
              if (!(elem!.contains(e.target as HTMLElement))){
                  setIsOpen(false)
              } 
            });
          }
        }
    })

    return (
        <div className={`relative inline-block text-left z-50`} id="profile-panel">
                    <button 
                    type="button"
                    className="flex w-full items-center gap-x-1.5 rounded-md text-white px-3 py-2 text-sm font-semibold" id="menu-button" 
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => {setIsOpen(!isOpen)}}>
                    <i className="material-icons">{"account_circle"}</i>
                    </button>

                    {
        isOpen &&
        <div className={`absolute right-0 w-80 z-10 mt-4 p-4 origin-bottom-left rounded-md bg-gray-100 dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
          <div className="py-1" role="none">
            <div className="flex w-full rounded-md h-16 p-2 bg-black/20 dark:bg-white/20  cursor-pointer" id="header">
                <div className="h-full aspect-square rounded-full bg-primary flex items-center justify-center" id="avatar">
                    <i className="material-icons text-white">{"account_circle"}</i>
                </div>
                <div className="ml-2">
                    <span className="block text-xl font-black">
                        Burdin
                    </span>

                    <span className="block text-sm">
                        <b>Statut:</b> Sans Abri
                    </span>
                </div>
            </div>

            <div className="w-full pt-2 text-sm" id="panel-content">
                <div className="flex w-full rounded-md p-2 my-2 transition-all bg-black/5 dark:bg-white/5 cursor-pointer hover:bg-primary/20 dark:hover:bg-primary/20" id="header">
                    
                    <i className="material-icons text-sm text-black dark:text-white">{"lock"}</i>

                    <span className="block ml-2">
                        Paramètres de sécurité
                    </span>
                </div>

                <div className="flex w-full rounded-md p-2 my-2 transition-all bg-black/5 dark:bg-white/5 cursor-pointer hover:bg-primary/20 dark:hover:bg-primary/20" id="header">
                    
                    <i className="material-icons text-sm text-black dark:text-white">{"grade"}</i>

                    <span className="block ml-2">
                        Gestion des besoins
                    </span>
                </div>

                

                <div className="flex w-full rounded-md p-2 my-2 transition-all bg-black/5 dark:bg-white/5 cursor-pointer hover:bg-primary/20 dark:hover:bg-primary/20" id="header"
                    onClick={() => {router.push('/dashboard')}}>
                    
                    <i className="material-icons text-sm text-black dark:text-white">{"language"}</i>

                    <span className="block ml-2">
                        Espace Association/ Benévole
                    </span>
                </div>
                
                <div className="flex w-full rounded-md p-2 my-2 transition-all bg-black/5 dark:bg-white/5 cursor-pointer hover:bg-red-600 dark:hover:bg-red-600 text-red-600 hover:text-white" id="header">
                    
                    <i className="material-icons text-sm">{"logout"}</i>

                    <span className="block ml-2">
                        Se déconnecter
                    </span>
                </div>
            </div>

            <div className="w-full pt-4 flex" id="panel-content">
                    <SwitchTheme/>
            </div>
          </div>
        </div>
        }
        </div>
    )
}

export default ProfilePanel