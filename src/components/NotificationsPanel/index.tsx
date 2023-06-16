import { useEffect, useState } from "react";
import SwitchTheme from "../core/SwitchTheme";
import { useRouter } from "next/router";

const NotificationsPanel = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
    
    useEffect(()=> {
        if(isOpen == true){
          var elem = document.getElementById("Notifications-panel");
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
        <div className={`relative inline-block text-left z-50`} id="Notifications-panel">
                    <button 
                    type="button"
                    className="flex w-full items-center gap-x-1.5 rounded-md text-white px-3 py-2 text-sm font-semibold" id="menu-button" 
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => {setIsOpen(!isOpen)}}>
                    <i className="material-icons">{"notifications"}</i>
                    </button>

                    {
        isOpen &&
        <div className={`absolute right-0 w-80 z-10 mt-4 p-4 origin-bottom-left rounded-md bg-gray-100 dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
          <div className="py-1 flex flex-col items-center justify-center text-gray-400" role="none">
            <i className="material-icons text-9xl">{"notifications"}</i> <br />
            <span>
                Aucune notification pour le moment
            </span>
          </div>
        </div>
        }
        </div>
    )
}

export default NotificationsPanel