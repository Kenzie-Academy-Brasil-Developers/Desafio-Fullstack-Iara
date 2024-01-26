import { AppDataSource } from "./data-source";
import { Client } from "./entities/client.entity"; 
import { Contact } from "./entities/contact.entity";
import { RepoClient } from "./interfaces/client.interface";
import { RepoContact } from "./interfaces/contact.interface";


export const repoClient: RepoClient  = AppDataSource.getRepository(Client)

export const repoContact: RepoContact  = AppDataSource.getRepository(Contact)
