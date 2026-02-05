import { Router } from "express";
import {
  changeForgottenPasswordController,
  loginController,
  logoutController,
  initAppController,
  resendForgottenPasswordEmailController,
  triggerForgottenPasswordController,
  retrieveCurrentUserContextController,
} from "./auth.controller";
import auth from "../../middleware/protectedRoutes";
import { changeforgottenPasswordValidation, forgottenPasswordValidation, authValidation } from "./auth.helper";
import validate from "../../middleware/validationMiddleware";
export const authRouter = Router();
authRouter.post("/auth/init_app", validate(authValidation), initAppController);
authRouter.post("/auth/login", validate(authValidation), loginController);
authRouter.post("/auth/forgotten_password", validate(forgottenPasswordValidation), triggerForgottenPasswordController);
authRouter.get("/auth/current", auth(), retrieveCurrentUserContextController);
authRouter.post("/auth/logout", auth(), logoutController);
authRouter.post(
  "/auth/change_forgotten_password/:code",
  validate(changeforgottenPasswordValidation),
  changeForgottenPasswordController,
);
authRouter.post("/auth/resend/forgotten_password/:email/:language", resendForgottenPasswordEmailController);
