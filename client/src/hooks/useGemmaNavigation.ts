import { TPageEntity } from "@/helper/getEntityRoute";
import { useNavigate } from "react-router-dom";
type TNewOption = Record<string, string>;
export const useGemmaNavigation = (entity: TPageEntity) => {
  const push = useNavigate();
  return {
    goToNew: () => {
      push(`/${entity}/new`);
    },
    goToEdit: (id: number | string) => push(`/${entity}/edit/${id}`),
    goToPageDetail: (id: number | string) => push(`/${entity}/${id}`),
    goToPage: (params: TNewOption = {}) => {
      const paramsAsString = Object.entries(params).reduce((acc, curr, i) => {
        const [key, value] = curr;
        if (!i) {
          return `${acc}${key}=${value}`;
        }

        return `${acc}&${key}=${value}`;
      }, "?");

      push(`/${entity}${paramsAsString}`);
    },
  };
};
