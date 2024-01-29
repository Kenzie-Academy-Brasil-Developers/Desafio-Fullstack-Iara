import { z } from "zod";

export const registerFormSchema = z.object({
    full_name: z.string().nonempty("O nome completo é obrigatório"),
    email: z.string().nonempty("O e-mail é obrigatório").email("Forneça um e-mail válido"),
    tel: z.string().nonempty("O telefone é obrigatório"),
    password: z.string()
        .nonempty("A senha é obrigatória")
        .min(8, "São necessários pelo menos oito caracteres")
        .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula")
        .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula")
        .regex(/[0-9]+/, "É necessário conter pelo menos um número"),
    confirmPassword: z.string().nonempty("Confirmar a senha é obrigatória")
}).refine(({password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"]
});