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

export default function FormTextAreaField(props: FieldProps)  {
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
    
    return (
        <div className="w-fill max-w-sm my-4">
            {label ? <label className="font-bold capitalize"> {t(label)} <b className="text-red-600">{require ? "*" : ""}</b> <br /></label>: ''}
                    <textarea
                    {...controller(name, {
                            required:require ? true : false
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