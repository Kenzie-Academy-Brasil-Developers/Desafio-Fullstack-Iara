"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repoContact = exports.repoClient = void 0;
const data_source_1 = require("./data-source");
const client_entity_1 = require("./entities/client.entity");
const contact_entity_1 = require("./entities/contact.entity");
exports.repoClient = data_source_1.AppDataSource.getRepository(client_entity_1.Client);
exports.repoContact = data_source_1.AppDataSource.getRepository(contact_entity_1.Contact);
