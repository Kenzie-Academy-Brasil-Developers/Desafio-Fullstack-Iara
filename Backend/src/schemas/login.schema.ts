import { clientSchema } from "./client.schema";

export const clientLoginSchema = clientSchema.pick({
    email: true,
    password: true,
})