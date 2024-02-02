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
exports.deleteClientService = exports.updateClientService = exports.readClientByIdService = exports.readAllClientService = exports.createClientService = void 0;
const appError_1 = require("../errors/appError");
const repositories_1 = require("../repositories");
const client_schema_1 = require("../schemas/client.schema");
const createClientService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, full_name, password, tel } = data;
    const client = repositories_1.repoClient.create({ email, full_name, password, tel });
    yield repositories_1.repoClient.save(client);
    return client_schema_1.clientReturnSchema.parse(client);
});
exports.createClientService = createClientService;
const readAllClientService = () => __awaiter(void 0, void 0, void 0, function* () {
    const clients = yield repositories_1.repoClient.find({
        relations: ["contacts"]
    });
    console.log(clients);
    return client_schema_1.clientReturnListSchema.parse(clients);
});
exports.readAllClientService = readAllClientService;
const readClientByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield repositories_1.repoClient.findOne({
        where: { id: id },
        relations: { contacts: true },
    });
    return client_schema_1.clientSchemaTotalResponse.parse(client);
});
exports.readClientByIdService = readClientByIdService;
const updateClientService = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const dataPrevious = yield repositories_1.repoClient.findOneBy({ id: id });
    const client = repositories_1.repoClient.create(Object.assign(Object.assign({}, dataPrevious), data));
    yield repositories_1.repoClient.save(client);
    return client_schema_1.clientReturnSchema.parse(client);
});
exports.updateClientService = updateClientService;
const deleteClientService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield repositories_1.repoClient.findOneBy({ id: id });
    if (!client) {
        throw new appError_1.AppError("Client not found", 404);
    }
    yield repositories_1.repoClient.remove(client);
});
exports.deleteClientService = deleteClientService;
