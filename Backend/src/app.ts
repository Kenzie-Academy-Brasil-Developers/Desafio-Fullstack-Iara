import 'reflect-metadata';
import 'express-async-errors';
import express, {Application, json } from "express";
import cors from 'cors';
import { routes } from './routes';
import { handleErrors } from './middlewares/handleError.middleware';


const app: Application = express();

// Configurar CORS antes de suas rotas
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};
app.use(cors(corsOptions));

app.use(json());

app.use('/', routes);

app.use(handleErrors);


export default app;
