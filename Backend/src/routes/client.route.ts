import { Router } from "express";
import { validateBody, verifyToken } from "../middlewares/globais.middleware";
import { clientCreateSchema, clientUpdateSchema } from "../schemas/client.schema";
import { clientValidation, verifyUniqueClientEmail } from "../middlewares/client.middleware";
import { createClientController, deleteClientController, readAllClientController, readClientByIdController, updateClientController } from "../controllers/client.controller";
import { verifyPermissions } from "../middlewares/verifyPermission.middleware";

export const clientRouter: Router = Router();

clientRouter.post("/",
    validateBody(clientCreateSchema),
    verifyUniqueClientEmail,
    createClientController
    );

clientRouter.use(verifyToken)

clientRouter.get("/", readAllClientController);

clientRouter.get("/:id", clientValidation, readClientByIdController );

clientRouter.patch("/:id", 
    validateBody(clientUpdateSchema),
    clientValidation,
    verifyPermissions, 
    updateClientController
    );

clientRouter.delete("/:id", 
    clientValidation, 
    verifyPermissions, 
    deleteClientController
    );