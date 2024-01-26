
import { z } from "zod";
import { clientLoginSchema } from "../schemas/login.schema";

export type ClientLogin = z.infer<typeof clientLoginSchema>;

export type ClientReturnLogin = { token: string}