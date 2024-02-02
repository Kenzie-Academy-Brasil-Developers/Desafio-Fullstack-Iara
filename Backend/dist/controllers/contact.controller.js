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
exports.deleteContactController = exports.updateContactController = exports.readContactByIdController = exports.readAllContactController = exports.createContactController = void 0;
const contact_service_1 = require("../services/contact.service");
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = res.locals.clientId;
    const contact = yield (0, contact_service_1.createContactService)(req.body, clientId);
    return res.status(201).json(contact);
});
exports.createContactController = createContactController;
const readAllContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield (0, contact_service_1.readAllContactService)(res.locals.clientId);
    return res.json(contacts);
});
exports.readAllContactController = readAllContactController;
const readContactByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const contact = yield (0, contact_service_1.readContactByIdService)(id);
    return res.json(contact);
});
exports.readContactByIdController = readContactByIdController;
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = Number(req.params.id);
    const clientId = Number(res.locals.clientId);
    const update = req.body;
    const updateContact = yield (0, contact_service_1.updateContactService)(update, contactId, clientId);
    return res.json(updateContact);
});
exports.updateContactController = updateContactController;
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = Number(req.params.id);
    const clientId = Number(res.locals.clientId);
    yield (0, contact_service_1.deleteContactService)(contactId, clientId);
    res.status(200).send();
});
exports.deleteContactController = deleteContactController;
