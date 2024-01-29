import { useForm } from "react-hook-form"
import { Link} from "react-router-dom";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "./registerFormSchema";
import { InputPassword } from "../InputPassword";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
    const { 
        register, 
        handleSubmit,
        formState: {errors, isValid, isDirty},
    } = useForm({
        resolver: zodResolver(registerFormSchema),
    });


    const [loading, setLoading] = useState(false);

    const { userRegister} = useContext(UserContext);

    const submit = (formData) => {
        userRegister(formData, setLoading);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input 
                label="Seu nome completo" 
                type="text" 
                placeholder="Digite seu nome" 
                {...register("full_name")}
                error={errors.full_name}
                disabled={loading}
            />
            <Input 
                label="Seu e-mail" 
                type="email" 
                placeholder="Digite seu e-mail" 
                {...register("email")}
                error={errors.email}
                disabled={loading}
            />
            <Input 
                label="Seu telefone" 
                type="text" 
                placeholder="Digite seu telefone"  
                {...register("tel")} 
                error={errors.tel}
                disabled={loading}
            />
            <InputPassword
                label="Crie uma senha"
                {...register("password")}
                error={errors.password}
                disabled={loading}
            />
            <InputPassword
                label="Confirme a senha"
                {...register("confirmPassword")}
                error={errors.confirmPassword}
                disabled={loading}
            />
            <div>
                <Link to="/login">Voltar</Link>
                <button type="submit" disabled={!isValid || !isDirty}>
                    {loading ? "Cadastrando..." : "Cadastrar"}
                </button>
            </div>
        </form>
    )
}

