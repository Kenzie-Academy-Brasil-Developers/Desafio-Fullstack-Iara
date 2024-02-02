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
exports.deleteClientController = exports.updateClientController = exports.readClientByIdController = exports.readAllClientController = exports.createClientController = void 0;
const client_service_1 = require("../services/client.service");
const createClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, client_service_1.createClientService)(req.body);
    return res.status(201).json(client);
});
exports.createClientController = createClientController;
const readAllClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clients = yield (0, client_service_1.readAllClientService)();
    return res.status(200).json(clients);
});
exports.readAllClientController = readAllClientController;
const readClientByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const client = yield (0, client_service_1.readClientByIdService)(id);
    return res.json(client);
});
exports.readClientByIdController = readClientByIdController;
const updateClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const newClient = req.body;
    const updateClient = yield (0, client_service_1.updateClientService)(newClient, id);
    return res.json(updateClient);
});
exports.updateClientController = updateClientController;
const deleteClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    yield (0, client_service_1.deleteClientService)(id);
    res.status(204).send();
});
exports.deleteClientController = deleteClientController;
