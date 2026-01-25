import { Router } from "express";
import { mockData } from "./test.mock";

export const testRouter = Router();

testRouter.get("/test", (req, res) => {
  res.json({ data: mockData, message: "Got test data successfully" });
});
