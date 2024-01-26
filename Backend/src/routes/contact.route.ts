import { Router } from "express";
import { createContactController, deleteContactController, readAllContactController, readContactByIdController, updateContactController } from "../controllers/contact.controller";
import { validateBody, verifyToken } from "../middlewares/globais.middleware";
import { contactCreateSchema, contactUpdateSchema } from "../schemas/contact.shema";
import { verifyPermissions } from "../middlewares/verifyPermission.middleware";
import { dateValidation } from "../middlewares/dataValidate.middleware";
import { readAllClientController } from "../controllers/client.controller";
import { contactValidation } from "../middlewares/contactValidate.middleware";

export const contactRouter = Router();


contactRouter.use(verifyToken);
contactRouter.post("",validateBody(contactCreateSchema), createContactController);
contactRouter.get("", readAllContactController);


// contactRouter.use("/:id", contactValidation);
contactRouter.get("/:id",contactValidation, readContactByIdController);
contactRouter.patch("/:id", validateBody(contactUpdateSchema), contactValidation
, updateContactController );
contactRouter.delete("/:id", contactValidation, deleteContactController);

