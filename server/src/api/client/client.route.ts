import { Router } from "express";
import auth from "../../middleware/protectedRoutes";
import {
  createClientController,
  deleteClientController,
  deselectClientController,
  getAllClientController,
  getClientController,
  selectClientController,
  updateClientController,
} from "./client.controller";

const clientRouter = Router();

clientRouter.post("/client", auth(), createClientController);
clientRouter.put("/client/:id", auth(), updateClientController);
clientRouter.delete("/client/:id", auth(), deleteClientController);
clientRouter.get("/client/:id", auth(), getClientController);
clientRouter.get("/client", auth(), getAllClientController);
clientRouter.post("/client/select/:id", auth(), selectClientController);
clientRouter.post("/client/deselect/:id", auth(), deselectClientController);

export default clientRouter;
