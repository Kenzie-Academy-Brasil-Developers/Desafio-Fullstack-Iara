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
        formState: {errors},
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
                label="Register"
                type="text" 
                placeholder="UserName" 
                {...register("full_name")}
                error={errors.full_name}
                disabled={loading}
            />
            <Input 
                type="email" 
                placeholder="Email" 
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
            <InputPassword
                placeholder="Create a password"
                {...register("password")}
                error={errors.password}
                disabled={loading}
            />
            <InputPassword
                placeholder="Confirm the Password"
                {...register("confirmPassword")}
                error={errors.confirmPassword}
                disabled={loading}
            />
            <div>
                <Link className="link" to="/">Back Login</Link>
                <button className="btn" type="submit" disabled={loading}>
                    {loading ? "Signing up..." : "Register"}
                </button>
            </div>
        </form>
    );
};

