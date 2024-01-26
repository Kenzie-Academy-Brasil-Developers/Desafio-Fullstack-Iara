import { Client } from "../entities/client.entity";
import { AppError } from "../errors/appError";
import { ClientCreate, ClientReadReturn, ClientResponse, ClientReturn, ClientUpdate } from "../interfaces/client.interface";
import { repoClient } from "../repositories";
import { clientReturnListSchema, clientReturnSchema, clientSchemaTotalResponse } from "../schemas/client.schema";

export const createClientService = async(data: ClientCreate): Promise<ClientReturn> => {
    const client: Client = repoClient.create(data);

    await repoClient.save(client);
    return clientReturnSchema.parse(client)

}

export const readAllClientService = async(): Promise<ClientReadReturn> => {
    const clients: Client[] = await repoClient.find();
    return clientReturnListSchema.parse(clients);
}

export const readClientByIdService = async(id: number): Promise<ClientResponse> => {
    const client: Client[] | null = await repoClient.find({
        where: { id: id },
        relations: { contacts: true},
    });
    return clientSchemaTotalResponse.parse(client[0]);
}

export const updateClientService = async(data: ClientUpdate, id: number): Promise<ClientReturn> => {

    const dataPrevious = await repoClient.findOneBy({id: id});
    const client: Client = repoClient.create({
        ...dataPrevious,
        ...data
    });

    await repoClient.save(client);
    return clientReturnSchema.parse(client);

}

export const deleteClientService = async(id: number): Promise<void> => {
    const client: Client | null = await repoClient.findOneBy({id: id});

    if(!client){
        throw new AppError("Client not found", 404);
    }
    await repoClient.remove(client);
};