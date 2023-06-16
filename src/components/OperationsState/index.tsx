import useTranslation from 'next-translate/useTranslation'
import style from './index.module.scss'

interface operationSate{
    status : number
    message : string
    setShowMessage: any
}

export default function OperationSate(props: operationSate) {
    const {t} = useTranslation("common")
    const {message, status, setShowMessage} = props

    const getStatusElements = () => {
        if(status >= 200 && status <= 209) {
            return {theme: "green", label: "success"}
        }

        else if(status >= 400 && status <= 499) {
            return {theme: "orange", label: "request_error"}
        }
        
        else if(status >= 500 && status <= 599) {
            return {theme: "red", label: "server_error"}
        }
    }
    

    const dataElement = getStatusElements()

    return (
        <div 
            className={`
            ${style.OperationSate}
            flex
            items-center
            p-2
            rounded-md`} 
            style={{
                border: `2px solid rgba(var(--${dataElement?.theme}), 1)`, 
                background: `rgba(var(--${dataElement?.theme}), 0.2)`
                }}>

                <i 
                    className={`material-icons`}
                    style={{
                        color: `rgba(var(--${dataElement?.theme}), 1)`}}
                    >info</i>

                <div className={`${style.message} blackC`}>
                    <span className="font-bold">
                        {t(dataElement?.label!)}
                    </span> <br />

                    <span>
                        {message}
                    </span>
                </div>

                <i 
                    className={`material-icons cursor-pointer m-2 rounded-full p-2 hover:bg-white/20`}
                    onClick={()=>{setShowMessage(false)}}
                    >close</i>
            </div>
    )
    
}