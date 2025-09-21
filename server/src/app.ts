import express from "express";
import cors from "cors";
import formatResponse from "./middleware/formatResponse";
import morganMiddleware from "./middleware/logMiddleware";
import errorHandlingMiddleware from "./middleware/errorHandlingMiddleware";

export const app = express();
app.use(
  express.json({
    limit: "50mb",
  }),
);

app.use();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  }),
);
app.use(morganMiddleware);
app.use(formatResponse);
// app.use("/" );
app.use(errorHandlingMiddleware);
