import useTranslation from 'next-translate/useTranslation';
import React, { useState,useEffect } from 'react';
import style from "./index.module.scss";
import Image from 'next/image';

export interface formUploadFile {
    label?:   string
    controller?:  any
    name: string
    require? : any
    valueSetter: any
}

export default function FormUploadFile(props:formUploadFile){
    const { t } = useTranslation("common");
    const {
        label,
        controller,
        name,
        require,
        valueSetter
    } = props;

    const [image, setImage] = useState<{ file: File | null; url: string | null }>({
        file: null,
        url: null,
      });
    
      function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
    
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setImage({ file, url: reader.result as string });
            valueSetter("logo64", reader["result"])
          };
          reader.readAsDataURL(file);
        }
      }
    
    return(
        <div className={`w-96 `}>
                {label ? <label> {t(label)} {require ? <b className='redC'>*</b> : ''}<br /></label>: ''}
                <div className={`${style.upload} bg-gray-400/20 dark:bg-white/20 absoluteCenter`}>
                    {image.url != undefined ? 
                        <>
                          <Image
                          src={image.url}
                          alt="Selected"
                          width={1000}
                          height={1000} />
                          <i className={`material-icons ${style.deleteImageIcon}`} onClick={() => { setImage({file: null, url: null}), valueSetter('logo', undefined), valueSetter("logo64", "undefined") } }>
                            delete
                          </i>
                        </>

                        :
                        
                        <div className={`${style.uploadIcon} flex justify-center items-center text-center`}>
                            <div style={{display:"block"}}>
                            <i className="material-icons ">upload_file</i><br />
                            <span className='bodyRegular'>
                                {t('upload_file')}
                            </span></div>
                        </div>
                        }
                    <input {...controller(name, {
                            required:require ? true : false
                        }
                        )} type="file" className="border-none p-2 rounded-lg cursor-pointer" accept=".jpg,.jpeg,.png,.svg" onChangeCapture={handleImageUpload} />
                        
                    </div>
                </div>
    )
}