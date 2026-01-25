import express from "express";
import cors from "cors";
import path from "path";
import formatResponse from "./middleware/formatResponse";
import { authRouter } from "./api/auth/auth.route";
import userRouter from "./api/user/user.route";
import morganMiddleware from "./middleware/logMiddleware";
import RedisStore from "connect-redis";
import session from "express-session";
import { createClient } from "redis";
import { MAX_AGE, TOKEN_SECRET } from "./helper/constants";
import logger from "./helper/logger";
import errorHandlingMiddleware from "./middleware/errorHandlingMiddleware";
import appRouter from "./api/app/app.route";
import optionRouter from "./api/options/option.route";
import clientRouter from "./api/client/client.route";
import generalRouter from "./api/general/general.route";
import groupRouter from "./api/group/group.route";
import planRouter from "./api/plan/plan.route";
import { testRouter } from "./api/test/test.route";
import cropRouter from "./api/crop/crop.route";
import recipeRouter from "./api/recipe/recipe.route";
import productRouter from "./api/product/product.route";
import commentRouter from "./api/comment/comment.route";
import threadRouter from "./api/thread/thread.route";
import likeRouter from "./api/like/like.route";

declare module "express-session" {
  interface SessionData {
    user: {
      id: string;
      role: number;
      status: number;
      clientId?: number;
    };
  }
}

export const app = express();

// View engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));

// Initialize client.
const redisClient = createClient({
  url:
    process.env.NODE_ENV === "development"
      ? "redis://redis:6379"
      : "redis://localhost:6379",
});
redisClient.connect().catch(logger.error);

const redisStore = new RedisStore({
  client: redisClient,
  prefix: "eventus:",
});

app.use(
  express.json({
    limit: "50mb",
  }),
);

app.use(
  session({
    store: redisStore,
    resave: true, // required: force lightweight session keep alive (touch)
    saveUninitialized: false, // recommended: only save session when data exists
    secret: TOKEN_SECRET!,
    cookie: {
      maxAge: MAX_AGE,
    },
  }),
);
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://agrogemma.com",
      "http://www.agrogemma.com",
      "https://agrogemma.com",
      "https://www.agrogemma.com",
    ],
    credentials: true,
  }),
);
app.use(morganMiddleware);
app.use(formatResponse);
app.use(
  "/",
  authRouter,
  userRouter,
  appRouter,
  generalRouter,
  groupRouter,
  optionRouter,
  clientRouter,
  planRouter,
  testRouter,
  cropRouter,
  recipeRouter,
  productRouter,
  threadRouter,
  commentRouter,
  likeRouter,
);
app.use(errorHandlingMiddleware);
