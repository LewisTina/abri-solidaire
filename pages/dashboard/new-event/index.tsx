import { useForm } from "react-hook-form";
import Dashboard from "..";
import FormInputField from "@/src/components/Form/FormInputField";
import FormButton from "@/src/components/Form/FormButton/Index";
import FormTextAreaField from "@/src/components/Form/FormTextAreaField";
import FormUploadFile from "@/src/components/Form/FormUploadFile";

export default function CreateEvent(props: any) {
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
    return(
        <Dashboard>
            
            <div className="flex justify-center p-4" style={{width: "calc(100% - 15rem)"}}>

                <form className="w-3/4 bg-gray-100 dark:bg-slate-900 rounded-lg p-8 flex flex-col items-center  overflow-auto" onSubmit={handleSubmit(onSubmit)}>
                    
                        <span className="font-bold block text-center text-4xl pb-8">
                            Ajouter un Evênement
                        </span>

                    <div className="w-96">
                    <FormInputField 
                        controller={register}
                        type='text' 
                        label="Titre de l'annonce" 
                        name="title" 
                        size='full'
                        require={errors}
                        placeholder="Titre de l'annonce"/> 
                        
                    <FormInputField 
                        name ="startDate"
                        label ="Date de début"
                        type="date"
                        size='full'
                        controller={register} 
                        require={errors}/>

                    <FormInputField 
                        name ="endDate"
                        label ="Date de fin"
                        type="date"
                        size='full'
                        controller={register} 
                        require={errors}/>

                    <FormInputField 
                        name ="location"
                        label ="Lieu de l'évènement"
                        size='full'
                        controller={register} />

                    <FormTextAreaField 
                        name ="description"
                        label ="Description de l'évênement"
                        size='full'
                        controller={register} />

                    <FormUploadFile
                        controller={register} 
                        name={"image"} 
                        valueSetter={setValue}/>

                        <FormButton 
                            label={"Connection"} 
                            color={"primary"} 
                            size={"full"} 
                            type={"submit"}>
                                <i className="material-icons">arrow_forward</i>
                        </FormButton>
                    </div>

                </form>
            </div>
            
        </Dashboard>
    )
}