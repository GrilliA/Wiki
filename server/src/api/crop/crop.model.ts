import { TOptionResponseData } from "../options/option.model";
import { TRecipeResponseData } from "../recipe/recipe.model";
import { TThreadResponseData } from "../thread/thread.model";

export type TCropRequestData = {
  regime?: number;
  group?: number;
  crop?: number;
  plan?: number;
};

export type TCropResponseData = {
  id: number;
  crop?: TOptionResponseData;
  regime?: TOptionResponseData;
  group?: TOptionResponseData;
  threads?: Array<TThreadResponseData>;
  recipes?: Array<TRecipeResponseData>;
};
