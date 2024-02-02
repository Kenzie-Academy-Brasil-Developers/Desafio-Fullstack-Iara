"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContactService = exports.updateContactService = exports.readContactByIdService = exports.readAllContactService = exports.createContactService = void 0;
const appError_1 = require("../errors/appError");
const repositories_1 = require("../repositories");
const contact_shema_1 = require("../schemas/contact.shema");
const createContactService = (data, clientId) => __awaiter(void 0, void 0, void 0, function* () {
    const findClient = yield repositories_1.repoClient.findOne({
        where: { id: clientId },
    });
    if (!findClient) {
        throw new appError_1.AppError('Client not found', 404);
    }
    const findContact = yield repositories_1.repoContact.findOne({
        where: {
            email: data.email, clients: { id: clientId }
        },
    });
    if (findContact) {
        throw new appError_1.AppError('Contact not found', 404);
    }
    const contact = repositories_1.repoContact.create(Object.assign(Object.assign({}, data), { clients: { id: clientId } }));
    yield repositories_1.repoContact.save(contact);
    return contact_shema_1.contactSchema.parse(contact);
});
exports.createContactService = createContactService;
const readAllContactService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield repositories_1.repoContact.find({
        where: { clients: { id } }
    });
    console.log(contacts);
    return contact_shema_1.contactReadSchema.parse(contacts);
});
exports.readAllContactService = readAllContactService;
const readContactByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const contact = yield repositories_1.repoContact.find({
        where: { id: id },
        relations: { clients: true },
    });
    if (!contact[0]) {
        throw new appError_1.AppError('Contact not found!', 404);
    }
    return contact_shema_1.contactSchema.parse(contact[0]);
});
exports.readContactByIdService = readContactByIdService;
const updateContactService = (data, contactId, clientId) => __awaiter(void 0, void 0, void 0, function* () {
    const dataPrevious = yield repositories_1.repoContact.findOneBy({ id: contactId });
    const contactFind = yield repositories_1.repoContact.findOne({
        where: { id: contactId },
        relations: ["clients"]
    });
    const contact = repositories_1.repoContact.create(Object.assign(Object.assign({}, dataPrevious), data));
    yield repositories_1.repoContact.save(contact);
    return contact_shema_1.contactSchema.parse(contact);
});
exports.updateContactService = updateContactService;
const deleteContactService = (contactId, clientId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactFind = yield repositories_1.repoContact.findOne({
        where: { id: contactId },
        relations: ["clients"]
    });
    yield repositories_1.repoContact.remove(contactFind);
});
exports.deleteContactService = deleteContactService;
