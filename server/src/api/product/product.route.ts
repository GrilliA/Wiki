import { Router } from "express";
import auth from "../../middleware/protectedRoutes";
import {
  createProductController,
  deleteProductController,
  getAllProductController,
  getProductController,
  updateProductController,
} from "./product.controller";

const productRouter = Router();

productRouter.post("/product", auth(), createProductController);
productRouter.put("/product/:id", auth(), updateProductController);
productRouter.delete("/product/:id", auth(), deleteProductController);
productRouter.get("/product/:id", auth(), getProductController);
productRouter.get("/product", auth(), getAllProductController);

export default productRouter;
