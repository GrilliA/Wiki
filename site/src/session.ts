import RedisStore from "connect-redis";
import { createClient } from "redis";
import logger from "./helper/logger";
import { TOKEN_SECRET, MAX_AGE } from "./helper/constants";

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

export const authSessionOptions = {
  store: redisStore,
  resave: true, // required: force lightweight session keep alive (touch)
  saveUninitialized: false, // recommended: only save session when data exists
  secret: TOKEN_SECRET!,
  cookie: {
    maxAge: MAX_AGE,
  },
};
