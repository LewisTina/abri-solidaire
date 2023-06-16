import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import style from './index.module.scss'
import ErrorForm from '../ErrorForm';

export interface InputPassword {
    id?: string
    size?: any
    label?:   string
    placeholder?:   any
    controller:  any;
    name: string;
    onChange?: any
    require?: any
    validityCheck? : boolean
}

export default function InputPassword(props:InputPassword){
    const { t } = useTranslation("common");
    const {
        id,
        size,
        label,
        placeholder,
        controller,
        name,
        onChange,
        require,
        validityCheck
    } = props;

    const [isShow, setIsShow] = useState(false)

    return(
        <div className={``}>
            {label ? <label className="font-bold capitalize"> {t(label)} <b className="text-red-600">{require ? "*" : ""}</b> <br /></label>: ''}
                    <div 
                        className={`
                            ${style.passwordInput} 
                            flex 
                            items-center
                            bg-primary/20 dark:bg-white/20
                            p-3 my-2
                            rounded-md
                            focus-within:outline-none focus-within:ring focus-within:border-primary
                            `}>
                    <input
                    {...controller(name, {
                        required:require ? true : false,
                        pattern : validityCheck && {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z.!@#$%^&*_=+-]{8,}$/,
                            message: "invalid_password",
                          },
                    })}
                    id={id}
                    type={isShow ? "test" : "password"} 
                    min ="0"
                    placeholder={t(placeholder)}
                    className={`
                    w-${size}
                    bg-transparent
                    focus:border-none
                    `}
                    onKeyUp={onChange}
                    />
                    <i className="material-icons" onClick={()=>{setIsShow(!isShow)}}>
                        {isShow ? "visibility_off" : "visibility"}
                    </i>
                    </div>
                    {
                        (require != undefined) && (require[name] && <ErrorForm message={`${require[name]?.message}`}/>)
                    }
                </div>
    )
}