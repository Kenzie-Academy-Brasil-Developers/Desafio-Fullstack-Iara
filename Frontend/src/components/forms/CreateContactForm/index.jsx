import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { useContext, useState } from "react";
import { ContactContext } from "../../../providers/ContactContext";

export const CreateContactForm = () => {
    const { register, handleSubmit, formState: {errors, isValid, isDirty}, } = useForm();

    const { createContact } = useContext(ContactContext);

    const [loading, setLoading] = useState(false);


    const submit = (formData) => {
        createContact(formData);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input
                type="text" 
                placeholder="Username"
                {...register("full_name")}
                error={errors.full_name}
                disabled={loading}
            />
            <Input 
                type="email" 
                placeholder="E-mail" 
                {...register("email")}
                error={errors.email}
                disabled={loading}
            />
            <Input 
                type="text" 
                placeholder="Telephone"  
                {...register("tel")} 
                error={errors.tel}
                disabled={loading}
            />
            <button 
                className="btn" 
                type="submit" 
                disabled={!isValid || !isDirty}>
                    {loading ? "Salvando..." : "Salvar"}
            </button>
        </form>
    );
};

            