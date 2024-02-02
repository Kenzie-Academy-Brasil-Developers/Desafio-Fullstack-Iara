import { clientSchemaRequest, clientSchemaTotalRead, clientSchemaTotalResponse } from './../schemas/client.schema';
import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { clientCreateSchema, clientReadSchema, clientReturnSchema, clientSchema } from "../schemas/client.schema";
import { Client } from "../entities/client.entity";


export type TClient = z.infer<typeof clientSchema>;

export type ClientCreate = z.infer<typeof clientCreateSchema>;

export type ClientRead = z.infer<typeof clientReadSchema>;

export type ClientReadReturn = ClientReturn[];

export type ClientUpdate = DeepPartial<typeof clientSchemaRequest>;

export type ClientReturn = z.infer<typeof clientReturnSchema>

export type RepoClient = Repository<Client>;

export type ClientResponse = z.infer<typeof clientSchemaTotalResponse>;

export type clientSchemaTotalReads = z.infer<
    typeof clientSchemaTotalRead
>;