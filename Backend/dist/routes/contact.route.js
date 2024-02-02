"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRouter = void 0;
const express_1 = require("express");
const contact_controller_1 = require("../controllers/contact.controller");
const globais_middleware_1 = require("../middlewares/globais.middleware");
const contact_shema_1 = require("../schemas/contact.shema");
const contactValidate_middleware_1 = require("../middlewares/contactValidate.middleware");
exports.contactRouter = (0, express_1.Router)();
// contactRouter.use(verifyToken);
exports.contactRouter.post("", globais_middleware_1.verifyToken, (0, globais_middleware_1.validateBody)(contact_shema_1.contactCreateSchema), contact_controller_1.createContactController);
exports.contactRouter.get("", globais_middleware_1.verifyToken, contact_controller_1.readAllContactController);
exports.contactRouter.get("/:id", globais_middleware_1.verifyToken, contactValidate_middleware_1.contactValidation, contact_controller_1.readContactByIdController);
exports.contactRouter.patch("/:id", globais_middleware_1.verifyToken, (0, globais_middleware_1.validateBody)(contact_shema_1.contactUpdateSchema), contactValidate_middleware_1.contactValidation, contact_controller_1.updateContactController);
exports.contactRouter.delete("/:id", globais_middleware_1.verifyToken, contactValidate_middleware_1.contactValidation, contact_controller_1.deleteContactController);