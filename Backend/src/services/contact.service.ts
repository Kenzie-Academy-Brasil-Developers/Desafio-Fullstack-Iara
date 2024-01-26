import { DeepPartial } from "typeorm";
import { Contact } from "../entities/contact.entity";
import { AppError } from "../errors/appError";
import { ContactCreate, ContactRead, ContactResponse, ContactUpdate} from "../interfaces/contact.interface";
import { repoClient, repoContact } from "../repositories";
import { contactReadSchema, contactSchema } from "../schemas/contact.shema";


export const createContactService = async(data: ContactCreate, id: number): Promise<ContactResponse> => {
    console.log(id)
    const findClient = await repoClient.find({
        where: { id: id },
        relations: ['contacts'],
    });
    console.log(findClient)
    if (!findClient) {
        throw new AppError('Client not found', 404);
    }

    const findContact = findClient[0].contacts.find(
        (elemento) => elemento.email === data.email
    );
    if (findContact) {
        throw new AppError('Contact not found', 404);
    }
    const client = findClient[0];

    const contact = repoContact.create({
        ...data, clients: client!
        
    });

        await repoContact.save(contact);

        return contactSchema.parse(contact);
}

export const readAllContactService = async(): Promise<ContactRead> => {
    const contacts: Contact[] = await repoContact.find({
        relations: { clients: true },
    });
    return contactReadSchema.parse(contacts);
}

export const readContactByIdService = async(id: number ): Promise<ContactResponse> => {
    const contact: Contact[] = await repoContact.find({
        where: {id: id},
        relations: { clients: true },
    });
    if (!contact[0]){
        throw new AppError('Contact not found!', 404);
    }
    return contactSchema.parse(contact[0]);
}

export const updateContactService = async(data: ContactUpdate, contactId: number, clientId: number ): Promise<ContactResponse> => {
    const dataPrevious = await repoContact.findOneBy({id: contactId});

    const contactFind = await repoContact.findOne({
        where: {id: contactId},
        relations: ["clients"]
    });

    const contact: Contact = repoContact.create({
        ...dataPrevious,
        ...data
    })
    await repoContact.save(contact);
    return contactSchema.parse(contact);
}


export const deleteContactService = async(contactId: number, clientId: number ): Promise<void> => {
    const contactFind = await repoContact.findOne({
        where: {id: contactId},
        relations: ["clients"]
    });
    await repoContact.remove(contactFind!);

}

