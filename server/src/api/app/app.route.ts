import { Router } from "express";
import { getAppStateController } from "./app.controller";

const appRouter = Router();
appRouter.get("/", (req, res) => {
  res.render("index.pug");
});
export default appRouter;
