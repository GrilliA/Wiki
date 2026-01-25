import { usePagesQuery } from "@/services/page";
import type { TRootState } from "@/state/store";
import { useSelector } from "react-redux";

export const usePage = () => {
  const token = useSelector((state: TRootState) => state.ui.token);

  const response = usePagesQuery(undefined, {
    skip: !token,
  });

  return response;
};
