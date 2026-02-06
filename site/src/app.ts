import express from "express";
import path from "path";
import { getHomePageController } from "./controllers/HomePage";

export const app = express();
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "../public")));
app.get("/", getHomePageController);
