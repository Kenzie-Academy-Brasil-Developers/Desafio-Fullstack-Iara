import { Router } from "express";
import { loginRouter } from "./login.route";
import { clientRouter } from "./client.route";
import { contactRouter } from "./contact.route";

export const routes: Router = Router();
routes.use("/clients", clientRouter );
routes.use("/login", loginRouter);
routes.use("/contacts", contactRouter);
