import { Router } from "express";

const appRouter = Router();
appRouter.get("/", (req, res) => {
  res.render("index.pug");
});
export default appRouter;
