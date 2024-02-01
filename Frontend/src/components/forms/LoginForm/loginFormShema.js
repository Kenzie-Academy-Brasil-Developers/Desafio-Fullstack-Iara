import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().nonempty("Email is mandatory!"),
    password: z.string()
        .nonempty("Password is mandatory!")
});