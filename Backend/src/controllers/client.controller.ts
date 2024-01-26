import { Request, Response } from "express";
import { ClientReturn, ClientUpdate } from "../interfaces/client.interface";
import { createClientService, deleteClientService, readAllClientService, readClientByIdService, updateClientService } from "../services/client.service";

export const createClientController = async (req: Request, res: Response): Promise<Response> => {
    const client: ClientReturn = await createClientService(req.body);
    return res.status(201).json(client);

}

export const readAllClientController = async (req: Request, res: Response): Promise<Response> => {
    const clients = await readAllClientService();

    return res.status(200).json(clients)
}

export const readClientByIdController = async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const client = await readClientByIdService(id);

    return res.json(client);
};

export const updateClientController = async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const newClient: ClientUpdate = req.body;
    const updateClient = await updateClientService(newClient, id);

    return res.json(updateClient);
};

export const deleteClientController = async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    await deleteClientService(id);

    res.status(204).send();
}