import { Client } from "../entities/client.entity";
import { AppError } from "../errors/appError";
import { ClientCreate, ClientReadReturn, ClientResponse, ClientReturn, ClientUpdate } from "../interfaces/client.interface";
import { repoClient } from "../repositories";
import { clientReturnListSchema, clientReturnSchema, clientSchemaTotalResponse } from "../schemas/client.schema";

export const createClientService = async(data: ClientCreate): Promise<ClientReturn> => {
    const { email, full_name, password, tel } = data;

    const client: Client = repoClient.create({email, full_name, password, tel});

    await repoClient.save(client);

    return clientReturnSchema.parse(client)

}

export const readAllClientService = async(): Promise<ClientReadReturn> => {
    const clients: Array<Client> = await repoClient.find({
        relations: ["contacts"]
    });
    console.log(clients);
    return clientReturnListSchema.parse(clients);
}

export const readClientByIdService = async(id: number): Promise<ClientResponse> => {
    const client: Client | null = await repoClient.findOne({
        where: { id: id },
        relations: { contacts: true},
    });
    return clientSchemaTotalResponse.parse(client);
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