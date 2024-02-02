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
exports.contactValidation = void 0;
const contact_entity_1 = require("../entities/contact.entity");
const data_source_1 = require("../data-source");
const contactValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(contact_entity_1.Contact);
    const contactId = Number(req.params.id);
    const contact = yield contactRepository.findOneBy({
        id: contactId,
    });
    if (!contact) {
        return res.status(404).json({
            message: "Contact not found",
        });
    }
    return next();
});
exports.contactValidation = contactValidation;
