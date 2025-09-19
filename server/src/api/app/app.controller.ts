import { Request, Response } from "express";
import { getIsAppInit } from "./app.service";

export const getAppStateController = async (req: Request, res: Response) => {
  const isAppInit = await getIsAppInit();
  globalThis.wikiState = {
    ...globalThis.wikiState,
    isAppInit,
  };
  res.status(200).json({
    message: "Lo stato dell'app e' stato rivenuto con successo",
    data: globalThis.wikiState,
  });
};
