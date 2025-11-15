import { useCurrentUserQuery } from "@/services/auth";
import type { TRootState } from "@/state/store";
import { useSelector } from "react-redux";

export const useUser = () => {
  const token = useSelector((state: TRootState) => state.ui.token);
  const response = useCurrentUserQuery(undefined, {
    skip: !token,
  });
  return response;
};
