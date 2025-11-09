import type { AuthModel } from "./auth/auth.model";
import type { UiModel } from "./ui/ui.model";

export type RootState = {
  ui: UiModel;
  auth: AuthModel;
};

export type Action = {
  type: string;
  payload?: any;
};
