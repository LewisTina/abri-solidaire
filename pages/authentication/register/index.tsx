import AuthLayout from "@/src/components/Authentication/Layout";
import FormButton from "@/src/components/Form/FormButton/Index";
import FormInputField from "@/src/components/Form/FormInputField";
import InputPassword from "@/src/components/Form/FormPassword";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { NextPage } from "next";

interface register {
    text: string
    number?: number
}

const Register: NextPage = (props: any) => {

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
        <AuthLayout title="register">
            <form className="w-fill max-w-sm" onSubmit={handleSubmit(onSubmit)}>
                <p className="my-4">
                    <span>
                        {"Déjà utilisateur"} {' ?'} {' '}
                    </span>
                    <span className="font-bold underline">
                        <Link href={"/authentication/login"}>
                            {"Se connecter"}
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
                      
                <InputPassword 
                    name ="password_confirmation"
                    label ="Confirmation du mot de passe"
                    size='full'
                    placeholder='Confirmation du mot de passe'
                    controller={register} 
                    require={errors}></InputPassword>
                      
                <FormInputField 
                    name ="name"
                    label ="Nom"
                    size='full'
                    placeholder='Votre nom'
                    controller={register} 
                    require={errors}/>

                <FormInputField 
                    name ="Prénom"
                    label ="Nom"
                    size='full'
                    placeholder='Votre Prénom'
                    controller={register} 
                    require={errors}/>

                <FormButton 
                    label={"Connection"} 
                    color={"primary"} 
                    size={"full"} 
                    type={"submit"}>
                        <i className="material-icons">arrow_forward</i>
                </FormButton>

            </form>
        </AuthLayout>

    )
}

export default  Register