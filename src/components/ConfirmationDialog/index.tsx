import useTranslation from 'next-translate/useTranslation'
import style from './index.module.scss'

interface dialog{
    title: string
    message: string
    ValidateAction: any
    CancelAction: any
}

export default function ConfirmationDialog(props: dialog) {
    const {title,message, ValidateAction, CancelAction } = props
    const {t} = useTranslation("common")
    
    return (
        <div className={`backdrop-blur-sm bg-white/30 dark:bg-primary/30 flex ${style.confirmationPanel}`}>
            <div className={`shadow-black bg-white/30 dark:bg-primary/30 rounded-lg listing ${style.PanelBox}`}>
                <div className={style.message}>
                    <div className="flex" style={{alignItems: "left", textTransform: "capitalize"}}>
                        <i className="material-icons  text-red-600">
                            info
                        </i>
                        <span className='font-bold text-red-600'>
                            {t(title)}
                        </span>
                    </div>

                    <div className={`bodyRegular ${style.text}`}>
                        {t(message)}
                    </div>
                </div>

                <div className={`flex`}>
                    <button className={`dark:bg-primary/30 w-1/2 p-2 rounded-md mr-2`} onClick={CancelAction}>
                    { t('cancel')}
                    </button>

                    
                    <button className={`bg-red-600 w-1/2 p-2 rounded-md ml-2`} onClick={ValidateAction}>
                    { t('confirm')}
                    </button>
                </div>
            </div>
        </div>
    )
}