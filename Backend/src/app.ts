import 'reflect-metadata';
import 'express-async-errors';
import express, {Application, json } from "express";
import cors from 'cors';
import { routes } from './routes';
import { handleErrors } from './middlewares/handleError.middleware';


const app: Application = express();

const corsOptions = {
    origin:  ["http://localhost:5173" , "https://frontend-omega-rouge.vercel.app"],
    credentials: true,
};
app.use(cors(corsOptions));

app.use(json());

app.use('/', routes);

app.use(handleErrors);


export default app;
