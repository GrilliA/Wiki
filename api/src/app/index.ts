import appRouter from "./app/app.route";
import { authRouter } from "./auth/auth.route";
import userRouter from "./user/user.route";

export const apiRoutes = [appRouter, authRouter, userRouter];
