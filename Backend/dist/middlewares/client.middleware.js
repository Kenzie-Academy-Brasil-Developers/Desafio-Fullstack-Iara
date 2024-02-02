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
exports.clientValidation = exports.verifyUniqueClientEmail = void 0;
const appError_1 = require("../errors/appError");
const repositories_1 = require("../repositories");
const verifyUniqueClientEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const client = yield repositories_1.repoClient.findOneBy({ email });
    if (client)
        throw new appError_1.AppError("Email already exists", 409);
    return next();
});
exports.verifyUniqueClientEmail = verifyUniqueClientEmail;
const clientValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = Number(req.params.id);
    const client = yield repositories_1.repoClient.findOne({
        where: {
            id: clientId,
        },
    });
    if (!client) {
        return res.status(404).json({
            message: "Client not found!",
        });
    }
    return next();
});
exports.clientValidation = clientValidation;
