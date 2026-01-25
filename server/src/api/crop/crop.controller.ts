import { Response, Request } from "express";
import { createCrop, deleteCrop, getallCrops, getCropById, updateCrop } from "./crop.service";
import { getCropReponseData, getCropRequestMapper } from "./crop.mapper";

export const getCropController = async (req: Request, res: Response) => {
  const cropId = Number(req.params.id);
  const crop = await getCropById(cropId);
  res.status(200).json({
    data: getCropReponseData(crop),
    message: "got crop succefully",
  });
};

export const getAllCropController = async (_: Request, res: Response) => {
  const crops = await getallCrops();
  res.status(200).json({
    data: crops.map(getCropReponseData),
    message: "got all crop succefully",
  });
};

export const createCropController = async (req: Request, res: Response) => {
  const data = getCropRequestMapper(req.body);
  const crop = await createCrop(data);
  res.status(200).json({
    data: crop,
    message: "Create crop succefully",
  });
};

export const updateCropController = async (req: Request, res: Response) => {
  const { body } = req;
  const data = getCropRequestMapper(body);
  const cropId = Number(req.params.id);
  const location = await updateCrop(cropId, data);
  res.status(200).json({
    data: location,
    message: "updated crop succefully",
  });
};

export const deleteCropController = async (req: Request, res: Response) => {
  const cropId = Number(req.params.id);
  await deleteCrop(cropId);
  const allCrops = await getallCrops();
  res.status(200).json({
    data: allCrops.map(getCropReponseData),
    message: "deleted crop succefully",
  });
};
