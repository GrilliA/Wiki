import express from "express";
import path from "path";
import { getHomePageController } from "./controllers/HomePage";
import type { ViteDevServer } from "vite";

export const app = express();
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

if (process.env.NODE_ENV === "development") {
  const { createServer } = require("vite");
  
  createServer({
    root: path.join(__dirname, "../views/scripts"),
    base: "/dist/",
    server: {
      middlewareMode: true
    },
    appType: "custom"
  }).then((vite: ViteDevServer) => {
    app.use(vite.middlewares);
  });
}

app.use(express.static(path.join(__dirname, "../public")));
app.get("/", getHomePageController);
