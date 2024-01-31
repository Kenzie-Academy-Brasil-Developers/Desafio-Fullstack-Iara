import { sign } from "jsonwebtoken";
import { AppError } from "../errors/appError";
import { ClientLogin, ClientReturnLogin } from "../interfaces/login.interface";
import { repoClient } from "../repositories";
import { compare } from "bcryptjs";
import { Client } from "../entities/client.entity";
import jwt from "jsonwebtoken";

export const loginService = async(data: ClientLogin): Promise<ClientReturnLogin> => {
    
    const {email} = data;

    const client: Client | null = await repoClient.findOne({ 
        where: { 
            email
        }
    });

    if (!client) throw new AppError("Invalid credentials", 403);

    const comparePass = await compare(data.password, client.password);

    if (!comparePass) throw new AppError("Invalid credentials", 403);

    const token: string = jwt.sign(
        {email: client.email},
        process.env.SECRET_KEY!,
        {subject: client.id.toString(), expiresIn: process.env.EXPIRES_IN!}
        
    )
    return{token: token, client: {
        email: client.email, full_name: client.full_name, id: client.id} 
    }
}