import { createContext, useEffect, useState } from "react";
import OperationSate from "../components/OperationsState";

export const OperationStatus = createContext<any>(undefined);

export const OperationStatusProvider: React.FC<any> = ({ children }) => {
    const [showMessage, setShowMessage] = useState(false)
    const [message, SetMessage] = useState<undefined | any>(undefined)
    const [status, SetStatus] = useState<undefined | any>(undefined)

    useEffect(() => {
      if(showMessage === true){
        setTimeout(() => {
          setShowMessage(false);
        }, 20000);
      }
    }, [showMessage])
  
    return <OperationStatus.Provider value={{setShowMessage, SetMessage, SetStatus}}>
        {
              showMessage &&
              <OperationSate 
                message={message}
                status={status}
                setShowMessage={setShowMessage}
              />
          }
      {children}
    </OperationStatus.Provider>
  }