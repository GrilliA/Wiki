import { Response, Request } from "express";
import logger from "../../helper/logger";
import { createPlan, deletePlan, getAllPlan, getPlan, isPlanSameYear, updatePlan } from "./plan.service";

export const createPlanController = async (req: Request, res: Response) => {
  const data = req.body;
  const clientId = req.session.user?.clientId;
  const isSameYear = await isPlanSameYear(clientId, { year: data?.year });
  if (isSameYear) {
    res.status(400).json({
      message: "Il piano culturale di quest'anno e' gia' stato creato!",
    });
    return;
  }
  const plan = await createPlan(data, clientId);
  res.status(200).json({
    data: plan,
    message: "created plan succefully",
  });
};

export const updatePlanController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = Number(req.params.id);
  const clientId = req.session.user?.clientId;
  const isSameYear = await isPlanSameYear(clientId, { year: data?.year, id });
  if (isSameYear) {
    res.status(400).json({
      message: "Il piano culturale di quest'anno e' gia' stato creato!",
    });
    return;
  }
  const plan = await updatePlan(id, data, clientId);
  res.status(200).json({
    data: plan,
    message: "updated plan succefully",
  });
};

export const getPlanController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const clientId = req.session.user?.clientId;
  const plan = await getPlan(id, clientId);
  res.status(200).json({
    data: plan,
    message: "retrieved plan succefully",
  });
};

export const getAllPlanController = async (req: Request, res: Response) => {
  const clientId = req.session.user?.clientId;
  const plan = await getAllPlan(clientId);
  res.status(200).json({
    data: plan,
    message: "retrieved plan succefully",
  });
};

export const deletePlanController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const clientId = req.session.user?.clientId;
  const plan = await deletePlan(id, clientId);
  res.status(200).json({
    data: plan,
    message: "deleted crop succefully",
  });
};
