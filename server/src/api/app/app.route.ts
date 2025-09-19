import { Router } from "express";
import { getAppStateController } from "./app.controller";

const appRouter = Router();
appRouter.get("/app", getAppStateController);
export default appRouter;
