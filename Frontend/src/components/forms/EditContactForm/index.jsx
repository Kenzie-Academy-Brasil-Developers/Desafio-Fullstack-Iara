import { useForm } from "react-hook-form"
import { Input } from "../Input"
import {  useContext, useState } from "react";
import { ContactContext } from "../../../providers/ContactContext";

export const EditContactForm = () => {
    const { editingContact, editScrap } = useContext(ContactContext);
    const { 
        register, 
        handleSubmit, 
        formState: 
        {errors, isValid, isDirty},
    } = useForm({
        values: {
            full_name: editingContact.full_name,
            email: editingContact.email,
            tel: editingContact.tel,
        }
    });


    const [loading, setLoading] = useState(false);


    const submit = (formData) => {
        editScrap(formData);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Digite nome e sobre nome"
                type="text" 
                placeholder="Nome do contato"
                {...register("full_name")}
                error={errors.full_name}
                disabled={loading}
            />
            <Input 
                label="Digite o e-mail" 
                type="email" 
                placeholder="Digite o e-mail" 
                {...register("email")}
                error={errors.email}
                disabled={loading}
            />
            <Input 
                label="Digite o telefone" 
                type="text" 
                placeholder="Digite o telefone"  
                {...register("tel")} 
                error={errors.tel}
                disabled={loading}
            />
            
            <button className="btn solid" type="submit" disabled={!isValid || !isDirty}>{loading ? "Editando..." : "Editar"}</button>

        </form>
    )
}