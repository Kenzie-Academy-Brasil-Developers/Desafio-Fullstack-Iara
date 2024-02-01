import { z } from "zod";

export const registerFormSchema = z.object({
    full_name: z.string().nonempty("Full name is mandatory!"),
    email: z.string().nonempty("Email is mandatory!").email("Provide a valid email!"),
    tel: z.string().nonempty("Telephone is mandatory").regex(/\d{3}-\d{4}/, "Provide a valid phone number format(ex: 123-4567)"),
    password: z
        .string()
        .nonempty("Password is mandatory!")
        .min(8, "At least eight characters are required")
        .regex(/[A-Z]+/, "It must contain at least one capital letter")
        .regex(/[a-z]+/, "It must contain at least one lowercase letter")
        .regex(/[0-9]+/, "It must contain at least one number"),
    confirmPassword: z.string().nonempty("Confirming the password is mandatory")
}).refine(({password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});