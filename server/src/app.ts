import express from "express";
import cors from "cors";
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
import generalRouter from "./api/general/general.route";
import commentRouter from "./api/comment/comment.route";

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
// Initialize client.
const redisClient = createClient({
  url: "redis://localhost:6379",
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
    origin: ["http://localhost:3000"],
    credentials: true,
  }),
);
app.use(morganMiddleware);
app.use(formatResponse);
app.use("/", authRouter, userRouter, appRouter, generalRouter, optionRouter, commentRouter);
app.use(errorHandlingMiddleware);
