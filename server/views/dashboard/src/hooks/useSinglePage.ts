import { useSinglePageQuery } from "@/services/page";
import type { TRootState } from "@/state/store";
import { useSelector } from "react-redux";

export const useSinglePage = (id: number) => {
  const token = useSelector((state: TRootState) => state.ui.token);

  const response = useSinglePageQuery(
    {
      id,
    },
    {
      skip: !token || !id,
    },
  );

  return response;
};
