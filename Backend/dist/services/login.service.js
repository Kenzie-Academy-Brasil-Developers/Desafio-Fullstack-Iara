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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = void 0;
const appError_1 = require("../errors/appError");
const repositories_1 = require("../repositories");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = data;
    const client = yield repositories_1.repoClient.findOne({
        where: {
            email
        }
    });
    if (!client)
        throw new appError_1.AppError("Invalid credentials", 403);
    const comparePass = yield (0, bcryptjs_1.compare)(data.password, client.password);
    if (!comparePass)
        throw new appError_1.AppError("Invalid credentials", 403);
    const token = jsonwebtoken_1.default.sign({ email: client.email }, process.env.SECRET_KEY, { subject: client.id.toString(), expiresIn: process.env.EXPIRES_IN });
    return { token: token, client: {
            email: client.email, full_name: client.full_name, id: client.id
        }
    };
});
exports.loginService = loginService;
