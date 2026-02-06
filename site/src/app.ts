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
  const chokidar = require("chokidar");
  const webpackConfig = require("../webpack.config.ts").default;
  
  const compiler = webpack(webpackConfig);
  
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  
  const hotMiddleware = webpackHotMiddleware(compiler);
  app.use(hotMiddleware);
  
  // Watch for Pug file changes and trigger browser reload
  const viewsPath = path.join(__dirname, "../views");
  
  const watcher = chokidar.watch(viewsPath, {
    ignored: /node_modules/,
    persistent: true,
    ignoreInitial: true,
    usePolling: true,
    interval: 300
  });
  
  watcher.on("ready", () => {
    console.log(`[HMR] Watching view files for changes in: ${viewsPath}`);
  });
  
  watcher.on("all", (event: string, filePath: string) => {
    if (filePath.endsWith(".pug")) {
      console.log(`[HMR] Pug file ${event}: ${filePath}`);
      hotMiddleware.publish({ action: "reload" });
    }
  });
  
  watcher.on("error", (error: Error) => {
    console.error(`[HMR] Watcher error: ${error}`);
  });
}

app.use(express.static(path.join(__dirname, "../public")));
app.get("/", getHomePageController);
