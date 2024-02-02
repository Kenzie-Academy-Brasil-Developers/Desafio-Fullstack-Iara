"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const data_source_1 = require("./data-source");
const PORT = Number(process.env.PORT) || 3000;
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Server is running');
    app_1.default.listen(PORT, () => console.log('Servidor executando'));
})
    .catch((err) => {
    console.error('Error during Data Source initialization', err);
});
