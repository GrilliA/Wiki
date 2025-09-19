import { Request, Response } from "express";
import { getCap, getComuni, getProvince, getRegions } from "./general.service";

export const getRegionsController = async (req: Request, res: Response) => {
  const users = await getRegions();
  res.status(200).json({ message: "retrieved all regions", data: users });
};
export const getProvinceController = async (req: Request, res: Response) => {
  const regionCode = req.params.region;
  const province = await getProvince(regionCode);
  res.status(200).json({ message: "retrieved province", data: province });
};
export const getComuniController = async (req: Request, res: Response) => {
  const provinceCode = req.params.province;
  const comuni = await getComuni(provinceCode);
  res.status(200).json({ message: "retrieved comuni", data: comuni });
};
export const getCapController = async (req: Request, res: Response) => {
  const istatCode = req.params.comune;
  const cap = await getCap(istatCode);
  res.status(200).json({ message: "retrieved cap", data: cap });
};
