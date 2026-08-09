import express from "express";
import cors from "cors";
import formatResponse from "./middleware/formatResponse";
import session from "express-session";
import { CORS_WHITELIST } from "./helper/constants";
import errorHandlingMiddleware from "./middleware/errorHandlingMiddleware";
import { authSessionOptions } from "./session";
import { apiRoutes } from "./app/index";

export const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(session(authSessionOptions));
app.use(cors({ origin: CORS_WHITELIST, credentials: true }));
app.use(formatResponse);
app.use("/", ...apiRoutes);
app.use(errorHandlingMiddleware);
