import AuthLayout from "@/src/components/Authentication/Layout";
import FormButton from "@/src/components/Form/FormButton/Index";
import FormInputField from "@/src/components/Form/FormInputField";
import InputPassword from "@/src/components/Form/FormPassword";
import { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Login: NextPage = (props: any) => {
    const {t} = useTranslation('common')

    const { 
        control, 
        register, 
        handleSubmit, 
        getValues, 
        setValue, 
        reset,
        unregister,
        formState: {errors}
      } = useForm({});

    const onSubmit = async (d:any) => {
        console.log(d)
    }; 

    return (
        <AuthLayout title="login">
            <form className="w-fill max-w-sm" onSubmit={handleSubmit(onSubmit)}>
                <p className="my-4">
                    <span>
                        {t("login_message")}
                    </span>
                    <br />
                    <br />
                    <span>
                        {t('no_account_yet')} {' ?'} {' '}
                    </span>
                    <span className="font-bold underline">
                        <Link href={"/authentication/register"}>
                            {t('create_account')}
                        </Link>
                    </span>
                </p>

                <FormInputField 
                      controller={register}
                      type='text' 
                      label='Adresse mail' 
                      name="login" 
                      size='full'
                      require={errors}
                      placeholder='Adresse mail'/> 
                      
                <InputPassword 
                    name ="password"
                    label ="password"
                    size='full'
                    placeholder='password'
                    controller={register} 
                    require={errors}></InputPassword>
                
                <p className="text-center p-3 my-4">
                    <span className="underline">
                        <Link href={"/authentication/forget-password"}>
                            {t('forget_password')}
                        </Link>
                    </span>
                </p>

                <FormButton 
                    label={"Connection"} 
                    color={"primary"} 
                    size={"full"} 
                    type={"submit"}/>

            </form>
        </AuthLayout>
    )
}

export default Login