import { authDefaultValues } from "./auth/auth.util";
import type { RootState } from "./stateModel";
import { uiDefaultValues } from "./ui/ui.util";

export const initialState: RootState = {
  ui: uiDefaultValues,
  auth: authDefaultValues,
};
