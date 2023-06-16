import useTranslation from "next-translate/useTranslation";
import ErrorForm from "../ErrorForm";

interface FieldProps {
    id?: string,
    size: string;
    label?:   string;
    placeholder?:   any;
    type?:   string;
    controller:  any;
    name: string;
    onChange?: any
    require?: any
}

export default function FormInputField(props: FieldProps)  {
    const { t } = useTranslation("common");
    const {
        id,
        size,
        label,
        placeholder,
        type,
        controller,
        name,
        onChange,
        require,
    } = props;

    const getPattern = (type : string, name : string) => {
        switch(type) {
            case "email" : 
                return {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid_email'
                }
            case "tel" :
                return {
                    value : /^[\+]\d{2,}[0-9]{8,}$/,
                    message: 'invalid_phone'
                }
            default:
                return undefined
        }
    }
    
    return (
        <div className="w-fill max-w-sm my-4">
            {label ? <label className="font-bold capitalize"> {t(label)} <b className="text-red-600">{require ? "*" : ""}</b> <br /></label>: ''}
                    <input
                    {...controller(name, {
                            required:require ? true : false,
                            pattern : getPattern(type! , name)
                        }
                        )}
                    id={id}
                    type={type} 
                    min ="0"
                    placeholder={t(placeholder)}
                    className={`
                    w-${size}
                    bg-gray-400/20 dark:bg-white/20
                    p-3 my-2
                    rounded-md
                    focus:outline-none focus:ring focus:border-primary
                    `}
                    onKeyUp={onChange}
                    />
                    {
                        (require != undefined) && (require[name] && <ErrorForm message={`${require[name]?.message}`}/>)
                    }
        </div>
    )
}