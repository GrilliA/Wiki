import { AuthModel } from "./auth/auth.model";
import { UiModel } from "./ui/ui.model";

export type RootState = {
  ui: UiModel;
  auth: AuthModel;
};

export type Action = {
  type: string;
  payload?: any;
};
