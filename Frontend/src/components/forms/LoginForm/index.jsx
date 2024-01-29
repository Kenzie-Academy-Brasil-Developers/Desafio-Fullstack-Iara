import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod"
import { InputPassword } from "../InputPassword";
import { loginFormSchema } from "./loginFormShema";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

export const LoginForm = () => {
    const { 
        register, 
        handleSubmit, 
        formState: {errors},
        reset
    } = useForm({
        resolver: zodResolver(loginFormSchema),
    });

    const [loading, setLoading] = useState(false);

    const { userLogin } = useContext(UserContext);

    const submit = (formData) => {
        userLogin(formData,  setLoading, reset);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input 
                label="Seu e-mail" 
                type="email" 
                placeholder="Digite seu e-mail" 
                {...register("email")}
                error={errors.email}
                disabled={loading}
            />
            <InputPassword
                label="Digite a senha"
                {...register("password")}
                error={errors.password}
                disabled={loading}
            />
            <div>
                <Link to="/clients" disabled={loading}>Cadastre-se</Link>
                <button type="submit" disabled={loading}>
                    {loading ? "Acessando..." : "Acessar contatos"}</button>
            </div>
        </form>
    )
}
