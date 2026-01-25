import { Response, Request } from "express";
import { createProduct, deleteProduct, getallProducts, getProductById, updateProduct } from "./product.service";
import { getProductReponseData, getProductRequestMapper } from "./product.mapper";

export const getProductController = async (req: Request, res: Response) => {
  const productId = Number(req.params.id);
  const product = await getProductById(productId);
  res.status(200).json({
    data: getProductReponseData(product),
    message: "got product succefully",
  });
};

export const getAllProductController = async (_: Request, res: Response) => {
  const products = await getallProducts();
  res.status(200).json({
    data: products.map(getProductReponseData),
    message: "got all product succefully",
  });
};

export const createProductController = async (req: Request, res: Response) => {
  const data = getProductRequestMapper(req.body);
  const product = await createProduct(data);
  res.status(200).json({
    data: product,
    message: "Create product succefully",
  });
};

export const updateProductController = async (req: Request, res: Response) => {
  const { body } = req;
  const data = getProductRequestMapper(body);
  const productId = Number(req.params.id);
  const location = await updateProduct(productId, data);
  res.status(200).json({
    data: location,
    message: "updated product succefully",
  });
};

export const deleteProductController = async (req: Request, res: Response) => {
  const productId = Number(req.params.id);
  await deleteProduct(productId);
  const allProducts = await getallProducts();
  res.status(200).json({
    data: allProducts.map(getProductReponseData),
    message: "deleted product succefully",
  });
};
