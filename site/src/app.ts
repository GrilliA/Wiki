import express from "express";
import path from "path";
import { getHomePageController } from "./controllers/HomePage";

export const app = express();
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

// Webpack middleware for development (hot module replacement)
if (process.env.NODE_ENV === "development") {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpackConfig = require("../webpack.config.ts").default;
  
  const compiler = webpack(webpackConfig);
  
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  
  // HMR with reload=true will auto-reload when server restarts (e.g., on Pug file changes)
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, "../public")));
app.get("/", getHomePageController);
