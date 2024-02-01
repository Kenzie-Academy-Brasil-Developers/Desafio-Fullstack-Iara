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
                label="Login" 
                type="email" 
                placeholder="E-mail" 
                {...register("email")}
                error={errors.email}
                disabled={loading}
            />
            <InputPassword
                {...register("password")}
                placeholder="PassWord" 
                error={errors.password}
                disabled={loading}
            />
            <div>
                <Link className="link" to="/clients" disabled={loading}>Register</Link>
                <button className="btn" type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Submit"}</button>
            </div>
        </form>
    );
};
