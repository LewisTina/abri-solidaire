import useTranslation from 'next-translate/useTranslation';
import style from './index.module.scss'

export default function ErrorForm(props: any){
  const {message} = props
    const { t } = useTranslation("common");
    return (
        <div className={`flex text-red-600 bg-red-600/20 ${style.error} text-sm`}>
          <i className= {`material-icons`} style={{marginRight: "0.5em", fontSize: "1.5em"}}>warning</i>
          <span>
          {
            message != undefined && message != "" ?
            t(message) :
            t("field_required")
          }
        </span>
        </div>
    )
}